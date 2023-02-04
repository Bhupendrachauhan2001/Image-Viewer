// import React from 'react';
import './style.css'

import React, {useState} from "react"
function Imageviewer(){


    const [imgPath, setImgpath] = useState("https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg")
    let smallImages = document.querySelectorAll('.smallImagContainer img');  
    smallImages.forEach((smallImg) => {
        smallImg.addEventListener('click', ()=>{
            setImgpath(smallImg.src);
            // console.log("CLICKED")
        })
    //    setImgpath(smallImg.src)
    });



    return(
        <div className="container">
            <div className="mainImg">
                <img src={imgPath} />
            </div>
            <div className="smallImagContainer">
                <div className="smallImg">
                    <img id='smlImg' src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg" />
                </div>
                <div className="smallImg">
                    <img  src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg" />
                </div>
                <div className="smallImg">
                    <img   src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
                </div>
                <div className="smallImg">
                    <img  src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg" />
                </div>
                <div className="smallImg">
                    <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" />
                </div>
            </div>
        </div>
    )
}
export default Imageviewer;