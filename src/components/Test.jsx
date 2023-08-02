import React from 'react'

export default function Test() {
    const sum=(a,b)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(a+b)  
            }, 1000);
        })
    }
    sum(100,200).then(r=>r+100).then(r=>r+100).then(r=>{
        console.log(r);
    })
  return (
    <div>

    </div>
  )
}
