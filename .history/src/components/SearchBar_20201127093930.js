import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>SearchBar</div>;
  }
  // state = { term: '' };

  // // the arrow function binds the value of 'this' inside onFormSubmit
  // onFormSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log(this.state.term);
  //   this.props.onSubmit(this.state.term);
  // };

  // render() {
  //   return (
  //     <div className="ui segment">
  //       <form className="ui form" onSubmit={this.onFormSubmit}>
  //         <div className="field">
  //           <label htmlFor="search">Image Search</label>
  //           <input
  //             id="search"
  //             type="text"
  //             value={this.state.term}
  //             onChange={(e) => this.setState({ term: e.target.value })}
  //           ></input>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }
}

export default SearchBar;
