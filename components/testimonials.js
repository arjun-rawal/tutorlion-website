import React, { useEffect, useRef } from 'react';

const Testimonial = ({ name, feedback }) => {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#F2F2F2',
        borderRadius: '8px',
        marginBottom: '20px',
      }}
    >
      <h3>{name}</h3>
      <p>{feedback}</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const testimonialsContainer = testimonialsRef.current;
    const testimonials = testimonialsContainer.querySelectorAll('div');

    let testimonialIndex = 0;

    const animateTestimonials = () => {
      testimonials[testimonialIndex].classList.add('active');

      setTimeout(() => {
        testimonials[testimonialIndex].classList.remove('active');
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        testimonials[testimonialIndex].classList.add('active');
      }, 5000); // Change the duration (in milliseconds) for each testimonial

      setTimeout(animateTestimonials, 6000); // Change the interval (in milliseconds) between testimonials
    };

    animateTestimonials();

    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div ref={testimonialsRef}>
      <style>
        {`
          .active {
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          }
        `}
      </style>
      <Testimonial name="Parent 1" feedback="Testimonial content 1" />
      <Testimonial name="Parent 2" feedback="Testimonial content 2" />
      <Testimonial name="Parent 3" feedback="Testimonial content 3" />
      <Testimonial name="Parent 4" feedback="Testimonial content 4" />
      <Testimonial name="Parent 5" feedback="Testimonial content 5" />
    </div>
  );
};

export default Testimonials;
