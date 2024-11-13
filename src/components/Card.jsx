const Card = ({ children, className = '', ...props }) => {
    return (
      <div
        className={`rounded-xl p-8 text-white ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  export default Card;