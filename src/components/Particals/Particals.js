import React from 'react'
import Particles from 'react-particles-js';
import '../Particals/Particals.css'

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
