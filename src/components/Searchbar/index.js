
import React from 'react';
import {Container} from './style'
import {FaYoutube} from 'react-icons/fa';


class SearchBar extends React.Component {
  state = {term: ''};
  handleSearchInput = (ev)=>{
    // console.log(ev.target.value)
    this.setState({term: ev.target.value})
  }
  handleFormSubmit=(ev)=>{
    ev.preventDefault()
    console.log(this.state.term)
    this.props.submit(this.state.term)
 
  }
  render() {
    return(
      <>
        <Container>
          <form onSubmit={this.handleFormSubmit}>
            <FaYoutube color='#41d348' size='40px' />
            <input
              placeholder="Search..."
              type="text" 
              value={this.state.term}
              onChange={this.handleSearchInput}
            />
          </form>
        </Container>
      </>
    )
  }
}

export default SearchBar