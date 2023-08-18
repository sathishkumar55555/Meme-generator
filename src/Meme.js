import React from "react";
import memesData from "./memesData";
function Meme(){
//Meme-Api : https://api.imgflip.com/get_memes
   

    //const [memeImage,setMemeImage]=React.useState("");
 const [meme,setMeme]=React.useState({
    
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/22bdq6.jpg"
    
 })

const [allMemeImages,setAllMemeImages]=React.useState([]);

React.useEffect(()=>{
 fetch("https://api.imgflip.com/get_memes")
 .then(res=>res.json())
 .then(data=>setAllMemeImages(data.data.memes))
},[])

    function getMemeImage(){
     
     const randomNumber = Math.floor(Math.random()*allMemeImages.length);
     const url = allMemeImages[randomNumber].url;
        
     setMeme(prevState=>({
        ...prevState,
        randomImage:url
     }))
    }
    
    function handleChange(event){
        setMeme(prevMeme=>{
            const {name,value}=event.target;
            return{
                ...prevMeme,
                [name]:value
            }
        })
    }







    return(
        <main>
           <div className="form">
           <input type="text" placeholder="Top text" name="topText" className="form--input" value={meme.topText} onChange={handleChange}>
            </input>
            <input type="text" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}className="form--input">
         </input>
         <button className="form--button" onClick={getMemeImage}>Get a new image</button>
           </div>
           
         <div className="meme">
         <img src={meme.randomImage}  className="meme--image" alt="meme"/>  
         <h2 className="meme--text top">{meme.topText}</h2>
         <h2 className="meme--text bottom">{meme.bottomText}</h2>
       
         </div>
        </main>
    )
}
export default Meme;