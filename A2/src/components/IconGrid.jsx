import React from 'react';
import { Bootstrap, CpuFill, Calendar3, Home, Speedometer2, Toggles2, GeoFill, Tools } from 'react-bootstrap-icons';

const gridItems = [
  { icon: <Bootstrap />, title: 'Featured title' },
  { icon: <CpuFill />, title: 'Featured title' },
  { icon: <Calendar3 />, title: 'Featured title' },
  { icon: <Home />, title: 'Featured title' },
  { icon: <Speedometer2 />, title: 'Featured title' },
  { icon: <Toggles2 />, title: 'Featured title' },
  { icon: <GeoFill />, title: 'Featured title' },
  { icon: <Tools />, title: 'Featured title' },
];

function IconGrid() {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Icon grid</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {gridItems.map((item, idx) => (
          <div className="col d-flex align-items-start" key={idx}>
            <div className="text-muted flex-shrink-0 me-3" style={{ fontSize: '1.75em' }}>{item.icon}</div>
            <div>
              <h4 className="fw-bold mb-0">{item.title}</h4>
              <p>Paragraph beneath the heading to explain the heading.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconGrid;