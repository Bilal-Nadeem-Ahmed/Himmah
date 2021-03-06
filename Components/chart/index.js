import React from 'react';
import {Pie} from 'react-chartjs-2';

export default function Chart () {
    const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["Food Parcels", "Adults", "Children", "Hot Meals"],
        datasets: [
          {
            data: [889, 691, 252, 1120],
            backgroundColor: ['purple','green','orange','red'],
         
          }
        ]
    };

    return ( 
    <div className='white-bg'>
          <div className='half'>
          <Pie data={data}/> 
          </div>
          <div className='half '>
            <div>
            <h2>February Figures</h2>
            <br></br>
              <p>Over the month of February we provided (thanks to our volunteers and donors): </p>
              <p>889 food parcels, for 691 Adults and 252 children.</p>
              <p>We also provided 1120 hot meals with two of our partners</p>
              <p>560 with <a href='www.chayahgroup.co.uk'>Chayah Project</a> </p>
              <p>560 with <a href='www.salaamshalomkitchen.co.uk'>Salaam Shalom Kitchen</a> </p>
            </div>
            
          </div>
     </div>
   
   )
}
 
