import { ArrowRightOutlined } from "@ant-design/icons";
import outDoorCamera from "../assets/img/camera/camera-ngoaitroi.png";
import inDoorCamera from "../assets/img/camera/camera-trongnha-360.png";
import CardCameraInfo from "./card.camera.info";
import { Fragment } from "react/jsx-runtime";
import CardInfo from "./card.info";

const CameraService = () => {
    const defaultData = [
        {
            title: "CAMERA NGOÀI TRỜI CỐ ĐỊNH",
            img: outDoorCamera,
            price: "300.000 vnđ",
            listDesc: [
                "Độ phân giải Full HD (1080P)",
                "Khả năng chống nước, chống bụi IP67",
                "Công nghệ nén hình ảnh theo chuẩn H.265",
                "Phân biệt chuyển động của con người với vật",
                "Hình ảnh quan sát có màu vào ban đêm",
                "Tầm nhìn xa hồng ngoại 30m",
                "Có đèn báo động khi phát hiện chuyển động vào ban đêm",
                "Lưu trữ Cloud Storage",
                "Bảo hành 12 tháng",
                "Chăm sóc khách hàng 24/7",
            ]
        },
        {
            title: "CAMERA TRONG NHÀ XOAY 360 ĐỘ",
            img: inDoorCamera,
            price: "150.000 vnđ",
            listDesc: [
                "Độ phân giải Full HD (1080P)",
                "Tự động xoay và bám chuyển động 360°",
                "Tính năng chống ngược sáng WDR",
                "Công nghệ nén hình ảnh theo chuẩn H.265",
                "Phân biệt chuyển động của con người với vật",
                "Tầm nhìn xa hồng ngoại 10m",
                "Cảnh báo chuyển động",
                "Lưu trữ Cloud Storage",
                "Bảo hành 12 tháng",
                "Chăm sóc khách hàng 24/7",
            ]
        },
    ]
    const listData = [
        {
            heading: "GÓI LƯU TRỮ",
            subHeading: "7 NGÀY",
            firstCost: "4",
            endCost: "0.000đ",
            timeCost: true,
            hideFooter: true,
            dataList: [
                {
                    icon: <ArrowRightOutlined />,
                    descriptions: 'Lưu trữ & xem lại: 07 ngày trước'
                },
                {
                    icon: <ArrowRightOutlined />,
                    descriptions: 'Video chất lượng: Full HD (1080p)'
                },
                {
                    icon: <ArrowRightOutlined />,
                    descriptions: 'Cảnh báo thông minh',
                },
            ]
        },
        {
            heading: "GÓI LƯU TRỮ",
            subHeading: "15 NGÀY",
            firstCost: "6",
            endCost: "0.000đ",
            timeCost: true,
            hideFooter: true,
            dataList: [
                {
                    icon: <ArrowRightOutlined />,
                    descriptions: 'Lưu trữ & xem lại: 30 ngày trước'
                },
                {
                    icon: <ArrowRightOutlined />,
                    descriptions: 'Video chất lượng: Full HD (1080p)'
                },
                {
                    icon: <ArrowRightOutlined />,
                    descriptions: 'Cảnh báo thông minh',
                },
            ]
        },
        {
            heading: "GÓI LƯU TRỮ",
            subHeading: "30 NGÀY",
            firstCost: "9",
            endCost: "0.000đ",
            timeCost: true,
            hideFooter: true,
            dataList: [
                {
                    icon: <ArrowRightOutlined />,
                    descriptions: 'Lưu trữ & xem lại: 30 ngày trước'
                },
                {
                    icon: <ArrowRightOutlined />,
                    descriptions: 'Video chất lượng: Full HD (1080p)'
                },
                {
                    icon: <ArrowRightOutlined />,
                    descriptions: 'Cảnh báo thông minh',
                },
            ]
        },
    ]
    return (
        <>
            <div className="service pt-3 pb-5 background-camera">
                <h2 className="text-center text-primary">LẮP CAMERA VIETTEL</h2>
                <div className="container pt-5">
                    <div className="row g-4 justify-content-center">
                        {defaultData && defaultData.map((item, index) => {
                            return (
                                <CardCameraInfo
                                    key={index}
                                    title={item.title}
                                    img={item.img}
                                    price={item.price}
                                    listDesc={item.listDesc}
                                />
                            )
                        })}

                    </div>
                </div>
                <div id="list-6" className="container-fluid fruite">
                    <div className="container">
                        <div className="tab-class text-center">
                            <div className="row g-4">
                                <div className="text-center">
                                    <h3 style={{ margin: 0 }}>GÓI LƯU TRỮ ĐÁM MÂY</h3>
                                </div>
                            </div>
                            <div className="tab-content py-3">
                                <div className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="row g-4 justify-content-center">
                                                {listData && listData.length > 0 && listData.map((service, index) => {
                                                    return (
                                                        <Fragment key={index}>
                                                            <CardInfo
                                                                heading={service.heading}
                                                                subHeading={service.subHeading}
                                                                firstCost={service.firstCost}
                                                                endCost={service.endCost}
                                                                timeCost={service.timeCost}
                                                                hideFooter={service.hideFooter}
                                                                dataList={service.dataList}
                                                            />
                                                        </Fragment>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CameraService;