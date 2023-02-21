import Link from "next/link"
import { useEffect, useState } from "react";



export default function UseeffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)

    })


    return (
        <>

            <div className="layout">

                <Link href="/" className='links' >Home</Link>

                <div className="title">
                    useEffectOne
                </div>

                <div className="title">
                    {number}
                </div>
            </div>
        </>
    )
}