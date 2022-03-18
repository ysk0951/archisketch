import React from 'react';
import * as Data from '../../asset/test.json'

export interface imgData {
  _id : string
}
export function Gallery(props : any){
  const rendering : Array<imgData> = Data.renderings;
  const dataDiv :  Array<JSX.Element> = [];
  rendering.map(  
    (data) => {
      dataDiv.push(
        <div className='test' key={data["_id"]}>
          <img src={data["_id"]} />
        </div>
      )
  })
  return(
    <div>
      {dataDiv}
    </div>
  )
};


