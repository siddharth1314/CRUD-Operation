import React from 'react'

const Dot = ({ trait }) => {
    return (
        <>
            {
                trait === "Group" ? (
                    <div className='groupDot'></div>
                ) :
                    (
                        <div className='userDot'></div>
                    )
            }
        </>
    )
}

export default Dot