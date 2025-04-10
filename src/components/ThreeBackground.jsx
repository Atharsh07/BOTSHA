import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup with fog for depth
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.05);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 5000;
    
    const posArray = new Float32Array(particlesCnt * 3);
    for(let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      fog: true
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Robot parts geometries
    const robotParts = [];
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.CylinderGeometry(0.5, 0.5, 2, 8),
      new THREE.TorusGeometry(0.5, 0.2, 16, 100),
      new THREE.OctahedronGeometry(0.8),
      new THREE.TetrahedronGeometry(0.8),
      new THREE.IcosahedronGeometry(0.7),
      new THREE.DodecahedronGeometry(0.9),
      new THREE.ConeGeometry(0.6, 1.5, 8),
      new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16)
    ];

    const edgesMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8
    });

    const mainMaterial = new THREE.MeshPhongMaterial({
      color: 0x0088ff,
      emissive: 0x00ffff,
      emissiveIntensity: 0.8,
      shininess: 90,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
      specular: 0x00ffff
    });

    for(let i = 0; i < geometries.length; i++) {
      const mesh = new THREE.Mesh(geometries[i], mainMaterial);
      const edges = new THREE.EdgesGeometry(geometries[i]);
      const line = new THREE.LineSegments(edges, edgesMaterial);
      
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 15;
      mesh.scale.setScalar(Math.random() * 1.2 + 0.5);
      
      line.position.copy(mesh.position);
      line.scale.copy(mesh.scale);
      
      scene.add(mesh);
      scene.add(line);
      robotParts.push({ mesh, line });
    }

    // Light
    const light = new THREE.PointLight(0x00ffff, 3, 150);
    const ambientLight = new THREE.AmbientLight(0x0088ff, 0.7);
    scene.add(ambientLight);
    light.position.set(0, 0, 5);
    scene.add(light);

    // Animation
    camera.position.z = 8;
    let time = 0;
    
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;
      
      // Animate robot parts
      robotParts.forEach((part, i) => {
        // Complex rotation
        part.mesh.rotation.x = Math.sin(time + i) * 0.3;
        part.mesh.rotation.y = Math.cos(time + i) * 0.3;
        part.mesh.rotation.z += 0.01;
        
        // Pulsing scale
        const scale = 1 + Math.sin(time * 2 + i) * 0.1;
        part.mesh.scale.setScalar(scale);
        
        // Synchronize edges
        part.line.rotation.copy(part.mesh.rotation);
        part.line.scale.copy(part.mesh.scale);
        
        // Orbital movement
        part.mesh.position.x = Math.cos(time + i * 1.5) * (4 + i);
        part.mesh.position.y = Math.sin(time + i * 1.5) * (4 + i);
        part.mesh.position.z = Math.sin(time * 2) * 2;
        part.line.position.copy(part.mesh.position);
      });
      
      // Swirling particles
      particlesMesh.rotation.y += 0.002;
      particlesMesh.rotation.x = Math.sin(time * 0.5) * 0.2;
      
      // Camera movement
      camera.position.x = Math.sin(time * 0.2) * 2;
      camera.position.y = Math.cos(time * 0.2) * 2;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div ref={mountRef} />
    </motion.div>
  );
}