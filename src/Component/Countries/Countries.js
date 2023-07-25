import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';
import { division, multiply, subtract, sum } from '../../Utilities/calculate';


const Countries = (props) => {
    const [countries, setCountry] = useState([]);
    const url='countryApi.json';
    
    useEffect(() => {
        try {
            fetch(url)
                .then(response => response.json())
                .then(countryData => setCountry(countryData));
        }
        catch (e) {
            alert(e);
        }
    }, [])

    return (
        <div>
            <h1>Total Countries : {countries.length}</h1>
            <h2 class='calculation'>Sum : {sum(20,10)}</h2>
            <h2 class='calculation'>Subtract : {subtract(200,100)}</h2>
            <h2 class='calculation'>Multiply : {multiply(30,5)}</h2>
            <h2 class='calculation'>Division : {division(90,30)}</h2>
            {
                // <h1>Country : {countries.name.common}</h1>
                countries.map(countries=> <Country 
                    name={countries.name.common} 
                    flags={countries.flags.png} 
                    area={countries.area}
                    capital={countries.capital}
                    population={countries.population}
                    key={countries.cca2}
                    >
                </Country>)

            }
        </div>
    )
};

export default Countries;
