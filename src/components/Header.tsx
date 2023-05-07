import React from "react";


const Header:React.FC<{Title:string, Icon:React.ReactNode}> = (data) => {
    return (
        <div style={{display: "flex", flexDirection: "row", overflowY : "hidden"}}>
            <h1 style={{color : "var(--pcolor)", fontSize: "5vw", overflowY : "hidden"}}>{data.Title}</h1>
            <span style={{overflowY : "hidden"}}>
                {data.Icon}
            </span>
        </div>
    )
}

export default Header