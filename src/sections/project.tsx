"use client"
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Basketball, Bubble, Checklist, Gunshoot, Projects, Vector } from "../utils/image";
import style from '../styles/sections/project.module.css'

const ProjectSection:React.FC = () => {
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
            <span className={style.header}>
                <Header Title="Project" Icon={<Projects width={100} height={100}/>}/>
            </span>
        </div>
    )
}

export default ProjectSection

