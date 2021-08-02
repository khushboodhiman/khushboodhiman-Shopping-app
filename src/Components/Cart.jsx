import * as React from "react";

function SvgFiRrShoppingCart(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      {...props}
    >
      <path d="M22.713 4.077A2.993 2.993 0 0020.41 3H4.242L4.2 2.649A3 3 0 001.222 0H1a1 1 0 000 2h.222a1 1 0 01.993.883l1.376 11.7A5 5 0 008.557 19H19a1 1 0 000-2H8.557a3 3 0 01-2.82-2h11.92a5 5 0 004.921-4.113l.785-4.354a2.994 2.994 0 00-.65-2.456zM21.4 6.178l-.786 4.354A3 3 0 0117.657 13H5.419l-.941-8H20.41a1 1 0 01.99 1.178z" />
      <circle cx={7} cy={22} r={2} />
      <circle cx={17} cy={22} r={2} />
    </svg>
  );
}

export default SvgFiRrShoppingCart;