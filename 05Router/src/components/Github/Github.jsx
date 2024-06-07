import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const  {githubInfo, githubRepos}  = useLoaderData();
    return(
        <>
            <div className="text-center m-4 bg-slate-600 text-white p-4 text-3xl">
                Github Repositories : {githubInfo.public_repos}
            </div>
            <div className="text-center m-5 bg-slate-500 text-white p-5 text-2xl">
                <h1 className="text-4xl text-orange-600 bg-slate-700 p-5 my-4">All Repositories</h1> 
                <ul >
                    {githubRepos.map((ele, ind) => {
                        return <li key={ele} >  {ele.name} ({ele.private?'Private' : "Public"})  </li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Github;

const githubInfoLoader = async() => { 
    const response = await fetch('https://api.github.com/users/Anshul-Sharma01')
    return response.json();
}
const githubreposLoader = async() => {
    const res = await fetch("https://api.github.com/users/Anshul-Sharma01/repos")
    return res.json();
}

export const githubLoader = async() => {
    const [ githubInfo, githubRepos ] = await Promise.all([
        githubInfoLoader(),
        githubreposLoader()
    ])
    return { githubInfo, githubRepos }
}