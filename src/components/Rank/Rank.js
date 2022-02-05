import React from 'react';

const Rank = ({username,entries}) => {
    return (
        <div className="center"n style={{display:'flex'}}>
            <div className="white f3">
                  {`${username},Your entries are...`}
            </div>           
            <div className="white f1">
                  {entries}
            </div>
        </div>
    )
}

export default Rank;
