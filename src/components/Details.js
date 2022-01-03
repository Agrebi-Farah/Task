import React from 'react'
import {Button} from 'react-bootstrap'

function Details(props) {
    console.log(props)
    const Found = props.user.find (el => el.id == props.match.params.id)
    return (
        <div>
            <h1>{Found.name}</h1>
            <h1>{Found.Age}</h1>
            <h1>{Found.Profession}</h1>
            <Button onClick={() => props.history.goBack() }>Go back</Button>
            <Button  onClick={() => props.history.push('/') }>Go Home </Button>
        </div>
    )
}

export default Details
