import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {ChromePicker} from 'react-color';



import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { fontFamily } from '@mui/system';




    




const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));


  






export default function Main(props)
    {
       const [text,setText] = useState('');
       const [strike,setStrike] = useState();
       const [bold,setBold] = useState();
       const [italic,setItalic] = useState();
       const [color,setColor] =useState();
       const [underline,setUnderline]=useState();
       const [showColorPicker, setShowColorPicker]=useState(false);

       const [alignment, setAlignment] = useState('left');
       const [formats, setFormats] = useState(false);
       const [formatsOne, setFormatsOne] = useState(false);
       const [formatsTwo, setFormatsTwo] = useState(false);
     
       const [fontsizeOne,setFontsize] = useState();
       const [age, setAge] = useState();
              

       let BackGround={backgroundColor:props.mode ==='dark' ? 'antiquewhite':'#20232a',color:props.mode ==='dark' ? 'black':'#ddd'}

       const handleFormat = (event, newFormats) => {

        if(newFormats.includes('bold'))
        {
          boldFunction();
          setFormats(newFormats);
        }
        else{
          setBold();
          setFormats(false)
        }
         
        console.log(newFormats);
       
       
        };
     
        const handleFormatItalic = (event, newFormats) => {

          if(newFormats.includes('italic'))
          {
            italicFunction();
            setFormatsOne(newFormats);
          }
          else{
            setItalic();
            setFormatsOne(false)
          }
           
          console.log(newFormats);
         
         
          };



            
        const handleFormatUnderline = (event, newFormats) => {

          if(newFormats.includes('underlined'))
          {
            underlineFunction();
            setFormatsTwo(newFormats);
          }
          else{
            setUnderline();
            setFormatsTwo(false)
          }
           
          console.log(newFormats);
         
         
          };

       const handleAlignment = (event, newAlignment) => {
         setAlignment(newAlignment);

         
       };
     
     
  const handleChange = (event) => {
   
    setAge(event.target.value);
    let num = event.target.value;
    if(text!=='')
    {
    if(num===1)
    {
      setFontsize({fontSize:"32px"});
    }
    else if(num===2)
    {
      setFontsize({fontSize:"24px"});
    }
    else if(num===3)
    {
      setFontsize({fontSize:"18.72px"});
    }
    else if(num===4)
    {
      setFontsize({fontSize:"16px"});
    }
    else if(num===5)
    {
      setFontsize({fontSize:"13.28px"});
    }
    else if(num===6)
    {
      setFontsize({fontSize:"12px"});
    }
    else{
      setFontsize('')
    }
  }    
  };


    
        
       let align={
        textAlign:alignment
       }
       let colorOne = {
         color:color
       }
       
       /**************************************(Function Starts)**********************************************************/
       function change(event)
       {
      
           setText(event.target.value);
  
       }
      
      /* 1.) Upper Case Function */

      function upperCase()
      {
        let Capital = text.toUpperCase();
          setText(Capital);
  
      }
      
        /* 2.) Lower Case Function */

      function lowerCase()
      {
        let Lower = text.toLowerCase();
          setText(Lower);
  
      }
   
       /* 3.) Sentence Case  Function */
      
     function sentenceCase () {
     
    
     if ((text===null) || (text===''))
      {
       console.log(false);
      }
     else{
       
      let small = text.replace(/\w\S*/g,
      function(txt){return txt.charAt(0).toUpperCase() +
      txt.substr(1).toLowerCase();});

     setText(small)
         }
                                }



      /* 4.) Token Function */

      function token()
      {
        if(text!=='' && !text.includes('{{'))
          {
            let tokenValue ="{{" + text.trim().split(" ").join("_").concat("}}");
              setText(tokenValue);
          }
      
    }
      
      /* 5.) Strikethrough Function */

      function Strikethrough()
      {
          if(text!=='')
            {
              setStrike({textDecoration: "line-through"});
            }  
       }

        /* 6.) Reverse Function */
    
        function reverse()
        {
     

    // Step 1. Use the split() method to return a new array
    var splitString = text.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    setText( joinArray); // "olleh"
     }
      
     /* 7.) Clear Function */

     function clear()
     {
       setStrike("");
       setText("");
       setBold("");
       setItalic(""); 
     }

     /* 8.) Download Function */
      function download(file, text) {
              
        //creating an invisible element
        var element = document.createElement('a');
        element.setAttribute('href', 
        'data:text/plain;charset=utf-8, '
        + encodeURIComponent(text));
        element.setAttribute('download', file);
      
        // Above code is equivalent to
        // <a href="path of file" download="file name">
      
        document.body.appendChild(element);
      
        //onClick property
        element.click();
      
        document.body.removeChild(element);
        }
    
        let checkDropwdown = (e) => {
            let DropdownValue = e.target.value;
          
            var filename = "File."+DropdownValue;
            
      
            download(filename, text);         
    
      }

    /* 9.) Bold Function*/
    function boldFunction()  {
        if(text!=='')
        {
          setBold({fontWeight:"Bold"});
        
        }

  }

  function italicFunction()
  {
    if(text!=='')
    {
      setItalic({fontStyle:"italic"}); 
    }
  }

  function underlineFunction()
  {
    if(text!=='')
    {
      setUnderline({textDecoration: "underline"});
    }
  }

/* 10.) Special Character Function*/
    let specialCharacter = (e) => {

      let specialChar = e.target.value;
      let result=text.replaceAll(specialChar,'');
      setText(result);
                       }

/* 11. Copy Function !! */

 const handleCopy = ()=>{

  var text=document.getElementById("textArea");
  text.select();
 
  navigator.clipboard.writeText(text.value);
  
  }

  /* 12. remove Extra Spaces Function !! */

  const handleExtraSpaces =()=>{

    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    }



      return(

          <>
          
          <div className="container" style={{color:props.mode ==='dark' ? 'antiquewhite':'#20232a'}}>
          <h1 className="text-center mt-2">Content</h1>
      
          <div>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          </StyledToggleButtonGroup>

          <StyledToggleButtonGroup
          size="small"
          value={formatsOne}
          onChange={handleFormatItalic}
          aria-label="text formatting"
        >
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>

          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formatsTwo}
          onChange={handleFormatUnderline}
          aria-label="text formatting"
        >
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formatsTwo}
          onChange={handleFormatUnderline}
          aria-label="text formatting"
        >
          <ToggleButton value="color" aria-label="color" onClick={()=>setShowColorPicker(showColorPicker=>!showColorPicker)}>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
          </StyledToggleButtonGroup>
              
        <Box sx={{minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={0}>Default</MenuItem>
          <MenuItem value={1}>h1</MenuItem>
          <MenuItem value={2}>h2</MenuItem>
          <MenuItem value={3}>h3</MenuItem>
          <MenuItem value={4}>h4</MenuItem>
          <MenuItem value={5}>h5</MenuItem>
          <MenuItem value={6}>h6</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </Paper>
      {showColorPicker && (

<ChromePicker 
color={color}
onChangeComplete={(updatedColor)=>setColor(updatedColor.hex)
}


/>
)} 

    </div>
         <form>
           
          <div className="form-group">
          <textarea  className="form-control" id="textArea" rows="5" value={text} onChange={change} style={Object.assign({}, strike, bold,italic,underline,align,colorOne,fontsizeOne)} placeholder="Enter your Content!!"></textarea>
          </div>
          <div className="flex-container" >
        
          <button type="button" className="btn"  onClick={upperCase} style={BackGround}>Upper Case</button>
          <button type="button" className="btn"  onClick={lowerCase} style={BackGround}>Lower Case</button>
          <button type="button" className="btn"  onClick={sentenceCase} style={BackGround}>Capitalized</button>
          <button type="button" className="btn"  onClick={token} style={BackGround}>Token Case</button>
          <button type="button" className="btn"  onClick={Strikethrough} style={BackGround}>Strikethrough</button>
          <button type="button" className="btn"  onClick={reverse} style={BackGround}>Reverse</button>
          <button type="button" className="btn"  onClick={clear} style={BackGround}>Clear</button>
          <button type="button" className="btn"  onClick={boldFunction} style={BackGround}>Bold</button>
          <button type="button" className="btn"  onClick={handleCopy} style={BackGround}>Copy</button>
          <button type="button" className="btn"  onClick={handleExtraSpaces} style={BackGround}>Remove Space</button>
         
          <select onChange = {specialCharacter} className="form-select btn" aria-label="Default select example" id="specialCharacter" style={BackGround}>
          <option>Characters </option>
          <option value="/">/</option>
          <option value="?">?</option>
          <option value="_">_</option>
          <option value="\">\</option>
          </select>
       
        
  
  
          </div>
    
          </form>


     <div className="bottomSection">
       <div style={{color:props.mode ==='dark' ? 'antiquewhite':'#20232a'}}>
          <p>Total Characters - {text.length}</p>
          <p>Total Words - {text.split(' ').length}</p>
          <p>Minutes Read Time - {0.008 * text.split(' ').length}</p>
       </div>
       <div>
       <select onChange = {checkDropwdown} className="form-select downloadbtn" aria-label="Default select example" id="dropdown__option" style={BackGround}>
      <option>Download</option>
      <option value="txt">Text</option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="js">JS</option>
      </select>
       </div>


              </div>          
           </div>
         
          </>
      );

    }