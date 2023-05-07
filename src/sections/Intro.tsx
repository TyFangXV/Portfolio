"use client"
import React, { useEffect, useState } from "react";
import style from '../styles/sections/intro.module.css'
import { Dude, Intro, Planet, Rocket, Vector } from "../utils/image";
import { motion } from "framer-motion";


const IntroSection:React.FC = () => {
    const [windowHeight, setWindowHeight] = useState(100);
    const [windowWidth, setWindowWidth] = useState(100);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <Planet width={100} height={100} className={style.planet}/>
            <main className={style.section}>
                <div className={style.name}>
                    <h1 className={style.salutation}>hey, I'm<br/>Drex</h1>
                    <hr className={style.divider}/>
                    <span style={{width: "30vw"}}>
                        <p className={style.desci}>Passionate full-stack developer with a focus on delivering high-quality solutions and promoting programming through hackathons and events.</p>
                    </span>
                </div>
                <div className={style.pics}>
                    <Intro width={100} height={100} className={style.vector}/>
                </div>
            </main>
            <Rocket width={100} height={100} className={style.rocket}/>
        </div>

    )
}

export default IntroSection