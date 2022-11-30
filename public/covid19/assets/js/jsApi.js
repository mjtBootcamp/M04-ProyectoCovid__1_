
let infoData = (async() => {
  try{
    const res = await fetch('http://localhost:3000/api/total');
    const data = await res.json();
    //console.log('archivo de consulta api', data)
    return data 
  }catch (error){
    console.log(error);
  }

  
})
export default infoData;

      
 
