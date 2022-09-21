import React from 'react';
import './card.css'
import { BsFillChatSquareDotsFill, BsFillTelephoneFill } from "react-icons/bs";


import user from '../../assets/user.png'


import Divider from '@mui/material/Divider';


export default function Card({ data }) {

  return (
    <div className='card'>
      <div className='first-row d-flex flex-row justify-content-between p-2'>
        <div className='col-3'>
          <label className="fw-light">Order ID</label><br></br>
          <label className="fst-normal">{data.orderID}</label>
        </div>
        <div className='col-3 d-lex flex-column justify-content-center align-items-center'>
          <label className="fw-light nowrap">Name of product</label>
          <label className="fst-normal w-100">{data.product}</label>
        </div>
        <div className='col-3 d-flex flex-column'>
          <p class="ms-2 badge rounded-pill text-bg-info w-75 my-auto">{data.status}</p>
        </div>
      </div>
      <Divider />

      <div style={{ position: 'relative' }} className='second-row d-sm-flex flex-row justify-content-between p-2 mx-auto'>

        <div className="container text-center">
          <div className="row row-cols-2">
            <label className="col-4 p-sm-3 fw-light">{data.dept_time}</label>
            <div className="col-8 p-sm-2 mt-sm-2 d-flex flex-column align-items-start">
              <label className="fw-light ms-5">Departure</label>
              <label className="timestamp ms-5 nowrap">{data.departure}</label>
            </div>
            <label className="col-4 p-sm-3 fw-light">{data.arri_time}</label>
            <div className="col-8 p-sm-2 mt-sm-2 d-flex flex-column align-items-start">
              <label className="fw-light ms-5">Arrival</label>
              <label className="timestamp ms-5 nowrap">{data.arrival}</label>
            </div>
          </div>
        </div>
      </div>
      <Divider />

      <div className='third-row d-flex flex-row justify-content-start align-items-start p-2'>
        <img src={user} className="img-thumbnail img" alt="..."></img>
        <div className='d-flex flex-column align-content-between mt-2'>
          <label className='ms-2 fw-bold fs-6'>{data.driver}</label>
          <label className='d-flex flex-row ms-2'><div class="status-badge me-2 my-auto"></div><p className='mb-0'>{data.status}</p></label>
        </div>
        <div>
          <div className='btn btn-outline-info chat-btn'><BsFillChatSquareDotsFill className='small-icon' /></div>
          <div className='btn btn-outline-info phone-btn'><BsFillTelephoneFill className='small-icon' /></div>
        </div>
      </div>
    </div>
  );
}