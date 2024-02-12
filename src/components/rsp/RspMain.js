import React from 'react';
import RspCard from './RspCard';

function RspMain(props) {
    const players = [
        {
            id: 1,
            username: '참가자',
            arrRsp :['가위','바위','보']
        }    
    ]

    return (
        <main>
            <div class="container mt-5">
                <div class="row">
                    <RspCard player={players[0]}></RspCard>
                </div>
            </div>
        </main>
    );
}

export default RspMain;