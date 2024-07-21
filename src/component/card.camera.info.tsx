import { LoadingOutlined } from "@ant-design/icons";
import { List } from "antd";

interface IProps {
    title: string;
    img: string;
    listDesc: string[];
    price: string;
}
const CardCameraInfo = (props: IProps) => {
    const { title, img, listDesc, price } = props;
    return (
        <>
            <div className="col-md-12 col-lg-6 py-5">
                <a href="#">
                    <div className="service-item bg-dark rounded border border-dark">
                        <div className="px-4 rounded-bottom rounded" style={{ backgroundColor: "#D5DAE8" }}>
                            <div className="service-content text-center p-4 rounded" style={{ position: "relative", backgroundColor: "rgb(243 64 101)" }}>
                                <h5 className="mb-0 text-white">{title}</h5>
                                <img src={img} className="img-fluid rounded-top" style={{ maxWidth: "150px" }} />
                            </div>
                            <List
                                dataSource={listDesc}
                                renderItem={(item) => (
                                    <List.Item className="text-start list-item" style={{ fontSize: "1.2em" }}>
                                        <LoadingOutlined /> &nbsp; {item}
                                    </List.Item>
                                )}
                                footer={
                                    <>
                                        <h6 className="text-center" style={{ color: "black" }}><b>Giá: {price}</b></h6>
                                        <div className="d-flex justify-content-center flex-lg-wrap">
                                            <button className="btn btn-primary border rounded-pill px-3">
                                                Đăng ký
                                            </button>
                                        </div>
                                    </>
                                }
                            />
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default CardCameraInfo;