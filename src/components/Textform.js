import React, {useState} from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");
    // text = "New Text"; //Wrong way to change the state.
    //setText("New Text"); //Correct way to change the state.
    const handleOnChange = (event)=> {
        // console.log("The on change event");
        setText(event.target.value);
    }
    const handleUpClick = ()=> {
        // console.log("The button has clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleLoClick = ()=> {
        // console.log("The button has clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");
    }
    const handleCpClick = ()=> {
        let arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let newText = arr.join(" ");
        setText(newText);
        props.showAlert("Converted to Capitialize Case!", "success");
    }
    const handleRwClick = ()=> {
        let find = prompt("Enter the value you want to replace: ");
        let global = new RegExp(find,"g");
        let rep = prompt("Enter the value you want to replace with: ");
        let newText = text.replace(global,rep);
        setText(newText);
        props.showAlert("The word Has Been Replaced!", "success");
    }
    const handleCopy = ()=> {  
        let all = document.getElementById("myBox");
        all.select();   
        navigator.clipboard.writeText(all.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
    }
    const handleClearClick = ()=> {        
        let newText = "";
        setText(newText);
        props.showAlert("Cleared!", "success");
    }
  return (
    <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange} placeholder="Enter your Text Here....." style={{
                    backgroundColor: props.mode==="dark" ? "#454545" : "white",
                    color: props.mode==="dark" ? "white" : "black",
                    fontSize: "25px"
                }}></textarea>
                <button className="btn btn-primary my-3 mx-1 my-1" disabled={text.length === 0} onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary my-3 mx-1 my-1" disabled={text.length === 0} onClick={handleLoClick}>Convert to Lower Case</button>
                <button className="btn btn-primary my-3 mx-1 my-1" disabled={text.length === 0} onClick={handleCpClick}>Convert to Capitalize Case</button>
                <button className="btn btn-primary my-3 mx-1 my-1" disabled={text.length === 0} onClick={handleRwClick}>Replace word</button>
                <button className="btn btn-primary my-3 mx-1 my-1" disabled={text.length === 0} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-1 my-1" disabled={text.length === 0} onClick={handleClearClick}>Clear</button>
            </div>
        </div>  
        {/* text.split(" ").length */}
        <div className="container my-4">
            <h2>Text Summary</h2>
            <p>Total Words: { text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length } and Total Character: {text.length}</p>
            <p>Time to read Words: { 0.08 * text.split(" ").filter((element)=>{ return element.length !== 0}).length} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter in Textarea to Preview it here...."}</p>
        </div>
    </>
    )
}
