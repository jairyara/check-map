import React from "react";
import Image from "next/image";
import LogoImg from '@brand/logo.svg';

const Logo = () => {
    const altText = 'CheckMap Logotipo';
    return (
        <figure>
            <Image
                src={LogoImg}
                alt={altText}
                title={altText}
            />
        </figure>
    );
}

export default Logo;