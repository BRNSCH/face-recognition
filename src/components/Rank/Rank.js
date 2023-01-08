import React from 'react';
import './Rank.css'


const Rank = ({name,entries}) => {

    return (

        <div className='rank '>
            
                <div className=' f3'>
                {`${name}, Your current rank is... `}
            </div>
            <div className=' f1'>
                {entries}
            </div>
           

        </div>
    )
}
export default Rank;