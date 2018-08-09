import React from 'react';

import './PersonSearchResult.css';

/*======================================================================
// This functional component will display data for an individual person
// passed down as props.
======================================================================*/
const PersonSearchResult = (props) => {
    return (
        <div className="person-search-result">
            <h3>Result #{props.resultNum}</h3>
            <p>FirstName: {props.personFName}</p>
            <p>LastName: {props.personLName}</p>
            <p>Address: {props.personAddress}</p>
            <p>City: {props.personCity}</p>
            <p>State: {props.personState}</p>
        </div>
    )
}

export default PersonSearchResult;