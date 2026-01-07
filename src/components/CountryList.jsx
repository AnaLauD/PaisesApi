import { useEffect, useState } from "react";
import getContries from "../services/CountryApi";
import CountryCard from "./CountryCard";

function CountryList() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await getContries(20);

            const detailedData = await Promise.all(
                data.map(async (country) => {
                    const response = await fetch(`https://restcountries.com/v3.1/name/${country.name.common}?fullText=true`);
                    const details = await response.json();  
                    return details[0];
                })
            );
            setCountries(detailedData);
            setLoading(false);
        }
        fetchCountries();
    }, []);
    if (loading) {
        return <p>Loading countries...</p>;
    }

    return (
        <div className="country-list">
            {countries.map((country) => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
    );
}

export default CountryList;
