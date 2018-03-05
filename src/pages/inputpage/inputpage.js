import React, {Component} from 'react';
// import apiRoute from '../../../public/routing/apiRoutes';
import $ from 'jquery';

class inputpage extends Component {
  constructor (props) {
		super(props);
		this.state = {
      topic: 'food',
      startdate: '20171120',
      enddate: '20171125'
		}
	}

  handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
		  [name]: value
		})
	}

  searchSubmit = (event) => {
    event.preventDefault()
    console.log('submit button works')

    let newSubmission = {
      topic: this.state.topic,
      startdate: this.state.startdate,
      enddate: this.state.enddate
    }

    $.post("/api/queryall", newSubmission,
    function(data) {
        if (data) {
          console.log(data);
        }

        else {
          console.log('error, not data came through')
        }
      })
    console.log(newSubmission);
  }

//add in JS to hit route

  render() {
    return(
      <div>
        <p> Initial Input Page </p>
        <div>
          <form onSubmit={this.searchSubmit}>
            <label>Topic</label>
            <input
              id='input-topic'
              type='text'
              name='topic'
              value={this.state.topic}
              onChange={this.handleInputChange}
            />
            <label>Start Date</label>
            <input
              type='text'
              name='startdate'
              value={this.state.startdate}
              onChange={this.handleInputChange}
            />
            <label>End Date</label>
            <input
              type='text'
              name='enddate'
              value={this.state.enddate}
              onChange={this.handleInputChange}
            />
            <button id='search-button' type='submit'>Search</button>
          </form>
        </div>
      </div>
    )
  }
}

export default inputpage;
