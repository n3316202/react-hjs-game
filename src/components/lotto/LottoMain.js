import React, { useState } from 'react';

function LottoMain(props) {
  const [nums,setNums] = useState(new Set())

  return (
  <div className="container">
    <div className="row mt-sm-5">
      {
        nums && nums.map( num => (
          <LottoBall num = {num} ></LottoBall> 
        ))
      }
    </div>
  </div>
  );
}

export default LottoMain;