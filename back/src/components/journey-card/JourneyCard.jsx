import React from 'react';
import './JourneyCard.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const JourneyCard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='d-flex flex-row vh-100 ' style={{ flexWrap: 'wrap-reverse', justifyContent: 'center' }}>
      <div className='d-flex flex-column componentChild w-100'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs variant="scrollable" value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab wrapped label="Order Details" {...a11yProps(0)} />
            <Tab wrapped label="Driver Information" {...a11yProps(1)} />
            <Tab wrapped label="Vehicle" {...a11yProps(2)} />
            <Tab wrapped label="Customer Information" {...a11yProps(3)} />
            <Tab wrapped label="Documents" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

          <div className="firstBox">
            <div className="firstNode">
              <img className="image" src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=2000" alt="Frank Roberts" />
              <div className="p-2 secondNode">
                <div className="username" >Frank Roberts</div>
                <div className="userRole">Customer</div>
              </div>
            </div>
            <button className='btn btn-primary btn-custom'>in transit</button>
          </div>
          <div className="mt-4 secondBox">
            <div className="thirdNode">
              <div className="title">Order ID</div>
              <div>#9809</div>
            </div>

            <div className="thirdNode">
              <div className="title">Weight</div>
              <div>0.67kg</div>
            </div>

            <div className="thirdNode">
              <div className="title">Price</div>
              <div>$68</div>
            </div>

            <div className="thirdNode">
              <div className="title">Name of product</div>
              <div>Construction Materials</div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Three
        </TabPanel>
      </div>
    </div>
  );
}

export default JourneyCard;