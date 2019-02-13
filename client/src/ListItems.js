import React from 'react';
import './App.css';

const ListItems = (props) => {
    if (props.results.errors.length > 0) {
        const options = props.results.errors.map((item) => (
            <li key={item}>
                {item}
            </li>
        ))
        return <ul>{options}</ul>
    } else {
        const options = props.results.list.map((item) => (
            <li key={item}>
                {item}
            </li>
        ))
        return <ul>{options}</ul>
    }
    
}

export default ListItems;