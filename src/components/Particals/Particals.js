import React from 'react'
import Particles from 'react-particles-js';

const Particals = () => {
    return (
        <Particles className='particals'
        params={{
            particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 900
                  }
                }
               
              }
          }
        }

      />
        
    )
}

export default Particals
