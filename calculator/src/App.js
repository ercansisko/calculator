import React, {useState} from 'react';
import './App.css';
import Key from './Key';
const keys=['AC','DEL','+','1','2','3','*','4','5','6','/','7','8','9','-','.','0','='];

function App() {
const [screenNumber, setScreenNumber]=useState('');
const [screenTop, setScreenTop]=useState([]);
const operator=(a,b,k)=>{
  if(k=='+')
  return (parseFloat(a)+parseFloat(b)).toString();
  if(k=='-')
  return (parseFloat(a)-parseFloat(b)).toString();
  if(k=='/')
  return (parseFloat(a)/parseFloat(b)).toString();
  if(k=='*')
  return (parseFloat(a)*parseFloat(b)).toString();
}
const handleSetScreen=(k)=>{
//   setScreenNumber(prev=>{
//   if(prev.includes('.')&&k=='.')
//   return prev;
//   if(k=='+'||k=='*'||k=='/'||k=='-')
//     return '';
//   if(k=='=')
//   return operator(screenTop[0],parseFloat(prev),screenTop[1]);
//     let str=prev;
//   str=str+k;
//   return str;
// });
// if((k=='+'||k=='*'||k=='/'||k=='-')&&screenTop=='')
//   setScreenTop(prev=>[...prev,parseFloat(screenNumber),k]);
// else if((k=='+'||k=='*'||k=='/'||k=='-')&&screenTop!='')
//   {
//     setScreenTop(prev=>[operator(prev[0],parseFloat(screenNumber),prev[1]),k]);

//   }
// else if(k=='=')
//   {
//   setScreenTop('');
//   }
if(k=='+'||k=='-'||k=='*'||k=='/')
{
  if(screenTop=='')
 { setScreenTop((prev)=>[...prev,screenNumber,k]);
  setScreenNumber('');}
  else if(screenTop!='')
  {
    setScreenTop((prev)=>[operator(prev[0],screenNumber,prev[1]),k]);
    setScreenNumber('');
  }
}
else if(k=='=')
{ if(screenTop!='')
  
  {setScreenNumber((prev)=>operator(screenTop[0],prev,screenTop[1]));
  setScreenTop('');}
}
else if(k=='AC')
{
  setScreenNumber('');
  setScreenTop('');
}
else if(k=='DEL')
{
  setScreenNumber((prev)=>prev.slice(0,prev.length-1));
}
else
{
setScreenNumber((prev)=>k=='.'&&prev.includes('.')?prev:prev+k);
}
}

  return (
    <div className="App">
      <div className="grid-container">
        
        <div className='screen'>
          <p className='numbers'>{screenTop}</p>
          <p className='number'>{screenNumber}</p>
        </div>
        {
          keys.map(item=>(<Key item={item} handleSetScreen={handleSetScreen}/>))
        }
      </div>
    </div>
  );
}

export default App;
