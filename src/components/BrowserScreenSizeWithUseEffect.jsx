import React, {useState, useEffect} from 'react';

const BrowserScreenSizeWithUseEffect = () => {

    const [data, setData] = useState(window.screen.width);

    useEffect(() => {
        console.log("add event");
        window.addEventListener("resize", widthChange)

        return () => {
            console.log("remove event");
            window.removeEventListener("resize", widthChange)
        }
        
    })

    const widthChange = () => {
        console.log(window.innerWidth);
        setData(window.innerWidth);
    }
    

  return (
    <div>
        <h1>The actual size of screen is:</h1>
        <p>{data}</p>
    </div>
  )
}

export default BrowserScreenSizeWithUseEffect