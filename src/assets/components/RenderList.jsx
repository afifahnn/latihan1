import React, { useState } from "react";

export const RenderList = (props) => {
  // const [Nama, setNama] = useState(props.data.nama)
  const [Check, setCheck] = useState(props.data.check);
  //  const [OnEdit, setOnEdit] = useState(false)

  return (
    <div className={`space-x-2 flex gap-4 ${Check ? "line-through" : ""}`}>
      <div className="px-5 w-50 flex gap-8 items-center border-solid border-2 rounded-lg">
        <div>{props.data.nama}</div>
        <div>{props.data.umur}</div>
        {/* { OnEdit ? <input value={Nama} onChange={(e)=>{setNama(e.target.value)}} className='border'/> :  <span>{Nama}</span> } */}
      </div>
      <div className="p-3 flex items-center">
        <input checked={Check} type="checkbox" onChange={() => { setCheck(!Check) }}/>
        {/* <button onClick={()=>{setOnEdit(!OnEdit)}}> {OnEdit ? "Save": "Edit" }</button> */}
      </div>
    </div>
  );
};
