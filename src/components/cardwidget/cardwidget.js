// components/CardWidget/CardWidget.js
import React from 'react';

const CardWidget = ({ message }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card Widget</h5>
        <p className="card-text">{message}</p>
      </div>
    </div>
  );
}

export default CardWidget;
