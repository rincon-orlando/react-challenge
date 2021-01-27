import React from "react";

export class PokeCard extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img
          src={this.props.img_default}
          alt={this.props.name + " default image"}
        />
        <img
          src={this.props.img_shiny}
          alt={this.props.name + " shiny image"}
        />
         <p />
        <a href={this.props.video}>Video</a>
      </div>
    );
  }
}
