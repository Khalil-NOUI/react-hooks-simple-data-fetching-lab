import { useEffect, useState } from "react";

export default function App() {
    const [image, setImage] = useState(null)

    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => setImage((image) => image = data.message))
    }, [])

    if (image === null) {return (
        <p> Yaw Dawg, just wait a lil bit it's Loading ...! </p>
    )}
    else {return(
        <img src={image} alt="A Random Dog"/>  
    )}
}