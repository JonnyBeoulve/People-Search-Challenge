import React from 'react';

import './PersonSearchResult.css';

import { slideInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

/*=====================================================================
// Animated styles using Aphrodite and React Animations.
=====================================================================*/
const styles = StyleSheet.create({
    slideInRight: {
    animationName: slideInRight,
    animationDuration: '1.5s'
  }
})

/*======================================================================
// This functional component will display data for an individual person
// passed down as props.
======================================================================*/
const PersonSearchResult = (props) => {
    return (
        <div className={["person-search-result", css(styles.slideInRight)].join(' ')}>
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