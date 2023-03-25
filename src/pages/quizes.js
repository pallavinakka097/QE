import './quize.css'
import {list} from './quizedata.js'
const Quizes=()=>
{
    const lis=list.map((items)=>
    {
        return (
        <>
        <div className='box1'>
        <img src={items.image} className='img1'/> 
        <h2>{items.name}</h2>
        <button>{items.btn}</button></div>
        </>        
        )
    })
    return <div className='flex1'>{lis}</div>
}


export default Quizes;