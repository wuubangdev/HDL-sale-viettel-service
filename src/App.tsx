import "./scss/app.scss";
import Banner from "./component/banner";
import Header from "./component/header";
import Feature from "./component/features.section";
import { PhoneOutlined } from "@ant-design/icons";
import ListProductSigleWifi from "./component/product.list.single.wifi";
import ListProductWifi360 from "./component/product.list.wifi.tv360";
import ListProductBox360 from "./component/product.list.wifi.box360";
import ListProductWifiCompany from "./component/product.list.wifi.company";
import CameraService from "./component/camera.service";
import FormOrder from "./component/form.order";
import OtherService from "./component/other.service";

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
              <h3 className="text-primary noselect" style={{ fontWeight: 700 }}>VIETTEL CÀ MAU</h3>
              <h5 className="text-primary noselect">Lắp Đặt Wifi - Truyền Hình - Camera</h5>
              <p className="text-success" style={{ fontStyle: "italic" }}>(Mẹo: bấm vào từng biểu tượng dưới đây sẽ tự động chuyển màn hình đến từng nhóm Gói cước)</p>
            </div>
          </div>
        </div>
        {/* Brand End */}
        {/* <BreakPart /> */}
        {/* Featurs Section Start */}
        <Feature />
        {/* Featurs Section End */}
        <div className="container-fluid testimonial noselect mb-3">
          <div className="hotline">
            <h5><PhoneOutlined /> <a href="tel:0965788852" className="text-white">Hotline: 0965788852</a></h5>
          </div>
        </div>
        {/* List Service Start*/}
        <ListProductSigleWifi />
        <ListProductWifi360 />
        <ListProductBox360 />
        <ListProductWifiCompany />
        {/* List Service End*/}
        {/* Camera Service Start */}
        <CameraService />
        {/* Camera Service End */}
        {/* From order start*/}
        <FormOrder />
        {/* From order End */}
        {/* Other Service Start */}
        <OtherService />
        {/* Other Service Start */}
        {/* Copyright Start */}
        <div className="container-fluid copyright bg-dark py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <span className="text-light"><a href="https://www.facebook.com/huynhduyluan1997"> <span>Huỳnh Duy Luận </span></a>-@- Viettel Trần Văn Thời.</span>
              </div>
              <div className="col-md-6 my-auto text-center text-md-end text-white">
                Dữ liệu lấy từ trang <a className="border-bottom" href="https://viettelcamau.vn/">Viettel Cà Mau</a> Thông tin: <a className="border-bottom" href="https://www.facebook.com/huynhduyluan1997">Huỳnh Duy Luận</a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright End */}
      </div>


    </>
  )
}

export default App
