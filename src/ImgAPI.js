import React,{useState, useEffect} from "react";


export default function ImgAPI(){
    const [currentImg, setCurrentImg] = useState('');
    
    const FetchData = async () => {
        let randomno = Math.trunc((Math.random() * (99 - 50) + 50));
        console.log(randomno);
        const data = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${ randomno }&client_id=${'hIGfKbAajlOfd_7AzWrPkBKGzPR2lg9Yd_YvviFLMgs'}`
        );
        const josn = await data.json();
        const result = josn.results;
        console.log("results regular : "+ result[0].urls.regular);
        console.log("results small : "+ result[0].urls.small);
        console.log("results thumb : "+ result[0].urls.thumb);

        let w = window.innerWidth;
        console.log("width of screen : "+w);
        if(w >= 1300){
            setCurrentImg(result[0].urls.regular);
        }
        else if(w < 1300 && w >=550){
            setCurrentImg(result[0].urls.small);
        }
        else{
            setCurrentImg(result[0].urls.thumb);
        }
    };
    useEffect(() => { // this is a function which auto runs when page boots
        FetchData();
    }, []);
    
    const rerender=()=>{
        console.log("btn pressed");
        FetchData();
    }
    
    return(
        <div className="imgContainer">
            <img src={currentImg}
            />
            <button className="btn" onClick={rerender}>Change Image</button>
        </div>
    );
}
// console.log(Str.random(3))