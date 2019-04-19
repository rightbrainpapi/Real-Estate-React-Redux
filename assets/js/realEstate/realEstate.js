import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Filter from './Filter'
import Listings from './Listings'
import listingsData from './data/listingsData'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      listingsData: listingsData,
      city: 'All',
      homeType: 'All',
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false,

      filteredData: listingsData,
      populateFormsData: ''
    }
  }
  change = (e) => {
    var name = e.target.name
    var value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value
    this.setState({
      [name]: value  //this takes the value of the field and creates a state key using the name of the form.
    }, () => {
      console.log(this.state)
      this.filteredData()
    })

  }

filteredData = (e) =>{
  var newData = this.state.listingsData.filter((item)=> {
    return item.price >= this.state.min_price && item.price <= this.state.max_price
    && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space
    && item.rooms >= this.state.bedrooms
  })

  //if the state.city is not equal to 'All', filter to find only the particular city
  if (this.state.city != 'All') {
    newData = newData.filter((item)=>{
      return item.city == this.state.city
    })
  }


    //if the state.homeType is not equal to 'All', filter to find only the particular city
    if (this.state.homeType != 'All') {
      newData = newData.filter((item)=>{
        return item.homeType == this.state.homeType
      })
    }
  this.setState({
    filteredData: newData
  })
}

populateForms = (e) => {
  //----------------CITY
  var cities = this.state.listingsData.map((item)=>{
    return item.city
  })
  //Set removes any repeates and keeps only one instance of the city
  cities = new Set(cities)
  cities = [...cities].sort() //This creates an array using the data that is in the set

   //----------------HOMETYPES
  var homeTypes = this.state.listingsData.map((item)=>{
    return item.homeType
  })
  //Set removes any repeates and keeps only one instance of the homeType
  homeTypes = new Set(homeTypes)
  homeTypes = [...homeTypes].sort() //This creates an array using the data that is in the set
  
  //----------------ROOMS
  var bedrooms = this.state.listingsData.map((item)=>{
    return item.rooms
  })
  //Set removes any repeates and keeps only one instance of the room
  bedrooms = new Set(bedrooms)
  bedrooms = [...bedrooms].sort() //This creates an array using the data that is in the set

  this.setState({
    populateFormsData: {
      homeTypes,
      bedrooms,
      cities

    }
  },()=>{
    console.log(this.state)
  })
}



  render () {
    // console.log(this.state.listingsData)
    return (<div>
      <Header/>
      <section id='content-area'>
        <Filter
        change={this.change}
        globalState={this.state}
        populateAction={this.populateForms}
        />
        <Listings
        listingsData={this.state.filteredData}
        />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
