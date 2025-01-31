import { Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    var [name,setname] = useState("")//subject selector
    var [tar,settar] = useState()//target
    const [cl,setcl] = useState(0)//total classes as per calender (constant)
    const [clatt,setclatt] = useState(0)//classes attended (input)
    const [cltak,setcltak] = useState(0)//classes taken in textfield (input)
    var flag1 = 0
    var flag2 = 0
    const [mes,setmes] = useState("")

//----------Display-Output----------
    const [need,setneed] = useState(0)

const maths = () => {
    setname("GT")
    console.log({name})
    setcl(60)
}

const dbms = () => {
    setname("DBMS")
    console.log({name})
    setcl(60)
}

const coa = () => {
    setname("COA")
    console.log({name})
    setcl(60)
}

const os = () => {
    setname("OS")
    console.log({name})
    setcl(60)
}

const tar75 = () => {
    settar("75")
    console.log({tar})
}

const tar90 = () => {
    settar("90")
    console.log({tar})
}

const tkclass = (e) => {//classes attended
    setclatt(parseInt(e.target.value))
}

const totclass = (e) => {//classes taken
    setcltak(parseInt(e.target.value))
}

const clr = () => {
    window.location.reload();
}

const calc = () => {
    let i;
    console.log("hi")
    if (clatt/cltak<tar/100){
        for (i=0;i<cl;i++){
            if ((clatt+i)/(cltak+i)>=tar/100){
                flag1=1;
                flag2=1;
                break;
            }
        }
        setneed(i);
        setmes(`You need to attend minimum ${i} classes to reach ${tar}%`);
    }
    else if (clatt/cltak>=tar/100){
        for (i=0;i<=cl;i++){
            if((clatt)/(cltak+i)<tar/100){
                flag2=1;
                flag1=1;
                break;
            }
        }
        setneed(i);
        setmes(`You can successfully bunk ${i+1} classes and still maintain ${tar}%`);
    }
    if (flag1==0){
        setmes("Sorry you cannot make up your attendance shortage :/")
    }
    if (flag2==0){
        setmes("Sorry you cannot make up your attendance shortage :/")
    }
    
}


  return (
    <div>
        
        <div className='papsec'>
            <Paper className='pap'>
                <br />
                <div>
                    <h1>Calculator</h1>
                </div>
                <div>
                    <TextField placeholder='Classes Attended' onChange={tkclass}></TextField>
                    <br /><br />
                    <TextField placeholder='Total Classes Taken' onChange={totclass}></TextField>
                    <br /><br />
                    <TextField placeholder='Subject' value={name}></TextField>
                    <br /><br />
                    <TextField placeholder='Target' value={tar}></TextField>
                </div>
            </Paper>
            <Paper className='but'>
                <h2>Select Subject</h2>
                <br /><br />
                <Button variant='contained' onClick={maths} sx={{width:'120px'}}>GT</Button><br /><br />
                <Button variant='contained' onClick={os} sx={{width:'120px'}}>Os</Button><br /><br />
                <Button variant='contained' onClick={dbms} sx={{width:'120px'}}>DBMS</Button><br /><br />
                <Button variant='contained' onClick={coa} sx={{width:'120px'}}>COA</Button><br /><br />
            </Paper>
            <Paper className='target'>
                <h2>Target %</h2>
                <br /><br />
                <Button variant='contained' onClick={tar75}>75</Button>
                <br /><br />
                <Button variant='contained' onClick={tar90}>90</Button>
            </Paper>
        </div>
        <div>
            <br />
            <Paper  className='bottom'>
                <br />
                <div className='botcalc'>
                    <Button variant='contained' onClick={calc}>Calculate</Button>&nbsp;
                    <Button variant='contained' onClick={clr}>Clear</Button>&nbsp;
                    <h3 className='botlabel'>{mes}</h3>
                </div>
            </Paper>
        </div>
    </div>
  )
}

export default Calculator