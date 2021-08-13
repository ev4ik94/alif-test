import {useEffect} from "react";

const colors = ['red', 'yellow', 'green', 'blue', 'purple']


export function Hall({changeColor, setChangeColor, setBGColorState, bgColor}){


    useEffect(()=>{
        if(changeColor){
            setBGColorState(colors[randomNum()])
            setChangeColor(false)
        }
    }, [changeColor])

    const randomNum = ()=>Math.floor(Math.random() * 5)

    return(<div style={{background: bgColor, height: '500px'}}>
        <h1>Hall</h1>
    </div>)
}