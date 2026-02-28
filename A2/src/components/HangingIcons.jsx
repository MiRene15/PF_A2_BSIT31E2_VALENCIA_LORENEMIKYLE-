import React from "react";
import { LightningCharge, MusicNoteBeamed, Speaker } from "react-bootstrap-icons";

const services = [
  {
    icon: <LightningCharge size={32} color="#001e82" />,
    title: "High-Quality Streaming",
    description:
      "Stream music in crystal-clear audio with adaptive bitrate technology.",
  },
  {
    icon: <MusicNoteBeamed size={32} color="#001e82" />,
    title: "Studio Tools",
    description:
      "Upload tracks, manage albums, and monitor performance analytics.",
  },
  {
    icon: <Speaker size={32} color="#001e82" />,
    title: "Smart Recommendations",
    description:
      "Receive intelligent song suggestions based on your activity.",
  },
];

const HangingIcons = () => {
  return (
    <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">Music Services</h2>

      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {services.map((item, index) => (
          <div className="col d-flex align-items-start" key={index}>
            <div className="bg-light text-dark p-3 rounded me-3 shadow-sm d-flex align-items-center justify-content-center">
              {item.icon}
            </div>

            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HangingIcons;