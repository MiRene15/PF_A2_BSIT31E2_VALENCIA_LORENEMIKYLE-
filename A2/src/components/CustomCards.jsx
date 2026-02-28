import React from 'react';
import { GeoFill, Calendar3 } from 'react-bootstrap-icons';

const cards = [
  { img: 'unsplash-photo-1.jpg', title: 'Short title, long jacket', location: 'Earth', days: '3d' },
  { img: 'unsplash-photo-2.jpg', title: 'Much longer title that wraps to multiple lines', location: 'Pakistan', days: '4d' },
  { img: 'unsplash-photo-3.jpg', title: 'Another longer title belongs here', location: 'California', days: '5d' },
];

function CustomCards() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Custom cards</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {cards.map((card, idx) => (
          <div className="col" key={idx}>
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${card.img})` }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{card.title}</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <GeoFill className="me-2" />
                    <small>{card.location}</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <Calendar3 className="me-2" />
                    <small>{card.days}</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomCards;