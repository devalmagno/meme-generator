import { useEffect, useState } from "react";

export default function Form() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        async function getMemes() {
            const res =
                await fetch('https://api.imgflip.com/get_memes');
            const { data } = await res.json();
            setAllMemes(data.memes);
        }
   
        getMemes();
   }, []);

    function getMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        const { url: randomImage } = allMemes[randomIndex];

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage
        }));
    }

    function handleChange() {
        const { name, value } = event.target;

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <section className="meme--container">
            <div className="meme--form">
                <div className="form--input-box">
                    <input
                        type="text"
                        placeholder="Top Text"
                        value={meme.topText}
                        onChange={handleChange}
                        name="topText"
                    />
                    <input
                        type="text"
                        placeholder="Bottom Text"
                        value={meme.bottomText}
                        onChange={handleChange}
                        name="bottomText"
                    />
                </div>
                <button
                    className="form--submit"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>

            <div className="meme--image">
                <img src={meme.randomImage} alt="" />
                <h2 className="image--toptext">{meme.topText}</h2>
                <h2 className="image--bottomtext">{meme.bottomText}</h2>
            </div>
        </section>
    );
}