import React from "react"
import SpinningImage from "./SpinningImage"
//passes simple gallery data in as props
function Loading(props) {
    //creates the display data
    const display = createDisplay(() => {
        <SpinningImage src={"https://images.ctfassets.net/m8onsx4mm13s/61BlFYO4vvWokgP3SM5g8U/a3a676c7c4e8380557aa7e1a9361239a/KH79FVEBCH1_front.png?w=1200&h=1200"} alt={"🤘"}></SpinningImage>
    })
    //renders gallery display data
    return (
        <div>
            {display}
        </div>
    )
}

export default Loading