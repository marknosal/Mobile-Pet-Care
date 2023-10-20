import React, { useEffect, useState } from "react"
import Error from "../Error"
import ClientCard from "./ClientCard"
import ExpandedClient from "./ExpandedClient"
import NewClientForm from "./NewClientForm"

export default function Clients({ clients, onSetClients, onAddClient }) {

    const [expandedClientId, setExpandedClientId] = useState(null)
    const [error, setError] = useState(null)
    const [newClient, setNewClient] = useState(null)

    const expandedClient = clients.find(c => c.id === expandedClientId)

    useEffect(() => {
        fetch('/clients',)
            .then(response => response.json())
            .then(data => onSetClients(data))
    }, [])

    function expandedClientContainer() {
        return (
            <ExpandedClient expandedClient={expandedClient} onExpandClick={handleExpandClick} />
        )
    }

    function clientCardContainer() {
        return (
            <div className="client-card-container">
                {clients.map(client => (
                    <ClientCard key={client.id} client={client} onExpandClick={handleExpandClick} />
                ))}
            </div>
        )
    }
    function handleExpandClick(id) {
        expandedClientId ? setExpandedClientId(null) : setExpandedClientId(id)
    }
    function handleShowNewClientForm() {
        setNewClient(!newClient)
    }
    return (
        <div className="clients-main">
            <Error error={error} />
            <div className="client-container">
                <h2>{expandedClientId ? null : "Clients"}</h2>
                <button
                    onClick={() => setNewClient(!newClient)}
                    style={{ margin: 10, display: newClient ? 'none' : 'block' }}
                >
                    Add New Client
                </button>
                {newClient ? (
                    <NewClientForm
                        onShowNewClientForm={handleShowNewClientForm}
                        setError={setError}
                        onAddClient={onAddClient}
                    />
                ) : (
                    expandedClientId ? expandedClientContainer() : clientCardContainer()
                )}
            </div>
        </div>
    )
}