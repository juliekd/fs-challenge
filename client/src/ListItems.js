import React from 'react';
import './App.css';

const ListItems = (props) => {
    var options = '';
    if (props.results.errors.length > 0) {
        options = props.results.errors.map((item) => (
            <li key={item}>
                {item}
            </li>
        ))
    } else if (props.results.list.length === 0) {
        options = <li>This number has no previous primes</li>
    } else {
        options = props.results.list.map((item) => (
            <li key={item}>
                {item}
            </li>
        ))
    }
    return <ul>{options}</ul>

    
}

export default ListItems;