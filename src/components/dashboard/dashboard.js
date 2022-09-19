import React from 'react';
import './dashboard.css';

import Divider from '@mui/material/Divider';



export default function Dashboard() {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className='d-flex flex-row vh-100 vw-100 main'>
      <div className='bg-primary left-grid'>

      </div>
      <div className='d-flex flex-row justify-content-center right-grid'>
        <div className='center-left bg-transparent'>
          <input className='search-field mt-4 mb-2' placeholder='Search'></input>
          <h3>Active orders</h3>
          <div className='w-100 d-flex flex-column p-3'>
            <div className='card'>
              <div className='d-flex flex-row justify-content-between p-2'>
                <div className='col-3'>
                  <label>Order ID</label>
                  <label>#1394</label>
                </div>
                <div className='col-3'>
                  <label>Name of product</label>
                  <label>Comstruction</label>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary'>in transit</button>
                </div>
              </div>
              <Divider />

              <div className='d-flex flex-row justify-content-between p-2'>
                <div class="rightbox">
                  <div class="rb-container">
                    <ul class="rb">
                      <li class="rb-item" ng-repeat="itembx">
                        <div class="timestamp">
                          3rd May 2020 7:00 PM
                        </div>
                        <div class="item-title">Depart.</div>

                      </li>

                      <li class="rb-item" ng-repeat="itembx">
                        <div class="timestamp">
                          17st June 2020 7:00 PM
                        </div>
                        <div class="item-title">Arrivee</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Divider />

              <div className='d-flex flex-row justify-content-between p-2'>
                
              </div>
            </div>
          </div>

        </div>
        <div className='center-right h-100 bg-danger'>

        </div>
      </div>
    </div>
  );
}

