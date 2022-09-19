import React from 'react';
import './dashboard.css';
import { BsSearch } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi"


import JourneyCard from '../journey-card/JourneyCard'
import GoogleMapReact from 'google-map-react';
import Card from '../card/card';


export default function Dashboard() {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 16
  };

  return (
    <div className='d-flex flex-row vh-100 vw-100 main'>
      <div className='bg-primary left-grid'>

      </div>
      <div className='d-flex flex-row justify-content-center right-grid'>
        <div className='center-left bg-transparent'>

          {/* search field */}
          <div className='w-100 p-2'>
            <div className='search-bar mt-5 mx-auto d-flex flex-row'>
              <div className='btn btn-white search-btn my-auto mx-1'><BsSearch className='small-icon my-auto mt-2' /></div>
              <input type="search" className="search-input w-100" placeholder="Search now"></input>
              <div className='btn btn-white search-btn my-auto mx-1'><GiSettingsKnobs className='small-icon my-auto mt-2' /></div>
            </div>
          </div>
          <p className='p-3 py-0 mb-0 text-start fs-5'>Active Orders</p>
          <div className='orders-list d-flex flex-column p-3'>
            
           <Card data={{orderID: '#2342', product: 'Construction Materials', status: 'In Transit', dept_time: '06.05.2022 10:00 AM', arri_time: '06.06.2022 09:00 AM', departure: 'Khouribga, Morocco', arrival:'Casablanca, Morocco', driver: 'Abdelhakim Rasfi'}} />
           <Card data={{orderID: '#2342', product: 'Construction Materials', status: 'In Transit', dept_time: '06.05.2022 10:00 AM', arri_time: '06.06.2022 09:00 AM', departure: 'Khouribga, Morocco', arrival:'Casablanca, Morocco', driver: 'Abdelhakim Rasfi'}} />
           <Card data={{orderID: '#2342', product: 'Construction Materials', status: 'In Transit', dept_time: '06.05.2022 10:00 AM', arri_time: '06.06.2022 09:00 AM', departure: 'Khouribga, Morocco', arrival:'Casablanca, Morocco', driver: 'Abdelhakim Rasfi'}} />

          </div>
        </div>
        <div style={{ position: 'relative' }} className='center-right h-100 w-100 bg-danger'>
          <div style={{ position: 'absolute', top: '0', left: '0', height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
          </div>
          <div className="w-100" style={{ position: 'absolute', bottom: '0', left: '0' }}>
            <JourneyCard />
          </div>
        </div>
      </div>
    </div>
  );
}

