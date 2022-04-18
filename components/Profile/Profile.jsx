import React from "react";
import Image from "next/image";
import ProfilePic from "@img/profile-pic.jpg";
import styles from './profile.module.css'

const Profile = ({data, title}) => {
    return (
        <div className={styles.profile}>
            <Image src={ProfilePic}
                   alt={data}
                   title={data}
            />
            <p>{title === 'Home' ? `Welcome back, ${data}` : data}</p>
        </div>
    )
}

export default Profile;