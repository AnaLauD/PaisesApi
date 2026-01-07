function CountryCard({ country }) {
    return (
        <div className="country-card">
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            <h2>{country.name.common}</h2>
            <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Bandera:</strong> {country.flags}</p>
        </div>
    );
}