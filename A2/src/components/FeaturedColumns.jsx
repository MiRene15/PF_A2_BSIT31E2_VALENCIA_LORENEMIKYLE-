import React from 'react';
import { Collection, PeopleCircle, Toggles2, ChevronRight } from 'react-bootstrap-icons';
import ColumnCard from './ColumnCard';

const features = [
  { icon: <Collection />, title: 'Featured title', text: 'Paragraph beneath the heading to explain the heading.' },
  { icon: <PeopleCircle />, title: 'Featured title', text: 'Paragraph beneath the heading to explain the heading.' },
  { icon: <Toggles2 />, title: 'Featured title', text: 'Paragraph beneath the heading to explain the heading.' },
];

function FeaturedColumns() {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Columns with icons</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {features.map((feature, idx) => (
          <ColumnCard feature={feature} key={idx}/>
        ))}
      </div>
    </div>
  );
}

export default FeaturedColumns;