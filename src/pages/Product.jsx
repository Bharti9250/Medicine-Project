
import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Card, Form, Pagination } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { getAllApiData } from '../context/Datacontext';
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/Cartcontext';
import { Link } from "react-router-dom";
import { useWishlist } from '../context/Wishlistcontext';

const Product = () => {
  const { productData, fetchMainCategoryById, ProductJsonData, fetchAllProductData } = getAllApiData();
  const { addToCart, cartItem } = useCart();
  const { AddToWishlist, wishListItem } = useWishlist();



  useEffect(() => {
    fetchMainCategoryById();
    fetchAllProductData();
  }, []);


  // console.log(ProductJsonData, "Bahrti");

  // navigation to single product
  const navigate = useNavigate()

  // Filters state
  const [isOpen, setIsOpen] = useState(true); 
  const [isFilterOpen, setIsFilterOpen] = useState(window.innerWidth >= 768); 


  const [categoryFilter, setCategoryFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([50, 7000]);

  // Extract unique categories from API data
  const categories = useMemo(() => {
    if (!ProductJsonData) return [];
    const unique = [...new Set(ProductJsonData.map((item) => item.category).filter(Boolean))];
    return unique;
  }, [ProductJsonData]);

  // Extract unique brands from API data
  const brands = useMemo(() => {
    if (!ProductJsonData) return [];
    const unique = [...new Set(ProductJsonData.map((item) => item.brand).filter(Boolean))];
    return unique;
  }, [ProductJsonData]);

  //  Check if any filter is applied
  categoryFilter.length > 0 ||
    brandFilter.length > 0 ||
    priceFilter[0] !== 50 ||
    priceFilter[1] !== 7000;

  //  Products per page depends on filter
  const productsPerPage = 9

  // Apply filters
  const filteredProducts = (ProductJsonData || []).filter((item) => {
    if (!item) return false;

    const categoryMatch = categoryFilter.length === 0 || categoryFilter.includes(item?.category);
    const brandMatch = brandFilter.length === 0 || brandFilter.includes(item?.brand);
    const priceMatch = Number(item.price) >= priceFilter[0] && Number(item.price) <= priceFilter[1];


    return categoryMatch && brandMatch && priceMatch;
  });


  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);






  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.toString().split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };


  return (
    <Container className="mt-4">
      {/* Banner */}

      <div className="ProductBannerImg">
        <div className="ProductBanner mb-5">
          <div className="deskTopView"><img className="w-100" src="/Img/Banner.png" alt="" /></div>
          <div className="mobileview"><img className="w-100" src="/Img/MobileImg.png" alt="" /></div>
          <div>
            <div className="ProductBannerTxt">
              <div>
                <h1>Get Tested at Home — Fast, Safe & Hassle-Free!</h1>
                <p>Blood, Sugar & More — Just a Click Away.</p>
                <div className="ReuseBtn">
                  <button className="btn" style={{ backgroundColor: "#0552aa", color: "#fff" }}>Book now</button>
                  <span style={{ color: "#fff", backgroundColor: "#0552aa" }}><FaArrowRight /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <Row>
        {/* Sidebar Filters */}
        <Col md={3}>
          <div className="ProductFilter mb-4">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <h5 className="mb-0">Filters</h5>
              <div>{isFilterOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
            </div>

            {/* Clear button visible only when filter section is open */}
            {isFilterOpen && (
              <button
                className="btn mt-2"
                onClick={() => {
                  setCategoryFilter([]);
                  setBrandFilter([]);
                  setPriceFilter([50, 7000]);
                }}
              >
                Clear All
              </button>
            )}
          </div>

          {isFilterOpen && (
            <div className="ProductFilterCat">
              {/* Category */}
              <div>
                <div
                  className="mb-3 d-flex"
                  style={{ justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <h6 className="mb-0">Category</h6>
                  <div>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                </div>

                {isOpen && (
                  <div>
                    {categories.map((cat) => (
                      <Form.Check
                        key={cat}
                        type="checkbox"
                        label={cat}
                        checked={categoryFilter.includes(cat)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCategoryFilter([...categoryFilter, cat]);
                          } else {
                            setCategoryFilter(categoryFilter.filter((c) => c !== cat));
                          }
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <hr />

              {/* Brand */}
              <div>
                <h6>Brand</h6>
                {brands.map((brand) => (
                  <Form.Check
                    key={brand}
                    type="checkbox"
                    label={brand}
                    checked={brandFilter.includes(brand)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setBrandFilter([...brandFilter, brand]);
                      } else {
                        setBrandFilter(brandFilter.filter((b) => b !== brand));
                      }
                    }}
                  />
                ))}
              </div>
              <hr />

              {/* Price */}
              <div>
                <h6>Price</h6>
                <Form.Range
                  min={50}
                  max={7000}
                  value={priceFilter[1]}
                  defaultValue={priceFilter[1]}
                  onChange={(e) => setPriceFilter([50, parseInt(e.target.value)])}
                />
                <p>₹{priceFilter[0]} - ₹{priceFilter[1]}</p>
              </div>
            </div>
          )}
        </Col>

        {/* Products Grid */}
        <Col md={9}>
          <div className="ProductList mb-5 mt-4">
            <Row className="w-100">
              {currentProducts?.map((item) => (
                <Col key={item.id} xs={6} sm={6} md={4} lg={4} className="mb-4" style={{ padding: "0px 10px" }}>
                  <Card className="ProductListCard h-100">
                    <div className="ProductListImg">
                      <div className="WishlistTag" onClick={() => AddToWishlist(item)}>
                        <FaHeart
                          style={{
                            color: wishListItem.some((i) => i.id === item.id) ? "red" : "gray",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <div className="" onClick={() => navigate(`/product/${item.id}`)} style={{ width: "200px", cursor: "pointer" }}><Card.Img variant="top" src={item.image || "/Img/productitem.png"} /></div>
                    </div>
                    <Card.Body className="ProductCardBody">
                      <div className="productTitle">
                        <Card.Title className="fs-6" style={{ color: "#667085" }}>{item.name || item.title}</Card.Title>
                        <p className="mb-1">₹{item.price?.toFixed(2) || "N/A"}</p>
                      </div>
                      <small className="text" style={{ color: "#98A2B3" }}>{truncateText(item?.description, 10)}</small>
                      <div className="ProductBtn d-flex">
                        <Link to="/CheckoutPage">
                          <button className="btn BuyBtn" onClick={() => addToCart(item)}>Buy Now</button>
                        </Link>
                        <button className="btn CartToBtn" onClick={() => addToCart(item)} >Add To Cart</button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Pagination */}
          <div className="ProductPAgePAgeination d-flex justify-content-center mt-4">
            <Pagination>
              {/* Previous Button */}
              <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                Previous
              </Pagination.Prev>

              {/* Page Numbers */}
              {[...Array(totalPages).keys()].map((page) => (
                <Pagination.Item
                  key={page + 1}
                  active={page + 1 === currentPage}
                  onClick={() => setCurrentPage(page + 1)}
                >
                  {page + 1}
                </Pagination.Item>
              ))}

              {/* Next Button */}
              <Pagination.Next
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
                Next
              </Pagination.Next>
            </Pagination>
          </div>

        </Col>
      </Row>
    </Container>
  );
};

export default Product;
