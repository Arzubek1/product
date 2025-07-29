import React from "react";
import "./Home.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Home = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const { product } = useSelector((s) => s);
  const dispatch = useDispatch();

  console.log(product);

  function createProduct() {
    if (!productName.trim() || !productUrl.trim() || !productPrice.trim()) {
      alert(404);
    } else {
      let newProduct = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        name: productName,
        img: productUrl,
        price: productPrice,
      };
      dispatch({ type: "CREATE_PRODUCT", payload: newProduct });
    }
  }

  function delProduct(itemid) {
    dispatch({ type: "DELETE_PRODUCT", payload: itemid });
  }

  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home--create">
            <h2>CREATE</h2>
            <input
              type="text"
              placeholder="Product Url"
              onChange={(e) => setProductUrl(e.target.value)}
              value={productUrl}
            />
            <input
              type="text"
              placeholder="Product Name"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
            <input
              type="text"
              placeholder="Product Price"
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
            />
            <button onClick={createProduct}>Create</button>
          </div>
          <div className="home--list">
            {!product.length ? (
              <center>
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/empty-box-illustration-download-in-svg-png-gif-file-formats--cart-is-explore-state-error-pack-design-development-illustrations-3613888.png"
                  alt="img"
                />
              </center>
            ) : (
              <>
                {product.map((el) => (
                  <div className="home--list__card" key={el.id}>
                    <img src={el.img} alt="" />
                    <h2>{el.name}</h2>
                    <h2>{el.price}</h2>
                    <button onClick={() => delProduct(el.id)}>
                      <IoIosCloseCircleOutline />
                    </button>
                  </div>
                ))}{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
