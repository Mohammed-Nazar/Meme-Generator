import "./meme.css";
import memesData from "../../assets/memesData";
import { useState } from "react";

export default function Meme() {
  const [urlimg, urlfun] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, allMemeImagesFun] = useState(memesData);

  function MemeGen() {
    let url =
      allMemeImages.data.memes[
        Math.floor(Math.random() * allMemeImages.data.memes.length)
      ].url;
    urlfun((prev) => {
      return {
        ...prev,
        randomImage: url,
      };
    });
  }

  function handleChnage(event) {
    const { name, value } = event.target;
    urlfun((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="meme">
        <div className="meme--input">
          <input
            onChange={handleChnage}
            value={urlimg.topText}
            name="topText"
            type="text"
            placeholder="Top Text"
          />
          <input
            onChange={handleChnage}
            value={urlimg.bottomText}
            name="bottomText"
            type="text"
            placeholder="Bottom Text"
          />
        </div>
        <button onClick={MemeGen}>Get a new meme image 🖼</button>
        <div className="meme-con">
          <img className="meme--img" src={urlimg.randomImage} alt="" />
          <h2 className="meme--text top">{urlimg.topText}</h2>
          <h2 className="meme--text bottom">{urlimg.bottomText}</h2>
        </div>
      </div>
    </>
  );
}
