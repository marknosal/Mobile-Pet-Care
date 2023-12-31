import React from 'react'
import "../../index.css"

export default function ClientCard ({ client, onExpandClick }) {
  return (
    <div className='client-card' onClick={() => onExpandClick(client.id)}>
        Client {client.id}) {client.name}
    </div>
  )
}
