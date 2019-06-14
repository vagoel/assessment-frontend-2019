import React, { Component } from 'react';

export class CreateIncident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      assignee: '',
      status: 'new'
    }
  }
  createIncident() {
    let { name, assignee, status } = this.state;
    this.props.store.dispatch({ type: 'new', name, assignee, status });
  }

  render() {
    return (
      <div>
        <input type="text" name="name" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} placeholder="Name" />
        <input type="text" name="assignee" value={this.state.assignee} onChange={(event) => this.setState({ assignee: event.target.value })} placeholder="Assignee" />
        <select name="status" value={this.state.status} onChange={(event) => this.setState({ status: event.target.value })}>
          <option value="resolved">resolved</option>
          <option value="pending">pending</option>
          <option value="closed">closed</option>
          <option value="new">new</option>
        </select>
        <button onClick={this.createIncident.bind(this)}>Create Incident</button>
      </div>
    );
  }
}
