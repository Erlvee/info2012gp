import React, {useState} from 'react'
import Footer from './Footer.js'



function MainContent(props) {
    const arr = {Bergen: ["Colonialen 44", "Enhjørningen Restaurant", "Restaurant 1877"]};
    const [value, setValue] = useState('');
    const [savedValue, setSavedValue] = useState('')
    const [searchResult, setSearch] = useState('');
    const [searchMessage, setSearchMessage] = useState(null);
    const [renderSearch, setRenderSearch] = useState(null);

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        if (arr.hasOwnProperty(value)) {
            let result = arr[value];
            setRenderSearch(true);
            setSavedValue(value);
            setSearchMessage(true);
            setSearch("Showing results for ");
        } else {
            setSavedValue(value);
            setSearchMessage(true);
            setSearch('No results for ');
        }
        event.preventDefault();
    }

    return (
    <div className="searchBox">
        <h3>Search places to eat by city below</h3>
        <form className="searchForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search.." value={value} onChange={handleChange}/>
            <button className="searchButton" type="submit"><i className="fa fa-search"></i></button>
        </form>
        {searchMessage && <p>{searchResult}"{savedValue}"</p>}
        {renderSearch && <div className="searchResultBtn"><button onClick={() => {props.renderMain(!props.initMain); props.renderRestComponent(!props.initRestaurant)}} >Show all places(47)</button> 
        <button >Show by food category (13)</button></div>}
        <Footer />
    </div>
    ) 
}

export default MainContent;