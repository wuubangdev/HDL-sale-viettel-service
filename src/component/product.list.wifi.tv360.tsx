import { Fragment } from "react";
import CardInfo from "./card.info";
import { DownloadOutlined, GiftOutlined, PushpinOutlined, WifiOutlined } from "@ant-design/icons";

const listService = [
    {
        heading: "HOME",
        subHeading: "+ BOX TV360",
        firstCost: "1",
        endCost: "95.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 100 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Miễn phí Modem Wifi5 + BoxTV.'
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
        subHeading: "+ BOX TV360",
        firstCost: "2",
        endCost: "10.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 150 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Miễn phí Modem Wifi5 + BoxTV.'
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
        subHeading: "+ BOX TV360",
        firstCost: "2",
        endCost: "59.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 250 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Miễn phí Modem Wifi5 + BoxTV.'
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
        subHeading: "+ BOX TV360",
        firstCost: "3",
        endCost: "09.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 300 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Miễn phí Modem Wifi5 + BoxTV.'
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
        subHeading: "+ BOX TV360",
        firstCost: "2",
        endCost: "40.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 150 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Miễn phí Modem Wifi5 + 1 Mesh + 1 BoxTV.'
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
        subHeading: "+ BOX TV360",
        firstCost: "2",
        endCost: "75.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 250 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Miễn phí Modem Wifi5 + 2 Mesh + 1 BoxTV.'
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
        subHeading: "+ BOX TV360",
        firstCost: "3",
        endCost: "29.000đ",
        dataList: [
            {
                icon: <DownloadOutlined />,
                descriptions: 'Tốc độ 300 Mbs.'
            },
            {
                icon: <WifiOutlined />,
                descriptions: 'Miễn phí Modem Wifi5 + 3 Mesh + 1 BoxTV.'
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

const ListProductWifi360 = (props: any) => {
    const { showModal } = props;

    return (
        <>
            <div id="list-2" className="container-fluid fruite pb-5 pt-3">
                <div className="container">
                    <div className="tab-class text-center">
                        <div className="row g-4">
                            <div className="text-start">
                                <h5>Danh sách các gói cước combo: Internet Wifi + APP TV360</h5>
                                <p style={{ borderLeft: "2px solid #EE0033", padding: "0px 15px", color: "#000", fontStyle: "italic", textAlign: "justify" }}>
                                    Đây là các gói cước Combo dành cho khách hàng vừa có nhu cầu sử dụng internet wifi vừa có nhu cầu xem truyền hình trên SmartTV.
                                    Hãy liên hệ đến hotline:
                                    <a href="tel:0965788852" style={{ color: "#EE0033", fontWeight: 600, }}> 0965788852</a>
                                    &nbsp;để được tư vấn chi tiết hơn.</p>
                            </div>
                        </div>
                        <div className="tab-content py-3">
                            <div className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4 justify-content-center">
                                            {listService && listService.length > 0 && listService.map((service, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <CardInfo
                                                            showModal={showModal}
                                                            heading={service.heading}
                                                            subHeading={service.subHeading}
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

export default ListProductWifi360;