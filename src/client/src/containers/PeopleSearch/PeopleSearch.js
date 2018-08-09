import React, { Component } from 'react';

import './PeopleSearch.css';

/*======================================================================
// This container manages state and contains the major functions
// related to People Search.
======================================================================*/
class PeopleSearch extends Component {
    /*= =====================================================================
    // Create state for the user's People Search entries including First
    // Name, Last Name, and US State.
    ====================================================================== */
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            usState: ''
        };
    }

    /*= =====================================================================
    // Upon a user clicking Submit, handle search.
    ====================================================================== */
    handlePeopleSearchSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.firstName);
    }

    render() {
        return (
            <div className="people-search">
                <form className="people-search-form" onSubmit={this.handlePeopleSearchSubmit}>
                    <div className="people-search-form-input">
                        <label>FirstName</label>
                        <input className="people-search-fname" type="text" name="email" label="FirstName" placeholder="eg. John" onChange={e => this.setState({ firstName: e.target.value })} />
                    </div>
                    <div className="people-search-form-input">
                        <label>LastName</label>
                        <input className="people-search-lname" type="text" name="password" placeholder="eg. Smith" onChange={e => this.setState({ lastName: e.target.value })} />
                    </div>
                    <div className="people-search-form-input">
                        <label>State</label>
                        <input className="people-search-usstate" type="text" name="password" placeholder="eg. LA" onChange={e => this.setState({ usState: e.target.value })} />
                    </div>
                    <button className="people-search-form-submit" type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PeopleSearch;