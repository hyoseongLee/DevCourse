import React, {useState} from 'react'

// const Timer :React.FC = () => {
// const [seconds,setSeconds] = useState<number>(0);

// return (
//     <div>
//         <h1>Timer : {seconds}초 </h1>
//         <button onClick={
//             function()
//             {
//                 setInterval(()=>{
// setSeconds((prev)=>prev + 1);
//                 },1000)
//             }
//         }>start</button>
//     </div>
// )
// }


// 시간 만들기
const Clock :React.FC = () => {
    const [time,setTime] = useState(new Date());

    setInterval(()=> {
        setTime(new Date());
    },1000)

    return (
      <div>
        현재 시간 : {time.toLocaleTimeString()}
      </div>
    )
    }

export default Clock;