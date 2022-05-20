import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const SinglePC = () => {
  const [pcs, setPcs] = useState([]);
  const id = useParams().id
useEffect(() => {
  fetchPcs();
}, []);
const fetchPcs = () => {
  axios
    .get(`http://localhost:3001/api/pcs/${id}`)
    .then((res) => {
      setPcs(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};


return (      
                        <main className='single-main'>
                      <div className='col-md-4 single-card'>
                    <div  key={pcs.pc_id}>
                        <img src={pcs.image} className="img-fluid colin-img" />
                        <h5 className='pc-title'>{pcs.title}</h5>
                        <ul className='pc-text'>{pcs.description}</ul>
                        <p className='price-text'>${pcs.price}</p>
                        </div>
                </div>
                </main>
  
  );
};

export default SinglePC