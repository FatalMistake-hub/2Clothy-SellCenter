import React from 'react'

function Main({ children }) {
  return (
    <main className="h-full w-full overflow-y-auto">
      <div className=" w-full  px-24 ">{children}</div>
    </main>
  )
}

export default Main
