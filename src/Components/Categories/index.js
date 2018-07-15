import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CategoriesData from './../../Data/Categories'
import './Categories.css'

class Categories extends Component {
    render() {
        return (
            <ul className="Categories">
                {
                    CategoriesData.map((category, i) => {
                        return (
                            <li className="Wood" key={`${category.text}-${i}`}>
                                <Link to={category.uri}>{category.text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default Categories;