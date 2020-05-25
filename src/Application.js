import React, { Component } from 'react';

class Application extends Component {
    state = { 
        info: [

            {
                Name: 'Kevin Ochieng',
                Country: 'Kenya',
                Language: 'English',
                Gender: 'Male'
            },

            {
                Name: 'Javan Omondi',
                Country: 'Kenya',
                Language: 'English',
                Gender: 'Male'
            },

            {
                Name: 'Clive Omondi',
                Country: 'Kenya',
                Language: 'English',
                Gender: 'Male'
            },

            {
                Name: 'Alice Atieno',
                Country: 'Kenya',
                Language: 'English',
                Gender: 'Male'
            }
        ]
     }
    render() { 
     return (
         <div>
            {this.state.info.map(items => {
                return (  
                    <article key={`id-${items.Name}`}>
                        <h1>{items.Name}</h1>
                        <h1>{items.Country}</h1>
                        <h1>{items.Language}</h1>
                        <h1>{items.Gender}</h1>
                    </article>
                );
            })}
        </div>
        );
        
       
    }
}
 
export default Application;





