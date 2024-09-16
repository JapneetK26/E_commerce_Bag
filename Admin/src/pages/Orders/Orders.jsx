import React from 'react'
import './Orders.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import { assets } from '../../assets/assets';
const Orders = ({url}) => {
  const [orders, setOrders] = useState([]);
  const fetchAllorders = async()=>{
    const response = await axios.get(`${url}/api/order/list`);
    console.log(response);
    
    if(response.data.success){
      setOrders(response.data.data)
      console.log(response);
    }
    else{
      toast.error("Error")
    }
  }
  const statusHandler = async(event,orderId)=>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllorders();
    }
  }
  useEffect(()=>{
    fetchAllorders()
  },[])
  return (
      <div className="order name">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-bag-item">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity + ", ";
                  } else {
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstname + " " + order.address.lastname}
              </p>
              <p>
                {order.address.street +
                  "," +
                  order.address.state +
                  "," +
                  order.address.country +
                  "," +
                  order.address.zipcode +
                  ","}
              </p>
            </div>
            <div className="order-item-phone">{order.address.phone}</div>
            <p>Items:{order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="order processing">Order processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
