import React from "react";
import { GeoAltFill, Calendar3 } from "react-bootstrap-icons";

const customCards = [
  {
    title: "Live Concert Vibes",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=32&h=32&q=80",
    location: "New York",
    date: "3d",
  },
  {
    title: "Studio Session",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=32&h=32&q=80",
    location: "Los Angeles",
    date: "5d",
  },
  {
    title: "Chill Beats Playlist",
    img: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=32&h=32&q=80",
    location: "London",
    date: "1w",
  },
];

function CustomCards() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Custom Cards</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {customCards.map((card, index) => (
          <div className="col" key={index}>
            <div
              className="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg"
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "300px",
              }}
            >
              {/* Overlay for readability */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 position-relative">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  {card.title}
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={card.avatar}
                      alt="Avatar"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <GeoAltFill className="me-2" />
                    <small>{card.location}</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <Calendar3 className="me-2" />
                    <small>{card.date}</small>
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