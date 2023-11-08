import React, { useEffect, useState } from 'react'
import Products from './Products'
import axios from 'axios'
export const host = 'http://localhost:5000'

function Type({ orderType }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    loadItems(orderType)
  }, [orderType])


  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`${host}/${orderType}`)
      setItems(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const ItemComponents = orderType === "products" ?
    Products : null;


  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <div>
      {optionItems}
    </div>
  )
}

export default Type