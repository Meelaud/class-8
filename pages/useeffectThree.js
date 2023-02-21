import Link from "next/link"
import { useEffect, useState } from "react";

export default function UseeffectThree() {

    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)

    }, [number])


    return (
        <>

            <div className="layout">
                <Link href="/" className='links'>Home</Link>

                <div>
                    <button onClick={() => setNumber(number + 1)}>Click Me</button>
                </div>

                <div className="title">
                    useeffectThree
                </div>

                <div className="title">
                    {value}
                </div>
            </div>
        </>
    )
}