import React from 'react'

const catNames = ['Mia', 'Snowy', 'Felix']

const Cats = () => {
    return (
        <div>
            <ul>
                {
                    catNames.map((cat, i) => {
                        return <li key={cat + i}>{cat}</li>
                    })
                }
            </ul>

        </div>
    )
}


export default Cats
