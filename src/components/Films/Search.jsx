import React from "react";

class Search extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         search: '',
         type: ''
      }
      window.store = this.state
   }


   handleKey = (event) => {
      if (event.key === "Enter") {
         this.props.searchMovie(this.state.search, this.state.type)
      }
   }

   handleRadioButton = (event) => {
      this.setState(() => ({[event.target.name]: event.target.value}), () => {
         this.props.searchMovie(this.state.search, this.state.type);
      })
   }

   render() {
      const { search, type } = this.state;
      return (
         <div className="row">
            <div className="col s12">
               <div className="input-field">
                  <input className="validate"
                     placeholder="search"
                     type="search"
                     value={search}
                     onChange={(event) => { this.setState({ search: event.target.value }) }}
                     onKeyDown={this.handleKey} />

                  <div>
                     <label>
                        <input 
                              className="with-gap" 
                              name="type" 
                              value='' 
                              type="radio" 
                              onChange={this.handleRadioButton} 
                              checked={type===''}/>
                        <span>All</span>
                     </label>
                     <label>
                        <input 
                              className="with-gap" 
                              name="type" 
                              value='movie' 
                              type="radio" 
                              onChange={this.handleRadioButton} 
                              checked={type==='movie'}/>
                        <span>Movies</span>
                     </label>
                     <label>
                        <input 
                              className="with-gap" 
                              name="type" 
                              value='series'  
                              type="radio" 
                              onChange={this.handleRadioButton} 
                              checked={type==='series'}/>
                        <span>Series</span>
                     </label>
                  </div>
               </div>
               <button className="waves-effect waves-light btn search-btn"
                  onClick={() => { this.props.searchMovie(this.state.search, this.state.type) }}>
                  Search
               </button>
            </div>
         </div>

      )
   }
}

export default Search;