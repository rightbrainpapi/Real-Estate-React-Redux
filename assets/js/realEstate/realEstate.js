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
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false,

      filteredData: listingsData
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
  })
  this.setState({
    filteredData: newData
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
