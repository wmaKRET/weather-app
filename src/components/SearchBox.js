import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"

import { GEO_API_URL, geoApiOptions } from "../api"

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState(null)

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}cities?minPopulation=100000&namePrefix=${inputValue}`,
            geoApiOptions
        )
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map(city => {
                        return {
                            label: `${city.name}, ${city.countryCode}`,
                            latitude: city.latitude,
                            longitude: city.longitude
                        }
                    })
                }
            })
            .catch(err => console.error(err))
    }
    
    const handleChange = (searchData) => {
        setSearchValue(searchData)
    }

    return (
        <AsyncPaginate
            className="searchbox"
            placeholder="Search for city..."
            debounceTimeout={600}
            value={searchValue}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
    )
}

export default SearchBox