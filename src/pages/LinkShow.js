
import axios from "axios";
import {Link as ReactRouterLink, useParams} from  'react-router-dom'
import { useEffect, useState } from "react";
import LinkForm from './LinkForm'


const LinkShow = ()=>{
    const [link, setLink] = useState({})
    const [loading, setLoading] = useState(true)
    const [editing, setEditing] = useState(false)

    const {id} = useParams()
    useEffect(()=>{
        getLink()
    },[])

    const getLink = async ()=>{
        let res = await axios.get (`https://link-app-sp22.herokuapp.com/api/links/${id}`)
        setLink(res.data)
        setLoading(false)
    }
    if(loading) return <p>Loading</p>
    if(editing) return <LinkForm setEditing={setEditing} {...link}/>
   
    return  (
<div>
    <h1> Link Show Page </h1>
    {JSON.stringify(link)}
    <br/>
    <br/>
    <button onClick={()=>setEditing(true)}>Edit</button>
    <br/>
    <br/>
    <button> <ReactRouterLink to='/'>Back</ReactRouterLink></button>
</div>

    )
}
export default LinkShow