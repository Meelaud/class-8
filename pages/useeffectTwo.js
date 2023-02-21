import Link from "next/link"
import { useEffect, useState } from "react";

export default function UseeffectTwo() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50)

    }, [])


    return (
        <>
            <div className="layout">
                <Link href="/" className='links'>Home</Link>

                <div className="title">
                    useEffectTwo
                </div>

                <div className="title">
                    {number}
                </div>
            </div>
        </>
    )
}