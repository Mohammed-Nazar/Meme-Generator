import "./meme.css";
import memesData from "../../assets/memesData";
import { useState } from "react";



export default function Meme() {
    const [urlimg, urlfun] = useState();
  function MemeGen() {
     urlfun(memesData.data.memes[
        Math.floor(Math.random() * memesData.data.memes.length)
      ].url)
  }
  return (
    <>
      <div className="meme">
        <div className="meme--input">
          <input type="text" placeholder="Top Text" />
          <input type="text" placeholder="Bottom Text" />
        </div>
        <button onClick={MemeGen}>Get a new meme image 🖼</button>
        <img className="meme--img" src={urlimg} alt="" />
      </div>
    </>
  );
}
