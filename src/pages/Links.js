import React, {useContext} from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {DataContext} from "../providers/DataProvider";
// import {IconLabelButtons} from './Buttons.js'


const Links = ()=>{
const {links, getLinks, createLink, updateLink, deleteLink, loading, error} = useContext(DataContext)
   const renderLinks = () => {
        return links.map((link) => {
          return (
            <div
              key={link.id}
              style={{ margin: "30px", padding: "20px", backgroundColor: '#bc986a',border: "4px solid black" , textAlign: 'center'}}
            >
                
              <h1>{link.title}</h1>
              <a href={link.url} target="_blank">
                {link.title}
              </a>
              <h3>{link.description}</h3>
              <h3>{link.username}</h3>
              {/* Not here that this will disable all  buttons, even when just one is clicked */}
              <button disabled={loading} onClick={() => deleteLink(link.id)}>Delete</button>
              <br/>
              <br/>
              <button><ReactRouterLink  to={`links/${link.id}`}>Show</ReactRouterLink></button>
              <br/>
              <br/>
              <button><ReactRouterLink to={`links/${link.id}/edit`}>Edit</ReactRouterLink></button>
            </div>
          );
        });
    };
   
   return  (
    <div >
        
    <h1> Links Page </h1>
    {/* <h3>{getLinks}</h3> */}
    {/* {getLinks} */}
    {/* {JSON.stringify(links)} */}
    <br/>
    <button disabled={loading} onClick={getLinks}>{loading ? 'Loading...': ' Show Links' }</button>
    <br/>
    <br/>

    {/* <button onClick={()=>createLink({ title:'New Title', username:'joej'})}>Create Link</button>

    <button onClick={()=>updateLink({...links, title:'Updated'})}>Update Link</button> */}

    {/* <button onClick={()=>deleteLink(links[0]? links[0].id:1)}>Delete Link</button> */}
    <button><ReactRouterLink to = 'links/new_form' > New Link </ReactRouterLink></button>
    {/* <p>Loading State: {loading ? 'true' : 'false'} </p> */}
    {/* <p>Error State: {error ? 'true' : 'false' } </p> */}
    {renderLinks()}

    </div>

    );
    
};
export default Links