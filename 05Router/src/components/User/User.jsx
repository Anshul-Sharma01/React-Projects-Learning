import React from "react";
import { useParams } from 'react-router-dom'



function User(){

    const { userid } = useParams();

    return(
        <>
            <div className="bg-slate-700 text-white text-2xl text-center p-5">
                User : {userid}
            </div>
        </>
    )
}

export default User;