import React from 'react'

const Citater = ({ citater, deleteCitat }) => {

    const citatList = citater.length ? (
        citater.map(citat => {
            return (
                <div className="cellection-item ard blue-grey darken-1 col s4" key={citat.id}>
                    <div className="valign-wrapper">
                        <span onClick={() => { deleteCitat(citat.id) }} >{citat.content} </span>
                    </div>
                    <span className="citatNavn " onClick={() => { deleteCitat(citat.id) }} >{citat.navn} {citat.alder} </span>
                </div>
            )
        })
    ) : (
            <p className="center">ingen citater endnu</p>
        )
    return (
        <div className="citater collection row">
            {citatList}
        </div>
    )
}

export default Citater