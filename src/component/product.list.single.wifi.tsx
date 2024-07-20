import { Fragment, useState } from "react";
import CardInfo from "./card.info";
import { DownloadOutlined, GiftOutlined, PushpinOutlined, WifiOutlined } from "@ant-design/icons";

const listData = [
    {
        heading: "HOME",
        firstCost: "1",
        endCost: "65.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 100 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Khuyến mãi tặng miễn phí Modem Wifi5.'
            },
            {
                icon: <PushpinOutlined />,
                descriptions: 'Đóng trước 6 tháng không tặng.',
            },
            {
                icon: <GiftOutlined />,
                descriptions: 'Đóng trước 12 tháng tặng 1 tháng.',
            },
        ]
    },
    {
        heading: "SUN1",
        firstCost: "1",
        endCost: "80.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 150 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Khuyến mãi tặng miễn phí Modem Wifi5.'
            },
            {
                icon: <PushpinOutlined />,
                descriptions: 'Đóng trước 6 tháng không tặng.',
            },
            {
                icon: <GiftOutlined />,
                descriptions: 'Đóng trước 12 tháng tặng 1 tháng.',
            },
        ]
    },
    {
        heading: "SUN2",
        firstCost: "2",
        endCost: "29.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 250 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Khuyến mãi tặng miễn phí Modem Wifi5.'
            },
            {
                icon: <PushpinOutlined />,
                descriptions: 'Đóng trước 6 tháng không tặng.',
            },
            {
                icon: <GiftOutlined />,
                descriptions: 'Đóng trước 12 tháng tặng 1 tháng.',
            },
        ]
    },
    {
        heading: "SUN3",
        firstCost: "2",
        endCost: "79.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 300 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Khuyến mãi tặng miễn phí Modem Wifi5.'
            },
            {
                icon: <PushpinOutlined />,
                descriptions: 'Đóng trước 6 tháng không tặng.',
            },
            {
                icon: <GiftOutlined />,
                descriptions: 'Đóng trước 12 tháng tặng 1 tháng.',
            },
        ]
    },
    {
        heading: "STAR1",
        firstCost: "2",
        endCost: "10.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 150 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Miễn phí Modem Wifi5 + 1 Mesh.'
            },
            {
                icon: <PushpinOutlined />,
                descriptions: 'Đóng trước 6 tháng không tặng.',
            },
            {
                icon: <GiftOutlined />,
                descriptions: 'Đóng trước 12 tháng tặng 1 tháng.',
            },
        ]
    },
    {
        heading: "STAR2",
        firstCost: "2",
        endCost: "45.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 250 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Miễn phí Modem Wifi5 + 2 Mesh.'
            },
            {
                icon: <PushpinOutlined />,
                descriptions: 'Đóng trước 6 tháng không tặng.',
            },
            {
                icon: <GiftOutlined />,
                descriptions: 'Đóng trước 12 tháng tặng 1 tháng.',
            },
        ]
    },
    {
        heading: "STAR3",
        firstCost: "2",
        endCost: "99.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 300 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Miễn phí Modem Wifi5 + 3 Mesh.'
            },
            {
                icon: <PushpinOutlined />,
                descriptions: 'Đóng trước 6 tháng không tặng.',
            },
            {
                icon: <GiftOutlined />,
                descriptions: 'Đóng trước 12 tháng tặng 1 tháng.',
            },
        ]
    },
]

const ListProductSigleWifi = () => {
    const [listService, setListService] = useState(listData);
    return (
        <>
            <div className="container-fluid fruite mt-5">
                <div className="container">
                    <div className="tab-class text-center">
                        <div className="row g-4">
                            <div className="text-start">
                                <h5 id="list-1" >Danh sách các gói cước Internet Wifi đơn lẻ</h5>
                                <p style={{ borderLeft: "2px solid #EE0033", padding: "0px 15px", color: "#000", fontStyle: "italic" }}>Đây là các gói cước Internet Wifi đơn lẻ dành cho khách hàng là cá nhân, hộ gia đình và quán cafe nhỏ.

                                    Hãy liên hệ đến hotline:
                                    <a href="tel:0965788852" style={{ color: "#EE0033", fontWeight: 600, }}> 0965788852</a>
                                    &nbsp;để được tư vấn chi tiết hơn.</p>
                            </div>
                        </div>
                        <div className="tab-content py-3">
                            <div className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            {listService && listService.length > 0 && listService.map((service, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <CardInfo
                                                            heading={service.heading}
                                                            firstCost={service.firstCost}
                                                            endCost={service.endCost}
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
        </>
    )
}

export default ListProductSigleWifi;