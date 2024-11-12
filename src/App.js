import React, { useEffect, useState } from 'react';
import Crouser from './Components/Crouser';


function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {


    const fetchApi = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProductData(data);
    };
    fetchApi();
  }, []);

  return (
    <>

      <Crouser product={productData} />

    </>
  )
}

export default App