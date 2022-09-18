import React from 'react';
import './dashboard.css';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const Dashboard = () => (
  <div className='d-flex flex-row vh-100 vw-100 main'>
    <div className='bg-primary left-grid'>
      <div class="accordion list" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Overview
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Vehicles
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              History
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='d-flex flex-row justify-content-center right-grid'>
      <div className='center-left bg-transparent'>
        <h3>Tracks</h3>
        <input className='search-field mt-5' placeholder='Search'></input>
        <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
        </ListItemButton>

      </div>
      <div className='col-8 h-100 bg-danger'>

      </div>
    </div>
  </div>
);

export default Dashboard;
