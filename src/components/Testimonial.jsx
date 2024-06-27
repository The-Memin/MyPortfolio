const TestimonialCard = ({ text, author, role, imageUrl }) => {
    return (
      <div className="testimonial-card">
        <div className="testimonial-content">
          <p className="testimonial-text">"{text}"</p>
          <div className="testimonial-author">
            <img src={imageUrl} alt={`${author}'s photo`} className="author-photo" />
            <div className="author-info">
              <h4 className="author-name">{author}</h4>
              <p className="author-role">{role}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;