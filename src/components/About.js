import React, {useState} from "react";

export default function About(props) {
  // let myStyle = {
  //   color: props.mode === "dark" ? "white" : "#454545",
  //   backgroundColor: props.mode === "dark" ? "#454545" : "white",
  // }
    const [styles , setMyStyles] = useState ({
        color : "black",
        backgroundColor : "white"
    });
    const [btnText , setbtnText] = useState ("Enable Dark mode");
    const toggleMode = ()=> {
        if(styles.color === "white"){
            setMyStyles({
                color : "black",
                backgroundColor : "white"
            });
            setbtnText("Enable Dark Mode");
        }
        else{
            setMyStyles({
                color : "white",
                backgroundColor : "black"
            });
            setbtnText("Enable Light Mode");
        }
    }
  return (
    <div className="my-3 p-2" >
        <h1 className="my-3 mx-2 ">Light/Dark Mode</h1>
      <div className="accordion" id="accordionExample" style={styles}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne" >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={styles}
            >
              Analyze your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne" 
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={styles}>
              Text utils give you a way to analyze your text quality and efficiently . Be it word count, character count.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={styles}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={styles}>
              Textutli is free character counter tool that provides instant character count and word statitistic for a given text.Textutils reports the number of words and character.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={styles}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={styles}>
              This can work on any browser such as chrome, firefox, opera, etc. 
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={toggleMode} >{btnText}</button>
      </div>
    </div>
  );
}
