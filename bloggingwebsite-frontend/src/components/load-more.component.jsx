import React from 'react'

export const LoadMoreDataBtn = ({ state, fetchDataFunc ,additionalParam}) => {

    if(state != null && state.totalDocs > state.results.length )
  return (
     <button
     onClick={() => fetchDataFunc({ ...additionalParam, page: state.page + 1 })}
     className='text-white bg-black p-2 px-3 hover:bg-grey/90 hover:text-black rounded-md flex items-center gap-2 tag '
     >Load More....
     </button>
  )
}
