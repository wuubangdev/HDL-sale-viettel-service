import { LoadingOutlined } from "@ant-design/icons";
import { List } from "antd";

interface IProps {
    title: string;
    img: string;
    listDesc: string[];
    price: string;
    showModal?: any;
}
const CardCameraInfo = (props: IProps) => {
    const { title, img, listDesc, price, showModal } = props;
    return (
        <>
            <div className="col-md-12 col-lg-6 py-5">
                <a>
                    <div className="service-item bg-dark rounded border border-dark">
                        <div className="px-4 rounded-bottom rounded" style={{ backgroundColor: "#D5DAE8" }}>
                            <div className="service-content text-center p-4 rounded" style={{ position: "relative", backgroundColor: "rgb(243 64 101)" }}>
                                <h6 className="mb-0 text-white">{title}</h6>
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
                                        <h5 className="text-center" style={{ color: "black" }}><b>Giá: {price}</b></h5>
                                        <div className="d-flex justify-content-center flex-lg-wrap">
                                            <button className="btn btn-primary border rounded-pill px-3" onClick={() => showModal()}>
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