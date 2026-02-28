import React from "react";
import {
  LightningCharge,
  Star,
  BoxArrowInDown,
  MusicNoteList,
  MicFill,
  BroadcastPin,
  FileMusic,
  Layers
} from "react-bootstrap-icons";

const gridItems = [
  { title: "Trending Tracks", icon: <LightningCharge size={32} className="text-primary" /> },
  { title: "Top Charts", icon: <Star size={32} className="text-primary" /> },
  { title: "New Releases", icon: <BoxArrowInDown size={32} className="text-primary" /> },
  { title: "Genres", icon: <MusicNoteList size={32} className="text-primary" /> },
  { title: "Podcasts", icon: <MicFill size={32} className="text-primary" /> },
  { title: "Live Radio", icon: <BroadcastPin size={32} className="text-primary" /> },
  { title: "Saved Albums", icon: <FileMusic size={32} className="text-primary" /> },
  { title: "Your Library", icon: <Layers size={32} className="text-primary" /> },
];

const IconGrid = () => {
  return (
    <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">Browse Music</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {gridItems.map((item, index) => (
          <div className="col d-flex align-items-start" key={index}>
            <div className="flex-shrink-0 me-3">
              {item.icon}
            </div>

            <div>
              <h5 className="fw-bold mb-1">{item.title}</h5>
              <p className="text-muted small">
                Explore curated selections and discover new sounds.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGrid;