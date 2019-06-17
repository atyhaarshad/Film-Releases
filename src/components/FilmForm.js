import React,{Component} from 'react';

class FilmForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      url: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event){
    this.setState({name: event.target.value});
  }

  handleUrlChange(event){
    this.setState({url: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    if (!this.state.name.trim() || !this.state.url.trim()){
      return;
    }
    this.props.onFilmSubmit(this.state);
    this.setState({name: '', url: ''});
  }


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Film name" value={this.state.name} onChange={this.handleNameChange}/>
        <input type="text" placeholder="Imdb URL" value={this.state.url} onChange={this.handleUrlChange}/>
        <input type="submit" value="Add film" />
      </form>
    );
  }
}



export default FilmForm;
