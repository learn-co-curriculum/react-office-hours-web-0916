import React from 'react';


class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onSubmitHandler(event){
    event.preventDefault();
    this.props.fetchNewMovie(this.refs.input.value)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input ref="input"/>
        </form>
      </div>
    )
  }
}

export default SearchBar
