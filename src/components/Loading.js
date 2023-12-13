import React from "react"
import SpinningImage from "./SpinningImage"
import guitar from "../Guitar.png"
console.log("loading")
function Loading() {
    //create a simple spinning image
    return (
        <div>
            <h1>Loading...</h1>
            <SpinningImage src={guitar} alt={"🤘"}></SpinningImage>
        </div>
    )
}

export default Loading