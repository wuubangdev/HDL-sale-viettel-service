import { LinkOutlined, PhoneOutlined } from "@ant-design/icons";
import { Divider, List } from "antd";

const OtherService = () => {
    const dataSupport = [
        {
            title: 'Tổng Đài CSKH, Báo Hỏng Wifi:',
            link: "180.8119",
        },
        {
            title: 'Tổng Đài CSKH Dịch Vụ Di Động: ',
            link: "1800.8098",
        },
        {
            title: 'Lắp Đặt Nhanh Trong Vòng 24h-48h.',
            link: "",
        },
    ];
    const dataOtherService = [
        {
            title: 'Lắp Mạng Viettel 63 Tỉnh',
            link: "https://viettelinternet.vn/",
        },
        {
            title: 'Chữ Ký Số ViettelCA',
            link: "https://viettelinternet.vn/chu-ky-so-ca-viettel",
        },
        {
            title: 'Di Động Trả Sau',
            link: "https://viettelinternet.vn/cac-goi-cuoc-tra-sau-viettel",
        },
        {
            title: 'Đăng Ký 4G Viettel',
            link: "https://viettelinternet.vn/goi-cuoc-data-4g-5g-viettel",
        },
    ];
    return (
        <>
            <div className="container-fluid py-5 background-other-service">
                <div className="container">
                    <div className="bg-light p-5 rounded">
                        <div className="row g-4 justify-content-center">
                            <div className="col-md-6 col-lg-6 col-xl-6">
                                <div className="counter bg-white rounded py-2 px-4">
                                    <Divider orientation="center"><h5 className="text-primary">HỖ TRỢ DỊCH VỤ</h5></Divider>
                                    <List
                                        // header={<div>Header</div>}
                                        // footer={<div>Footer</div>}
                                        // bordered
                                        dataSource={dataSupport}
                                        renderItem={(item) => (
                                            <List.Item className="text-start" style={{ fontSize: "1.2em" }}>
                                                <PhoneOutlined />&nbsp; {item.title} <a href={`tel:${item.link}`} className="text-primary enable-hover"><b>{item.link}</b></a>
                                            </List.Item>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                                <div className="counter bg-white rounded py-2 px-4">
                                    <Divider orientation="center"><h5 className="text-primary">DỊCH VỤ LIÊN KẾT KHÁC</h5></Divider>
                                    <List
                                        // header={<div>Header</div>}
                                        // footer={<div>Footer</div>}
                                        // bordered
                                        dataSource={dataOtherService}
                                        renderItem={(item) => (
                                            <List.Item className="text-start" style={{ fontSize: "1.2em" }}>
                                                <LinkOutlined />&nbsp;  <a href={`${item.link}`} className="enable-hover" target="blank_">{item.title}</a>
                                            </List.Item>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherService;