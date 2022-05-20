import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


const PCCARD = () => {
  const [pcs, setPcs] = useState([]);
useEffect(() => {
  fetchPcs();
}, []);
const fetchPcs = () => {
  axios
    .get('http://localhost:3001/api/pcs')
    .then((res) => {
      console.log(res);
      setPcs(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};


return (
  <>
  {pcs.map((prop) => (
                      <div className='col-md-4 pc-info'>
                    <div  key={prop.pc_id}>
                        <Link to={`/GamingPCs/${prop.pc_id}`}>
                        <img src={prop.image} className="img-fluid" />
                        </Link>
                        <h5 className='pc-title'>{prop.title}</h5>
                        <ul className='pc-text'>{prop.description}</ul>
                        <p className='price-text'>${prop.price}</p>
                        </div>
                </div>
                    ))}
  </>
  );
};

export default PCCARD