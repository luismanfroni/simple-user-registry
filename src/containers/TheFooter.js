import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://github.com/luismanfroni" target="_blank" rel="noopener noreferrer">Luis Felipe Manfroni</a>
        <span className="ml-1">2021</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
