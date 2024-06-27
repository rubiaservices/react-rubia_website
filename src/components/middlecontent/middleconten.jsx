import React from 'react'
import Services from '../../pages/Services/Services'
import DriverServices from '../../pages/DriverServices/DriverServices'

const middleconten = () => {
  return (
    <>
    <div className="main-text h-auto">
        <div className="middle1 h-auto">
             {/* <Services/> */}
             <DriverServices/>
        </div>
        <div className="middle2">
              <h1>App links</h1>
        </div>
      </div>
    </>
  )
}

export default middleconten