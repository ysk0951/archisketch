import * as React from 'react';
import * as Data from '../../asset/test.json'

export function Gallery(){
  let rendering : Array<Object> = Data.renderings;
  // console.log(rendering)


  return(
    <div>
        { rendering.map( 
            (data, index) => {
              console.log(data,index)
        } )}
        123
    </div>
  )
};


