import React, { Component } from 'react';

export class CreateIncident extends Component {

  createIncident() {
    this.props.store.dispatch({ type: 'new', name: 'name', assignee: 'assignee', status: 'status' });
  }

  render() {
    return (
      // <p> Create Incident form should be here</p >
      <button onClick={this.createIncident.bind(this)}>Create Incident</button>
    );
  }
}
