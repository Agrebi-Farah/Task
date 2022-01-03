import React from 'react'
import UserCard from './UserCard'
function Profiles({user}) {
    return (
        <div className="Card" >
            {
                user.map ( (el) => <UserCard element ={el} key ={el.id}  /> )
            }
        </div>
    )
}

export default Profiles
