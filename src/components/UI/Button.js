
const Button = ({ textOnly, onClick, type, children }) => {
    return (
      <button
        className={textOnly ? "text-button" : "button"}
        type={type || "button"}
        onClick={onClick}
      > 
      {children}
      </button>
    );
  };
  
  export default Button;