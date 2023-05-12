"use client"
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Basketball, Bubble, Checklist, Gunshoot, Vector } from "../utils/image";
import style from '../styles/sections/about.module.css'

const AboutMeSection:React.FC = () => {
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
        <div style={{height: windowHeight, width: windowWidth, display: "flex", flexDirection : "column"}}>
            <span className={style.header}>
                <Header Title="About me" Icon={<Checklist width={100} height={100}/>}/>
            </span>
            <br/>
            <span className={style.aboutmediv}>
                <div className={style.gallery}>
                    <Basketball width={350} height={350} className={style.stock}/>
                    <Gunshoot  width={350} height={350} className={style.stock}/>
                </div>
                <div className={style.bubbleDiv}>
                    <div className={style.bubbleBackground} />
                    <p className={style.aboutmeText}>Heya! 👋 I'm a young and passionate full-stack dev with a fresh perspective on the tech industry. 🌟 I honed my teamwork, dedication, and strong work ethic through my love of basketball 🏀, and I bring those winning skills to my work. I've got a focus on backend development and experience with various tech, but I'm always itching to learn about new and emerging tech. As a team player, I thrive on collaborating with others to deliver solutions that blow clients away. 👥 I'm all about sharing knowledge and mentoring others, and I'm always organizing hackathons and events to spread the programming gospel. 🧑‍💻 Besides my tech chops, I'm also keenly interested in the business side of the industry and am always broadening my horizons. 📈 Overall, I'm a driven and enthusiastic full-stack dev dedicated to delivering top-notch solutions and making a positive impact in the tech world. 🚀</p>
                </div>
            </span>
        </div>
    )
}

export default AboutMeSection

