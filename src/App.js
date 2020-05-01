import React from 'react';
import styles from './App.module.css';
import { Cards , Chart , CountryPicker } from './Component';
import coronaImage from './images/covid19.png';
import ronaImage from './images/lal.jpg';
import { fetchData } from './api';


class App extends React.Component{

    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data:fetchedData });
    } 


    handleCountryChange =    async(country) =>{
        const fetchedData = await fetchData(country); 


        this.setState({ data:fetchedData, country: country });
    }

    render(){
        const {data , country} = this.state;
        return(
            <div className = {styles.container}>
              <img className={styles.covid19} src= {coronaImage} alt= 'COVID-19' />

              
              
              <CountryPicker className={styles.aa} handleCountryChange ={this.handleCountryChange}/>
                          
             
               <Cards data = {data}/>              
               <Chart data = {data} country= {country}/>
               <img className={styles.lal} src= {ronaImage} alt= '' />     
            </div>
        )
    }
}
export default App;