import React from "react";
import { MusicNoteBeamed, Headphones, Mic } from "react-bootstrap-icons";

const features = [
  {
    icon: <MusicNoteBeamed size={32} color="white" />,
    title: "Stream Anywhere",
    description: "Access unlimited songs anytime on any device.",
    bgClass: "bg-primary bg-gradient",
  },
  {
    icon: <Headphones size={32} color="white" />,
    title: "High Quality Audio",
    description: "Experience crystal clear sound with premium streaming.",
    bgClass: "bg-success bg-gradient",
  },
  {
    icon: <Mic size={32} color="white" />,
    title: "Live Sessions",
    description: "Join live artist performances and exclusive events.",
    bgClass: "bg-danger bg-gradient",
  },
];

function FeaturedColumns() {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Music Platform Features</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {features.map((feature, index) => (
          <div className="feature col" key={index}>
            <div
              className={`feature-icon ${feature.bgClass} rounded-3 mb-3 p-3 d-flex align-items-center justify-content-center`}
            >
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedColumns;