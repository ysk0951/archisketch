import * as React from 'react';
import * as Data from '../../asset/test.json'

export function Gallery(){
  type Data = {
    _id : string
  }
  const rendering : Array<Data> = Data.renderings;
  const dataDiv :  Array<JSX.Element> = [];
  rendering.map(  
    (data) => {
      dataDiv.push(
        <div className='test'>
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


