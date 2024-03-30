import React from 'react';
import "../styles/Events.css"; 
import Event1 from "../assets/Event1.png";
import Event2 from "../assets/Event2.png";
import Event3 from "../assets/Event3.png";
import Event4 from "../assets/Event4.png";

function Event({ image, alt, title, description }) {
  return (
    <div className='card'>
      <img src={image} alt={alt} />
      <div className='card-content'>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className='btn'>Register</a>
      </div>
    </div>
  );
}

function Events() {
  const eventsData = [
    {
      image: Event1,
      alt: "Event 1",
      title: "Event 1",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat aspernatur, impedit modi veritatis saepe inventore, labore sunt."
    },
    {
      image: Event2,
      alt: "Event 2",
      title: "Event 2",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat aspernatur, impedit modi veritatis saepe inventore, labore sunt."
    },
    {
      image: Event3,
      alt: "Event 3",
      title: "Event 3",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat aspernatur, impedit modi veritatis saepe inventore, labore sunt."
    },
    {
      image: Event4,
      alt: "Event 4",
      title: "Event 4",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat aspernatur, impedit modi veritatis saepe inventore, labore sunt."
    }
  ];

  return (
    <div id= "event" className='card-container'>
      <h1 className='UpcomingEvents'>UPCOMING EVENTS</h1>
      <div className='events'>
        {eventsData.map((event, index) => (
          <Event
            key={index}
            image={event.image}
            alt={event.alt}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;