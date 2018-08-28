import React, { Component } from 'react';
import Header from './../Header'
import { Link } from "react-router-dom";
import CategoriesData from './../../Data/Categories'
import './Categories.css'

class Categories extends Component {
    render() {
        return (
            <div className="Categories__Wrapper">
                <Header />
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
            </div>
        );
    }
}

export default Categories;