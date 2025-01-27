import { useState } from "react";

function Button({ color = "primary", onClick, children }) {
  return (
    <>
      <button type="button" onClick={onClick} className={`btn btn-${color}`}>
        {children}
      </button>
    </>
  );
}

export default Button;
