import React from 'react'
import SearchField from './SearchField'
import "./style.css"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { MenuTwoTone, } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


  


const Navbar = () => {
   {/* const numberOfPicture = [{
        "id":1,
        "name":"trending"
    }
    ,
    
    {
        "id":2,
        "name":"music"
    }
    ,
    
    
    
    
    ];*/}
   
  return (
    <>
    <div className='navcont'>
      <div>
           <img src='https://tse2.mm.bing.net/th?id=OIP.vv1jdF_XBvzcFsvtc7ENIQAAAA&pid=Api&P=0' />
      </div>
      <div className='searchf'><SearchField /></div>
      <a className='navlinks' href="">Advertise</a><a className='navlinks' href="">Blog</a><a className='uns' href="" style={{color:"royalblue"}}>Unsplash+</a>
      <div className='sap'>Submit a photo</div>
      <div className='noti'><NotificationsActiveIcon style={{color:"gray"}} /></div>
      <div><AccountCircleIcon style={{color:"gray"}} /></div>
      <div><MenuTwoTone /></div>

    </div>
   { /*<ScrollMenu
      arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
      arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
      data={numberOfPicture.map((picture, index) => (
        <p>{picture.name}</p>
      ))}
      />*/}
    </>
  )
}

export default Navbar
