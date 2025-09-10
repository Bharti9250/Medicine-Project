import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { getAllApiData } from "../../context/Datacontext";

function Relatedproduct() {
  // ✅ Get context values
  const { subCategory, fetchSubCategory, productData, fetchAllProductData } = getAllApiData();

  useEffect(() => {
    fetchAllProductData(); // fetch products
    fetchSubCategory();          // fetch blogs
  }, []);

  console.log("Blogs:", subCategory);
  console.log("Products:", productData);

  return (
    <div className="container">
      <div className="row">
        <h3>Related Products</h3>
        {/* <Row>
          {productData?.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="ProductListCard h-100">
                <div className="ProductListImg">
                  <Card.Img
                    variant="top"
                    src={item.image || "/Img/productitem.png"}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{item.name || item.title}</Card.Title>
                  <p>₹{item.price?.toFixed(2) || "N/A"}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}
      </div>
    </div>
  );
}

export default Relatedproduct;
