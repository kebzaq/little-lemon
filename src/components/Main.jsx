import React from "react";

export default function Main() {
  return (
    <main>
      Main
      <header>
        <h2>Specials</h2>
        <button>Online Menu</button>
      </header>
      <section id="specials">
        <card className="specials-card"></card>
        <card className="specials-card"></card>
        <card className="specials-card"></card>
      </section>
    </main>
  );
}
