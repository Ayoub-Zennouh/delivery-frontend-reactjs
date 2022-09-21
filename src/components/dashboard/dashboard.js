import React from 'react';
import './dashboard.css';
import { BsSearch } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi"
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

import JourneyCard from '../journey-card/JourneyCard'
import GoogleMapReact from 'google-map-react';
import Card from '../card/card';

const styles = {
  display: 'inline-table',
  paddingTop: 40,
};


const CustomSidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
  return (
    <div style={styles}>
      <Sidenav
        appearance={appearance}
        expanded={expanded}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <Sidenav.Body>
          <Nav {...navProps}>
            <Nav.Item eventKey="1"  icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              User Group
            </Nav.Item>

            <Nav.Item eventKey="3" icon={<MagicIcon />}>
              User Group
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<GearCircleIcon />}>
              Applications
            </Nav.Item>
            <Nav.Item eventKey="5"  icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="6" icon={<GroupIcon />}>
              User Group
            </Nav.Item>

            <Nav.Item eventKey="7" icon={<MagicIcon />}>
              User Group
            </Nav.Item>
            <Nav.Item eventKey="8" icon={<GearCircleIcon />}>
              Applications
            </Nav.Item>


          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default function Dashboard() {

  const [activeKey, setActiveKey] = React.useState('1');
  const [openKeys, setOpenKeys] = React.useState(['3', '4']);
  const [expanded, setExpand] = React.useState(false);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 16
  };

  return (
    <div  className='d-flex flex-row vh-100 vw-100 main backgroundBlue'>

      <CustomSidenav
        activeKey={activeKey}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        onSelect={setActiveKey}
        expanded={expanded}
        onExpand={setExpand}
        appearance="inverse"
      />

      <div className='justify-content-center right-grid'>
        <div className='center-left'>

          {/* search field */}
          <div className='w-100 p-2 search-area'>
            <div className='search-bar mt-sm-5 mx-auto d-flex flex-row'>
              <div className='btn btn-white search-btn my-auto mx-1'><BsSearch className='small-icon my-auto mt-1' /></div>
              <input type="search" className="search-input w-100" placeholder="Search now"></input>
              <div className='btn btn-white search-btn my-auto mx-1'><GiSettingsKnobs className='small-icon my-auto mt-2' /></div>
            </div>
          </div>
          <p className='px-3 mt-sm-0 mt-3 mb-0 text-start fs-5'>Active Orders</p>
          <div className='orders-list d-flex flex-column p-1 p-sm-3'>

           <Card data={{orderID: '#2342', product: 'Construction Materials', status: 'In Transit', dept_time: '06.05.2022 10:00 AM', arri_time: '06.06.2022 09:00 AM', departure: 'Khouribga, Morocco', arrival:'Casablanca, Morocco', driver: 'Abdelhakim Rasfi'}} />
           <Card data={{orderID: '#2342', product: 'Construction Materials', status: 'In Transit', dept_time: '06.05.2022 10:00 AM', arri_time: '06.06.2022 09:00 AM', departure: 'Khouribga, Morocco', arrival:'Casablanca, Morocco', driver: 'Abdelhakim Rasfi'}} />
           <Card data={{orderID: '#2342', product: 'Construction Materials', status: 'In Transit', dept_time: '06.05.2022 10:00 AM', arri_time: '06.06.2022 09:00 AM', departure: 'Khouribga, Morocco', arrival:'Casablanca, Morocco', driver: 'Abdelhakim Rasfi'}} />

          </div>
        </div>
        <div style={{ position: 'relative'}} className='center-right h-100 w-100 bg-danger'>
          <div style={{ position: 'absolute', top: '0', left: '0', height: '100%', width: '100%' }}>
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

