import React,{ useState,useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.css';
import { fetchCountry } from '../../api';


const CountryPicker = () => {
   const [fetchedCountries , setFetchedCountries] = useState([]);

    useEffect(() =>{
        const fetchCountries = async() =>{
            setFetchedCountries(await fetchCountry);
        }
        fetchAPI();
    }, [setFetchedCountries]);
    console.log(fetchedCountries);
    return(
       <FormControl className = {styles.formcontrol}>
           <NativeSelect>
               <option value = "global">Global</option>
           </NativeSelect>
       </FormControl>
    );
}
export default CountryPicker;