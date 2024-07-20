import "./scss/app.scss";
import Banner from "./component/banner";
import Header from "./component/header";
import Feature from "./component/features.section";
import { PhoneOutlined } from "@ant-design/icons";
import ListProductSigleWifi from "./component/product.list.single.wifi";
import ListProductWifi360 from "./component/product.list.wifi.tv360";
import ListProductBox360 from "./component/product.list.wifi.box360";
import ListProductWifiCompany from "./component/product.list.wifi.company";

function App() {
  return (
    <>
      <div className="app">
        {/* Navbar start */}
        <Header />
        {/* Navbar End */}
        {/* Hero Start */}
        <Banner />
        {/* Hero End */}
        {/* Brand Start */}
        <div className="container-fluid testimonial noselect">
          <div className="container">
            <div className="testimonial-header text-center">
              <h2 className="text-primary noselect" style={{ fontWeight: 700 }}>Viettel Cà Mau</h2>
              <h4 className="text-primary noselect">Lắp Đặt Wifi - Truyền Hình - Camera</h4>
              <p className="text-success" style={{ fontStyle: "italic" }}>(Mẹo: bấm vào từng biểu tượng dưới đây sẽ tự động chuyển màn hình đến từng nhóm Gói cước)</p>
            </div>
          </div>
        </div>
        {/* Brand End */}
        {/* <BreakPart /> */}
        {/* Featurs Section Start */}
        <Feature />
        {/* Featurs Section End */}
        <div className="container-fluid testimonial noselect">
          <div className="hotline">
            <h5><PhoneOutlined /> <a href="tel:0965788852" className="text-white">Hotline: 0965788852</a></h5>
          </div>
        </div>
        {/* Fruits Shop Start*/}
        <ListProductSigleWifi />
        <ListProductWifi360 />
        <ListProductBox360 />
        <ListProductWifiCompany />
        {/* Fruits Shop End*/}
        {/* Featurs Start */}
        <div className="container-fluid service py-5">
          <div className="container py-5">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-secondary rounded border border-secondary">
                    <img src="img/featur-1.jpg" className="img-fluid rounded-top w-100" />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-primary text-center p-4 rounded">
                        <h5 className="text-white">Fresh Apples</h5>
                        <h3 className="mb-0">20% OFF</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-dark rounded border border-dark">
                    <img src="img/featur-2.jpg" className="img-fluid rounded-top w-100" />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-light text-center p-4 rounded">
                        <h5 className="text-primary">Tasty Fruits</h5>
                        <h3 className="mb-0">Free delivery</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-primary rounded border border-primary">
                    <img src="img/featur-3.jpg" className="img-fluid rounded-top w-100" />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-secondary text-center p-4 rounded">
                        <h5 className="text-white">Exotic Vegitable</h5>
                        <h3 className="mb-0">Discount 30$</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Featurs End */}
        {/* Vesitable Shop Start*/}
        <div className="container-fluid vesitable py-5">
          <div className="container py-5">
            <h1 className="mb-0">Fresh Organic Vegetables</h1>
            <div className="owl-carousel vegetable-carousel justify-content-center">
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" />
                </div>
                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                <div className="p-4 rounded-bottom">
                  <h4>Parsely</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img src="img/vegetable-item-1.jpg" className="img-fluid w-100 rounded-top" />
                </div>
                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                <div className="p-4 rounded-bottom">
                  <h4>Parsely</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img src="img/vegetable-item-3.png" className="img-fluid w-100 rounded-top bg-light" />
                </div>
                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                <div className="p-4 rounded-bottom">
                  <h4>Banana</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img src="img/vegetable-item-4.jpg" className="img-fluid w-100 rounded-top" />
                </div>
                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                <div className="p-4 rounded-bottom">
                  <h4>Bell Papper</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" />
                </div>
                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                <div className="p-4 rounded-bottom">
                  <h4>Potatoes</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" />
                </div>
                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                <div className="p-4 rounded-bottom">
                  <h4>Parsely</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" />
                </div>
                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                <div className="p-4 rounded-bottom">
                  <h4>Potatoes</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" />
                </div>
                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                <div className="p-4 rounded-bottom">
                  <h4>Parsely</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Vesitable Shop End */}
        {/* Banner Section Start*/}
        <div className="container-fluid banner bg-secondary my-5">
          <div className="container py-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="py-4">
                  <h1 className="display-3 text-white">Fresh Exotic Fruits</h1>
                  <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
                  <p className="mb-4 text-dark">The generated Lorem Ipsum is therefore always free from repetition
                    injected humour, or non-characteristic words etc.</p>
                  <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">BUY</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <img src="img/baner-1.png" className="img-fluid w-100 rounded" />
                  <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" style={{ width: 140, height: 140, top: 0, left: 0 }}>
                    <h1 style={{ fontSize: 100 }}>1</h1>
                    <div className="d-flex flex-column">
                      <span className="h2 mb-0">50$</span>
                      <span className="h4 text-muted mb-0">kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Section End */}
        {/* Bestsaler Product Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
              <h1 className="display-4">Bestseller Products</h1>
              <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which
                looks reasonable.</p>
            </div>
            <div className="row g-4">
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img src="img/best-product-1.jpg" className="img-fluid rounded-circle w-100" />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">Organic Tomato</a>
                      <div className="d-flex my-3">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img src="img/best-product-2.jpg" className="img-fluid rounded-circle w-100" />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">Organic Tomato</a>
                      <div className="d-flex my-3">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img src="img/best-product-3.jpg" className="img-fluid rounded-circle w-100" />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">Organic Tomato</a>
                      <div className="d-flex my-3">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img src="img/best-product-4.jpg" className="img-fluid rounded-circle w-100" />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">Organic Tomato</a>
                      <div className="d-flex my-3">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img src="img/best-product-5.jpg" className="img-fluid rounded-circle w-100" />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">Organic Tomato</a>
                      <div className="d-flex my-3">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img src="img/best-product-6.jpg" className="img-fluid rounded-circle w-100" />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">Organic Tomato</a>
                      <div className="d-flex my-3">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <img src="img/fruite-item-1.jpg" className="img-fluid rounded" />
                  <div className="py-4">
                    <a href="#" className="h5">Organic Tomato</a>
                    <div className="d-flex my-3 justify-content-center">
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <img src="img/fruite-item-2.jpg" className="img-fluid rounded" />
                  <div className="py-4">
                    <a href="#" className="h5">Organic Tomato</a>
                    <div className="d-flex my-3 justify-content-center">
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <img src="img/fruite-item-3.jpg" className="img-fluid rounded" />
                  <div className="py-4">
                    <a href="#" className="h5">Organic Tomato</a>
                    <div className="d-flex my-3 justify-content-center">
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <img src="img/fruite-item-4.jpg" className="img-fluid rounded" />
                  <div className="py-2">
                    <a href="#" className="h5">Organic Tomato</a>
                    <div className="d-flex my-3 justify-content-center">
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bestsaler Product End */}
        {/* Fact Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="bg-light p-5 rounded">
              <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <i className="fa fa-users text-secondary" />
                    <h4>satisfied customers</h4>
                    <h1>1963</h1>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <i className="fa fa-users text-secondary" />
                    <h4>quality of service</h4>
                    <h1>99%</h1>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <i className="fa fa-users text-secondary" />
                    <h4>quality certificates</h4>
                    <h1>33</h1>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <i className="fa fa-users text-secondary" />
                    <h4>Available Products</h4>
                    <h1>789</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fact Start */}

        {/* Footer Start */}
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
          <div className="container py-5">
            <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)' }}>
              <div className="row g-4">
                <div className="col-lg-3">
                  <a href="#">
                    <h1 className="text-primary mb-0">Fruitables</h1>
                    <p className="text-secondary mb-0">Fresh products</p>
                  </a>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative mx-auto">
                    <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email" />
                    <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{ top: 0, right: 0 }}>Subscribe Now</button>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="d-flex justify-content-end pt-3">
                    <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" ><i className="fab fa-twitter" /></a>
                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" ><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" ><i className="fab fa-youtube" /></a>
                    <a className="btn btn-outline-secondary btn-md-square rounded-circle" ><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                  <h4 className="text-light mb-3">Why People Like us!</h4>
                  <p className="mb-4">typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                  <a className="btn border-secondary py-2 px-4 rounded-pill text-primary">Read More</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex flex-column text-start footer-item">
                  <h4 className="text-light mb-3">Shop Info</h4>
                  <a className="btn-link" >About Us</a>
                  <a className="btn-link" >Contact Us</a>
                  <a className="btn-link" >Privacy Policy</a>
                  <a className="btn-link" >Terms &amp; Condition</a>
                  <a className="btn-link" >Return Policy</a>
                  <a className="btn-link" >FAQs &amp; Help</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex flex-column text-start footer-item">
                  <h4 className="text-light mb-3">Account</h4>
                  <a className="btn-link" >My Account</a>
                  <a className="btn-link" >Shop details</a>
                  <a className="btn-link" >Shopping Cart</a>
                  <a className="btn-link" >Wishlist</a>
                  <a className="btn-link" >Order History</a>
                  <a className="btn-link" >International Orders</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                  <h4 className="text-light mb-3">Contact</h4>
                  <p>Address: 1429 Netus Rd, NY 48247</p>
                  <p>Email: Example@gmail.com</p>
                  <p>Phone: +0123 4567 8910</p>
                  <p>Payment Accepted</p>
                  <img src="img/payment.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Copyright Start */}
        <div className="container-fluid copyright bg-dark py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2" />Your Site
                  Name</a>, All right reserved.</span>
              </div>
              <div className="col-md-6 my-auto text-center text-md-end text-white">
                {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up" /></a>
      </div>


    </>
  )
}

export default App
