import React from "react";

class AddPokeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeInput: ""
    };
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      pokeInput: e.target.value
    });
  }

  handleSubmit(e) {
    props.addPokemon(this.state.pokeInputInput, this.pros.key);
  }

  render() {
    return (
      <form
        type="submit"
        onSubmit={this.handleSubmit.bind(this)}
        className="pokeTeamSlot"
      >
        Enter a Pokemon Name or ID:
        <input onChange={this.handleChange.bind(this)}></input>
        <button>Add Pokemon</button>
      </form>
    );
  }
}

export default AddPokeForm;
