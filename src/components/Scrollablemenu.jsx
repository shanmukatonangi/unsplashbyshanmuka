import React from 'react'
import "./style.css"
import { Link } from "react-router-dom"

function Categories() {

    return (
        <div className="categories">

            <div  className="categories__item categories__item--active">Editorial</div>
            <div  className="categories__item">Following</div>

            <div className="categories__breaker"></div>

            <div className="categories__list">
                <div className="categories__item">Wallpaper</div>
                <div  className="categories__item">Nature</div>
                <div  className="categories__item">People</div>
                <div  className="categories__item">Architecture</div>
                <div className="categories__item">Events</div>
                <div className="categories__item">Busines</div>
                <div  className="categories__item">Experimental</div>
                <div  className="categories__item">Fashion</div>
                <div  className="categories__item">Film</div>
                <div  className="categories__item">Health</div>
                <div  className="categories__item">Technology</div>
                <div className="categories__item">Travel</div>
                <div className="categories__item">Textures </div>
                <div  className="categories__item">Animals</div>
                <div  className="categories__item">Food </div>
                <div className="categories__item">Athletics</div>
                <div className="categories__item">Spirituality</div>
                <div  className="categories__item">Arts</div>
                <div  className="categories__item">History</div>
            </div>
        </div>
    )
}

export default Categories

