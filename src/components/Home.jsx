import {useEffect, useState} from "react";


export function Home({setChangeColor}){
    const [time, setTime] = useState('')

    useEffect(()=>{
        var x = setInterval(()=>{
            var now = new Date().getTime();
            const offset = -(new Date().getTimezoneOffset() / 60)

            var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + offset;
            var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((now % (1000 * 60)) / 1000);

            setTime(hours + "h "+ minutes + "m " + seconds + "s ")

            if(a(seconds)){
                console.log('change')
                setChangeColor(true)
            }

        }, 1000)

        return ()=> clearInterval(x)
    }, [])

    const a = (sec)=>{
        return sec%4===0
    }


    return(
        <h1>{time}</h1>
    )
}