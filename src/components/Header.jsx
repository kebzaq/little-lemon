import React from "react";

export default function Header() {
  return (
    <header id="callforaction container">
      <div className="row justify-content-lg-center">
        <div className="hero col col-xl-4">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            rerum tenetur temporibus sequi iusto obcaecati eum ipsa illo at
            facere voluptatem vel impedit, omnis id doloremque natus eligendi
            sunt quaerat.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="hero col col-xl-4">
          <img src="" alt="little lemon restaurant image" />
        </div>
      </div>
    </header>
  );
}
