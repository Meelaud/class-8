import Link from "next/link"
import Carousel from "@/Components/carousel";
import { useEffect, useState } from "react";

export default function CarouselPage() {




    return (
        <>
            <div className="layout">
                <Link href="/" className='links'>Home</Link>

                <Carousel></Carousel>
            </div>
        </>
    )
}