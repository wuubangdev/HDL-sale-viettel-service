import { Fragment, useState } from "react";
import CardInfo from "./card.info";
import { DownloadOutlined, GiftOutlined, PushpinOutlined, WifiOutlined } from "@ant-design/icons";

const listData = [
    {
        heading: "F90BASIC",
        firstCost: "6",
        endCost: "60.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 120 Mbs/ 2Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'IP tĩnh'
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
        heading: "F90PLUS",
        firstCost: "8",
        endCost: "80.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 120 Mbs/ 6 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'IP tĩnh.'
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
        heading: "VIP200",
        firstCost: "8",
        endCost: "00.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 200 Mbs/ 5 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'IP tĩnh.'
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
        heading: "VIP500",
        firstCost: "1",
        endCost: "900.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 500 Mbs/ 10 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'IP tĩnh.'
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
        heading: "PRO300",
        firstCost: "3",
        endCost: "50.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 300 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'IP động.'
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
        heading: "PRO600",
        firstCost: "5",
        endCost: "00.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 600 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'IP động.'
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
        heading: "MESHPRO300",
        firstCost: "4",
        endCost: "50.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 300 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'IP động.'
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
        heading: "MESHPRO600",
        firstCost: "6",
        endCost: "50.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 600 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'IP động.'
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

const ListProductWifiCompany = () => {
    const [listService, setListService] = useState(listData);
    return (
        <>
            <div id="list-4" className="container-fluid fruite pt-5">
                <div className="container">
                    <div className="tab-class text-center">
                        <div className="row g-4">
                            <div className="text-start">
                                <h5>Danh sách các gói cước Internet Doanh nghiệp</h5>
                                <p style={{ borderLeft: "2px solid #EE0033", padding: "0px 15px", color: "#000", fontStyle: "italic" }}>
                                    Đây là các gói cước Internet Wifi dành cho khách hàng là quán cafe lớn, nhà hàng, khách sạn, doanh nghiệp vừa và lớn hoặc đại lý game.
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

export default ListProductWifiCompany;