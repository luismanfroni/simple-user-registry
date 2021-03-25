import React, { useState } from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {
  const [sidebarShow, setSidebar] = useState('responsive');
  return (
    <div className="c-app c-default-layout">
      <TheSidebar sidebarShow={sidebarShow} setSidebar={setSidebar} />
      <div className="c-wrapper">
        <TheHeader sidebarShow={sidebarShow} setSidebar={setSidebar} />
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
