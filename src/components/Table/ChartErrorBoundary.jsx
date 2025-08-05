// ChartErrorBoundary.jsx
import React from "react";

class ChartErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Chart Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <span className="text-gray-500 text-xs">Chart Error</span>;
    }
    return this.props.children;
  }
}

export default ChartErrorBoundary;
