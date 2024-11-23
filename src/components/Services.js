import ServiceCard from './ServiceCard';
import event from '../images/event.jpg';
import artist from '../images/artist.jpg';
import venue from '../images/event.jpg';
import merchandise from '../images/merchandise.jpg';

function Services() {
  return (
    <div className="services-container py-5">
      <div className="container">
        <div className="row">
          {/* Event Planning & Consultation */}
          <ServiceCard
            imageSrc={event}
            altText="Event Planning & Consultation"
            title="Event Planning & Consultation"
            description="Our expert team guides you through every step of the event planning process. From conceptualizing the theme to managing logistics, we ensure a seamless experience. 
                        We listen to your vision and transform it into reality, handling all the details so you can enjoy the occasion."
          />
          
          {/* Artist Booking & Management */}
          <ServiceCard
            imageSrc={artist}
            altText="Artist Booking & Management"
            title="Artist Booking & Management"
            description="We connect you with top-tier talent, ensuring that the performances align perfectly with your event's atmosphere. Our team manages all aspects of artist booking, 
                        from contracts to logistics, providing a stress-free experience and unforgettable entertainment for your guests."
          />

          {/* Venue Scouting & Setup */}
          <ServiceCard
            imageSrc={venue}
            altText="Venue Scouting & Setup"
            title="Venue Scouting & Setup"
            description="Finding the perfect venue can be challenging, but our venue scouting services simplify the process. We assess your requirements and present options that fit your vision, 
                        whether it's a charming garden or a modern loft. Our team also handles the setup, ensuring every detail is perfect for your event."
          />

          {/* Performance and Event Venue */}
          <ServiceCard
            imageSrc={merchandise}
            altText="Performance and Event Venue"
            title="Performance and Event Venue"
            description="Host your event at our state-of-the-art in-house venue, designed for flexibility and equipped with advanced sound and lighting systems. 
                        Our venue offers an unforgettable experience, ensuring your celebration is memorable, whether it’s a wedding, corporate event, or private party."
          />
        </div>
      </div>

      {/* Removed all modal components */}
    </div>
  );
}

export default Services;
