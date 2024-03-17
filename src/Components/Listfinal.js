import React, { useState } from 'react'
import './listfinal.css'
function Listfinal() {
    const [listfinal , setListfinal] = useState(null);
    const handleChange = (e)=>{
        if(isNaN(e.target.value)){
            return "";
        }else{
            if(e.target.value === "" || isNaN(listfinal)){
                setListfinal("");
            }else{
                let final = ((parseFloat(e.target.value) * 0.1) + parseFloat(e.target.value))
                final = final.toFixed(3);
                setListfinal(final)
            }
            
        }
    }
    return (
        <div className='listfinal-container'>
        <h1>Calc listFinal</h1>
        <div>
        <label>Please Enter Our Cost</label>
        <input onChange={handleChange} type='name'/>
        <h2><span className='result'>listFinal :</span><span className='listfinal'>{listfinal}</span></h2>
        </div>
        </div>
    )
    }
export default Listfinal