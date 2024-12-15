import React from 'react';
import { useState } from 'react';


export const QrCode = () => {
  const [qrData,setqrData]=useState("joes");
  const[img,setImg]=useState("");
  const[loading,setloading]=useState(false);
  const[qrSize,setqrSize]=useState("150");

  
   async function generatteQR(){
     setloading(true);
     try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}`;
      setImg(url);
     }catch(error){
      console.error("Erroe generatind QR code ",error);


     }finally{
      setloading(false);
     }
  }
 function downloadQR(){
  fetch(img).then((response)=>response.blob())
  .then((blob)=>{
    const link=document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  })
 }

  
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {img && <img src={img}className='qr-code-images' />}
      {loading && <p>Please wait...</p>}
      <div>
        <label htmlFor='dataInput' className='input-label'  >
          Data for QR code:
        </label>
        <input type='text'value={qrData} id='dataInput' placeholder='Enter data for QR code' onChange={(e)=>setqrData(e.target.value)}/>
        <label htmlFor='sizeInput' className='input-label'  >
          Iage size(e.g.,150):
        </label>
        <input type='text'value={qrSize} id='dataInput' placeholder='enter image size'onChange={(e)=>setqrData(e.target.value)}/>
        <button className='generate-button'disabled={loading} onClick={generatteQR}>Generate QR code </button>
        <button className='download-button' onClick={downloadQR}>Download QR code</button>
      </div>
      <p>Designed By Kenuja</p>
      
        </div>
  )
}
