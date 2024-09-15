import React from "react";

function Button({
  title = "default",
  color = "btn-primary",
  onClick = () => {},
}) {
  return (
    <button onClick={onClick} className={`btn ${color}`}>
      {title}
    </button>
  );
}

export default Button;
