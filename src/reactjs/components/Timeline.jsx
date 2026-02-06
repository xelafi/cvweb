import React from 'react';

const Timeline = ({ children }) => {
  return (
    <div className="timeline">
      {children}
    </div>
  );
};

const TimelineItem = ({ children }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item__marker">
        <div className="timeline-item__dot"></div>
        <div className="timeline-item__line"></div>
      </div>
      <div className="timeline-item__content">
        {children}
      </div>
    </div>
  );
};

Timeline.Item = TimelineItem;

export default Timeline;
