import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommingSoonComponent from './RouteComponent';

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommingSoonComponent />} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;
