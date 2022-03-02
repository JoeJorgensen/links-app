import axios from "axios";
import React, { useState } from "react";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [links, setLinks] = useState([]);

  const baseUrl = 'https://link-app-sp22.herokuapp.com'

  const getLinks = async()=>{
try{
  let res = await axios.get(`${baseUrl}/api/links`)
  console.log(res)
  setLinks(res.data)
}catch(err){
  alert('error occurred')
}
  }

  const createLink = async(linkObj)=>{
    try{
      let res = await axios.post(`${baseUrl}/api/links/${linkObj.id}`, linkObj)

      setLinks([res.data,...links])
    }catch(err){
      alert('error occurred')
    }
  }

  const updateLink = async(linkObj)=>{
    if(!linkObj.id) {
    alert('No ID given')
    return
    }
    try{
      let res = await axios.put(`${baseUrl}/api/links`, linkObj)

      let updateLinks = links.map(l=> l.id === res.data.id ? res.data : l )
      setLinks(updateLinks)
    }catch(err){
      alert('error occurred')
    }
  }

  const deleteLink = async (id)=>{
    
    try{
      let res = await axios.delete(`${baseUrl}/api/links/${id}`)
      setLinks(links.filter(l=> l.id !== id))
    }catch{
      alert('error occurred')
    }
  }
  // create an object that will be 'global state'
  const dataProviderThing = {
  createLink,
  updateLink,
  deleteLink,
   getLinks,
   links, 
    
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
