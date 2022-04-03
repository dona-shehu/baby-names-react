import React from "react";



const DisplayBabyNames = (props) =>{

    const filtered =  props.babyNames.filter((baby)=>{
            if (props.typedValue === "") return baby;                   
            else return baby.name.toLowerCase().includes(props.typedValue);
        })
    
    return (
            <div className="babyName-container">
                {filtered.sort((a,b)=> a.name.localeCompare(b.name))
                .map((baby) => {
                    if(baby.sex === "m"){
                        return <button className="boy button" key={baby.id}>{baby.name}</button> 
                    }
                    else return <button className="girl button" key={baby.id}>{baby.name}</button>    
                })}
            </div>
    )
}
export default DisplayBabyNames;