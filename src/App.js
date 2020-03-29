import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    data: [{
      name: "Lakshman",
      "transactions": [
        {
          "month": "January",
          "transfer": 120,
          trans: null
        },
        {
          "month": "February",
          "transfer": 90,
          trans: null
        },
        {
          "month": "March",
          "transfer": 50,
          trans: null
        }
      ],
      total: null
    },
    {
      name: "Kumar",
      "transactions": [
        {
          "month": "January",
          "transfer": 180,
          trans: null
        },
        {
          "month": "February",
          "transfer": 120,
          trans: null
        },
        {
          "month": "March",
          "transfer": 90,
          trans: null
        }
      ],
      total: null
    },
    {
      name: "Yerra",
      "transactions": [
        {
          "month": "January",
          "transfer": 100,
          trans: null
        },
        {
          "month": "February",
          "transfer": 200,
          trans: null
        },
        {
          "month": "March",
          "transfer": 20,
          trans: null
        }
      ],
      total: null
    }
    ]
  }
  componentDidMount() {debugger;
    let tableData = this.state.data.map(value => {
      let total = 0;
      value.transactions.forEach((val) => {debugger;


        if (val.transfer >= 100) {
          val.trans = 2 * (val.transfer-100)
        } 

        if(val.transfer >100){
          val.trans = val.trans + (1*50)
        }
        
        if (val.transfer > 50 && val.transfer <= 100) {
          val.trans = 1* (val.transfer-50)
        } 
        
        if(val.transfer <=50){
          val.trans = 0;
        }
        total = total + val.trans;
      })
      value.total = total;

      return value
    });
    this.setState({ data: tableData })
  }
  render() {
    return (
      <div className="App">
        <table class="table table-bordered">
          <thead>
            <th>Name</th>
            <th>January / points </th>
            <th>February / points </th>
            <th>March / points </th>
            <th>Total</th>
          </thead>
          <tbody>
            {this.state.data.map(value => {
              return (
                <tr >
                  <td>{value.name}</td>
                  {value.transactions.map(val => {
                    return (
                      <td >{val.transfer} / {val.trans} </td>
                    )
                  })}

                  <td>{value.total}</td>
                </tr>
              )
            })}

          </tbody>
        </table>

      </div>
    );
  }

}

export default App;
