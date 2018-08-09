import React, { Component } from 'react';
import axios from 'axios';

import Loader from '../../components/Loader/Loader';
import NoResults from '../../components/NoResults/NoResults';
import PersonSearchResult from '../../components/PersonSearchResult/PersonSearchResult';
import './PeopleSearch.css';

import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

/*=====================================================================
// Animated styles using Aphrodite and React Animations.
=====================================================================*/
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1.5s'
  }
})

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
            usState: '',
            inputFailure: false,
            loading: false,
            noResults: false,
            searchData: []
        };
    }

    /*= =====================================================================
    // Upon a user clicking Submit, handle search. First we check to make
    // sure queries have been entered for all three input elements and
    // display a loader if so. Then we perform the GET request and handle the 
    // response.
    ====================================================================== */
    handlePeopleSearchSubmit = (e) => {
        e.preventDefault();
        
        if ((!this.state.firstName) || (!this.state.lastName) || (!this.state.usState)) return;

        this.setState({ 
            loading: true, 
            noResults: false,
            searchData: []
        });

        axios.get('/peoplesearch', { // Perform GET request to API
            params: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                usState: this.state.usState
            }
        })
            .then(res => {
                if (res.data.datafinder.results) { // If results were received
                    this.setState({
                        loading: false, 
                        noResults: false,
                        searchData: res.data.datafinder.results
                    })
                } else {
                    this.setState({
                        loading: false, 
                        noResults: true,
                        searchData: []
                    })
                }
            })
            .catch(err => {
                this.setState({
                    loading: false, 
                    noResults: true,
                })
                console.log('An error occurred during fetch. ' + err);
            })
    }

    /*= =====================================================================
    // Here we will always render the search form. Additionally, we will
    // render a loader when transactions are taking place, a no results
    // message if no results are received on a search, and map results
    // using a child stateless functional component with props passed down
    // when results are received.
    ====================================================================== */
    render() {
        return (
            <div className="people-search">
                <form className={["people-search-form", css(styles.fadeIn)].join(' ')} onSubmit={this.handlePeopleSearchSubmit}>
                    <div className="people-search-form-input">
                        <label>FirstName</label>
                        <input className="people-search-fname" type="text" name="email" label="FirstName" placeholder="eg. John" disabled={this.state.loading} onChange={e => this.setState({ firstName: e.target.value })} />
                    </div>
                    <div className="people-search-form-input">
                        <label>LastName</label>
                        <input className="people-search-lname" type="text" name="password" placeholder="eg. Smith" disabled={this.state.loading} onChange={e => this.setState({ lastName: e.target.value })} />
                    </div>
                    <div className="people-search-form-input">
                        <label>State</label>
                        <input className="people-search-usstate" type="text" name="password" placeholder="eg. LA" disabled={this.state.loading} onChange={e => this.setState({ usState: e.target.value })} />
                    </div>
                    <button className="people-search-form-submit" type="submit" value="Submit" disabled={this.state.loading}>Submit</button>
                </form>
                <div className="people-search-body">
                    {(this.state.loading && <Loader />)}
                    {(this.state.noResults && <NoResults />)}
                    {(this.state.searchData && this.state.searchData.map((person, index) => {
                        return (
                            <PersonSearchResult 
                                key={person.phone}
                                resultNum={index + 1}
                                personFName={person.FirstName}
                                personLName={person.LastName}
                                personAddress={person.Address}
                                personCity={person.City}
                                personState={person.State}
                            />
                        )})
                    )}
                </div>
            </div>
        )
    }
}

export default PeopleSearch;