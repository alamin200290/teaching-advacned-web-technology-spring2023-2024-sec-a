import Web3Image from '../../../../public/image/web3.jpg';

import Image from "next/image";

export default function Apwt(){
    return (
        <>
            <h1>Welcome to Advanced Web Technology Course</h1>
            <Image src={Web3Image} alt="web3 image" width={500} height={300} />
        </>
    );
}