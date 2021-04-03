import React, { useState } from 'react';

const Accordion = props => {
  const { items } = props;
  
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = index => {
    setActiveIndex(index)
  }

  const renderItems = items.map((item, index) => {
    const activeItem = index === activeIndex ? 'active' : ''
    return (
      <div key={item.title}>
        <div
          className={`title ${activeItem}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${activeItem}`}>
          <p>
            {item.content}
          </p>
        </div>
      </div>
    );
  })
  return (
    <div className="ui styled accordion">
      {renderItems}
    </div>
  )
}

export default Accordion;