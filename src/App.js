import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componants/Header";
import Footer from "./Componants/Footer";
import AboutUS from "./Componants/AboutUs";
import ContactUs from "./Componants/ContactUs";
import Category from "./Componants/Category";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalPro, setFinalProduct] = useState([]);
  let [catName, setCatname] = useState("");
  let [filteredProducts, setFilteredProducts] = useState(finalPro);

  let getCategory = async () => {
    await axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log("res:", finalRes);
        setFinalCategory(finalRes);
      });
  };

  let getProduct = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((proFinalRes) => {
        // console.log("proFinalRes:",proFinalRes);
        setFinalProduct(proFinalRes.products);
      });
  };
  useEffect(() => {
    getCategory();
    getProduct();
  }, []);

  useEffect(() => {
    if (catName !== "") {
      console.log(catName);

      axios
        .get(`https://dummyjson.com/products/category/${catName.name}`)
        .then((proRes) => proRes.data)
        .then((proFinalRes) => {
          // console.log("proFinalRes:",proFinalRes);
          setFinalProduct(proFinalRes.products);
        });
    }
  }, [catName]);

  let Pitems = finalPro.map((products, index) => {
    return <ProductItems key={index} pdata={products} />;
  });



  // Function to filter products
  let handleSearch = (query) => {
    let filtered = finalPro.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/AboutUs" element={<AboutUS />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <div className=" main_div py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          {/* <h1 className="text-center text-[40px] font-bold mb-[30px]">
            Our Products
          </h1> */}
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>
              <Category finalCategory={finalCategory} setCatname={setCatname} />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-5">
                {finalPro.length >= 1 ? (
                  Pitems
                ) : (
                  <div className="grid grid-cols-3 gap-5">
                    <span className="text-3xl font-bold text-gray-500 animate-fadeIn">
                      No products found
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
function ProductItems({ pdata }) {
  return (
    <div className="shadow-lg text-center pv-4">
      <img src={pdata.thumbnail} className="w-[100%] h-[250px]" />
      <h4>{pdata.title}</h4>
      <b>Rs {pdata.price}</b>
    </div>
  );
}

