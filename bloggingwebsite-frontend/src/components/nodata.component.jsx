import React from 'react'

export const NoDataMessage = ({message}) => {
  return (
    <div className='text-center w-full p-4 rounded-full bg-grey/50 mt-3'>
        <p>{ message } </p>
    </div>
  )
}
