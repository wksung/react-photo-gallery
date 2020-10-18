import React from 'react';

class SearchBar extends React.Component{

    state = {
        searchTerm: ''
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.getSearchTerm(this.state.searchTerm);
    };
    
    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={ this.onSubmitForm }>
                            <label className="small">Search Images:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                onChange={ e => this.setState({ searchTerm: e.target.value }) }
                            ></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default SearchBar;