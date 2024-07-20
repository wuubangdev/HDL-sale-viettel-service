import { Carousel } from "antd";
import imgBanner1 from "../assets/img/banner/baner-viettel-fix.png";
const contentStyle: React.CSSProperties = {
    height: '100%',
    width: '100%',
    padding: "0 2px"
};
const Banner = () => {
    return (
        <>
            <div className="container-fluid py-5 mb-3 hero-header">
                <div className="container pb-3">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-12 col-lg-7 text-center">
                            <h4 className="mb-3 text-secondary">Tặng ngay</h4>
                            <h1 className="mb-3 display-5 text-primary" style={{ fontWeight: 600 }}>Từ Một Đến Hai Tháng Cước Dịch Vụ</h1>
                            <button className="banner-cost bg-danger mb-3">Chỉ từ 165.000đ/tháng</button>
                            <h6 className="mb-2 text-secondary" style={{ fontWeight: 400 }}>Phí hòa mạng <b>300.000đ</b> | Miễn phí modem wifi</h6>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div id="carouselId" className="carousel slide position-relative" style={{ overflow: "hidden", borderRadius: "10px", padding: 2 }}>
                                <Carousel arrows infinite={true} autoplay autoplaySpeed={3000} style={{ overflow: "hidden", borderRadius: "10px" }}>
                                    <div>
                                        <img src={imgBanner1} alt="" style={contentStyle} />
                                    </div>
                                    <div>
                                        <img src={imgBanner1} alt="" style={contentStyle} />
                                    </div>
                                    <div>
                                        <img src={imgBanner1} alt="" style={contentStyle} />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;