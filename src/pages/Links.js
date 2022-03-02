import React, {useContext} from "react";
import {DataContext} from "../providers/DataProvider";
const Links = ()=>{
const {links, getLinks, createLink, updateLink, deleteLink} = useContext(DataContext)
    return  (
<div>

    <h1> Links Page </h1>
    {JSON.stringify(links)}
    <button onClick={getLinks}>Get Links</button>
    <button onClick={()=>createLink({ title:'New Title', username:'joej'})}>Create Link</button>
    <button onClick={()=>updateLink({id:200, title:'Update', username:'joej'})}>Update Link</button>
    <button onClick={()=>deleteLink(200)}>Delete Link</button>



</div>

    )
}
export default Links