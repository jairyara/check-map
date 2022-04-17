import React from "react";

const Profile = ({data, title}) => {
    return(
        <>
            <p>{title === 'Home' ? `Welcome back, ${data}` : data}</p>
        </>
    )
}

export default Profile;