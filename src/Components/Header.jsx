import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/Logo.webp'

const Header = ({ query, setQuery, suggestions }) => {
    return (
        <div className='header'>
            <div className='header-left'>
                <Link to="/"><img src={logo} alt="logo" className='logo' /></Link>
            </div>
            <div className='header-right'>
                <input type="text" placeholder='Search Movies...' className='search-input' value={query} onChange={(e) => setQuery(e.target.value)} />
                <svg className='search-icon' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='suggestions-container'>
                    {suggestions.length > 0 && (
                        <ul className='suggestions-list'>
                            {suggestions.map((movie) => (
                                movie.poster_path && (
                                    <Link to={`/movie/${movie.id}`} key={movie.id} className='suggestion-item'>
                                        <img className='suggestion-image' src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} alt={movie.title} />
                                        <strong className='suggestion-title'>{movie.title} <span className='suggestion-year'>{movie.release_date && `(${movie.release_date.split('-')[0]})`}</span></strong>
                                    </Link>
                                )
                            ))}
                        </ul>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Header