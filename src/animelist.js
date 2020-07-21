import React from 'react'

export default function animelist({ anime }) {
    return (
        <div>
            {anime.map(a => (
                <div key={a}>{a}</div>
            ))}
        </div>
    )
}
