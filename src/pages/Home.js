import React from 'react'
import { Incident } from '../components/Incident';

export function Home(props) {
  return (
    <div>
      <Incident
        title="Test incident"
        assignee="Admin"
        status="Resolved"
      />
      <Incident
        title="Another incident"
        assignee="Engineer"
        status="Acknowledged"
      />
    </div>
  )
}
