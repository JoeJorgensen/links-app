import React from "react";
import { useParams } from "react-router-dom";

const LinkForm = ()=>{
const params = useParams()
    return  (
<div>
    <h1> Link Form  </h1>
    <p>{params.id ? 'Update' : 'New Form'}</p>
    <p>{params.id ?  params.id: 'No ID'}</p>

</div>

    )
}
export default LinkForm