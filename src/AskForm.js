import React, { Component } from 'react';
import './AskForm.css';


class AskForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Artista'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label className = "formlabel" >  
            Escolha o tipo de busca:
            <select className="formoptions" value={this.state.value} onChange={this.handleChange}>
              <option className="formoptions" value="artist">Artista</option>
              <option className="formoptions" value="album">Album</option>
              <option className="formoptions" value="song">Musica</option>              
            </select>
          </label>
          <input className="formsubmitbutton" type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default AskForm;