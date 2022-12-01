import React from 'react'
import ReviewChart from '../Review Chart/ReviewChart'
import Updates from '../Updates/Updates'
import './RightSide.css'

const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <h3>Updates</h3>
            <Updates/>
            <h3>Opportunities</h3>
            <ReviewChart/>
        </div>
    </div>
  )
}

export default RightSide