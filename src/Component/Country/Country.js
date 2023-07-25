import React from 'react';

const Country = (props) => {
    // const { name, area, population, capital } = props.country;
    return (
        <div className="countryDiv">
            <img src={props.flags} className='image'></img>
                <p>Country :<strong>{props.name}</strong></p>
                <p>Area: <strong>{props.area}</strong></p>
                <p>Capital : <strong>{props.capital}</strong></p>
                <p>Population : <strong>{props.population}</strong></p>
            {/* <div className="countryDiv"></div> */}
        </div>
    );
};

export default Country;
