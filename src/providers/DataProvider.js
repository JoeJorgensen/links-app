import axios from "axios";
import React, { useState } from "react";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const beforeApiCallSetup = ()=>{
    setLoading(true);
    setError(false);
  };

  const baseUrl = 'https://link-app-sp22.herokuapp.com'

  const getLinks = async()=>{
    beforeApiCallSetup();
try{
  let res = await axios.get(`${baseUrl}/api/links`)
  console.log(res)
  setLinks(res.data)
  
}catch(err){
  alert('error occurred retrieving links')
  setError(true);
}finally{
  setLoading(false)
    }
 }

  const createLink = async(linkObj)=>{
    beforeApiCallSetup()
    try{
      let res = await axios.post(`${baseUrl}/api/links`, linkObj)

      setLinks([res.data,...links])
    }catch(err){
      debugger
      alert('error occurred creating link');
      setError(true);
    }finally {
      setLoading(false)
    }
  }

  const updateLink = async (linkObj)=>{
    beforeApiCallSetup();
    
    try{
      let res = await axios.put(`${baseUrl}/api/links`, linkObj)

      let updateLinks = links.map((l)=> (l.id === res.data.id ? res.data : l) )
      setLinks(updateLinks)
    }catch(err){
      alert('error occurred updating links')
      setError(true)
    }finally{
      setLoading(false)
    }
  }
  

  const deleteLink = async (id)=>{
    beforeApiCallSetup();
    try{
      let res = await axios.delete(`${baseUrl}/api/links/${id}`)
      setLinks(links.filter((l)=> l.id !== id))
    }catch (err){
      alert('error occurred deleting link')
    }finally{
      setLoading(false)
    }
  }
  // create an object that will be 'global state'
  const dataProviderThing = {
  createLink,
  updateLink,
  deleteLink,
   getLinks,
   links, 
   loading,
   error,
    
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
