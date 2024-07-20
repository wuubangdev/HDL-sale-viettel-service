import { DownloadOutlined, GiftOutlined, PushpinOutlined, WifiOutlined } from "@ant-design/icons";
import { List, Typography } from "antd";
import { useState } from "react";

const CardInfo = () => {
    const [data, setData] = useState([
        {
            icon: <DownloadOutlined />,
            descriptions: 'Tốc độ 100 Mbs.'
        },
        {
            icon: <WifiOutlined />,
            descriptions: 'Miễn phí Modem Wifi5.'
        },
        {
            icon: <PushpinOutlined />,
            descriptions: 'Đóng trước 6 tháng không tặng.',
        },
        {
            icon: <GiftOutlined />,
            descriptions: 'Đóng trước 12 tháng tặng 1 tháng.',
        },


    ])
    return (
        <>
            <div className="col-md-6 col-lg-4 col-xl-3 card-info">
                <div className="rounded position-relative fruite-item">
                    <div className="card-header">
                        <div className="card-header-heading"><h3 className="card-header-heading-p">HOME</h3></div>
                    </div>
                    {/* <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>Hot</div> */}
                    <div className="p-4 border border-primary border-top-0 rounded-bottom">
                        <List
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item className="text-start list-item" style={{ fontSize: "1.2em" }}>
                                    {item?.icon}  &nbsp; {item?.descriptions}
                                </List.Item>
                            )}
                            header={
                                <div>
                                    <h1><span className="cost-start">1</span><span className="cost-end">65.000đ</span></h1>
                                    <p>/tháng</p>
                                </div>
                            }
                            footer={
                                <div className="d-flex justify-content-center flex-lg-wrap">
                                    <button className="btn btn-primary border rounded-pill px-3">
                                        Đăng ký
                                    </button>
                                </div>
                            }
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default CardInfo;