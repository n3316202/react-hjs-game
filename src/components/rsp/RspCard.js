  import React from 'react';

function RspCard(props) {
  return (
    <div className="col-md-4 d-flex justify-content-center">
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">당신</h5>
          {
            props.player.arrRsp.map(rsp => (
            <button className="btn btn-primary m-2" key="{rsp}">{rsp}</button>
            ))
          }
        </div>
      </div>
    </div>  
   );
}

export default RspCard;
