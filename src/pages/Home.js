import React, { Component } from 'react'
import { Incident } from '../components/Incident';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.props.store.subscribe(this.render);
  }

  render() {
    let { store } = this.props;
    let incidents = store.getState().map(incident => {
      return (<Incident
        title={incident.name}
        assignee={incident.assignee}
        status={incident.status}
      />)
    });

    return (
      <div>
        {incidents}
      </div>
    )
  }

}
