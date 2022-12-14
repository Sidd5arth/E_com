import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Elixir" />
          <div clasName="frontCover">

          <div className="banner">
            <div className="banner1">
            <div className="blackrec"></div>
            <div className="frontImage"></div>
            </div>
            {/* <div className="ha"> */}
               <h1 className="ha1">ELIXIR</h1>
               <h1 className="ha2">WINARY</h1>
               <h1 className="ha3">ESTD,1988</h1>
               <div className = "p1">
               <p>The art of winemaking has existed
                  for millennia. Throughout the ages, 
                  it’s been and will always be, the
                   humble grape that is the star of the 
                   apes are one of the only fruits that 
                   contain the correct amount of sugar to 
                   create the right amount of alcohol to 
                   preserve the wine.</p>
                   </div>
               
   
               <a href="#container">
                 <button>
                   Scroll <CgMouse />
                 </button>
               </a>  
               {/* </div>  */}
             </div>
          </div>



          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;