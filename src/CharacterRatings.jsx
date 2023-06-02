import { Component } from "react";
import { Table } from "./Table";
import "./character-ratings.css";

export class CharacterRatings extends Component {
  render() {
    return (
      <>
        <section id="character-ratings">
          <h4>Top Characters</h4>
          <Table />
        </section>
      </>
    );
  }
}
