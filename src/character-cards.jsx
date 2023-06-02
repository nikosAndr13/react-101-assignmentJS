import { Component } from "react";
import { data } from "../public/fma-data";
import "./character-cards.css";

export class CharacterCards extends Component {
  render() {
    return (
      <>
        <section id="character-cards">
          {data.map((card) => {
            return (
              <div key={card.name} className="card">
                <div className="card-titles">
                  <h3>{card.name}</h3>
                  <h4>{card.nickName}</h4>
                </div>
                <img src={card.imageUrl} alt={card.name} />
                <p>{card.background}</p>
              </div>
            );
          })}
        </section>
      </>
    );
  }
}
