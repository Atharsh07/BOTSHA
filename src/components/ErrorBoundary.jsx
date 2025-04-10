import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-900/20 border border-red-500 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-red-400 mb-2">Something went wrong</h3>
          <p className="text-red-300 mb-4">{this.state.error?.message || 'Unknown error'}</p>
          <button 
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}