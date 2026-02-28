import React from 'react';
import { Toggles2, CpuFill, Tools } from 'react-bootstrap-icons';

const items = [
  { icon: <Toggles2 />, title: 'Featured title' },
  { icon: <CpuFill />, title: 'Featured title' },
  { icon: <Tools />, title: 'Featured title' },
];

function HangingIcons() {
  return (
    <div className="container px-4 py-5" id="hanging-icons">
      <h2 className="pb-2 border-bottom">Hanging icons</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {items.map((item, idx) => (
          <div className="col d-flex align-items-start" key={idx}>
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">{item.icon}</div>
            <div>
              <h2>{item.title}</h2>
              <p>Paragraph beneath the heading to explain the heading.</p>
              <a href="#" className="btn btn-primary">Primary button</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HangingIcons;