import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>

        <div 
            className='journal__entry-picture'
            style={{
                backgroundSize:'cover',
                backgroundImage:'url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg)',
            }}
            > </div>

        <div className="journal__entry-body">
            <h4 className="journal__entry-title">A new day</h4>
            <p className="journal__entry-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dignissimos officia. Fuga commodi mollitia fugiat eaque labore cum a veniam!
            </p>

        </div>    
        <div className="journal__entry-date-box">
            <span>Friday</span>
            <h5>28</h5>
        </div>

    </div>
  )
}
