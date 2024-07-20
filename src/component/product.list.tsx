import CardInfo from "./card.info";

const ListProduct = () => {
    return (
        <>
            <div id="list1" className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="tab-class text-center">
                        <div className="row g-4">
                            <div className="text-start">
                                <h3>Danh sách các gói cước Internet Wifi đơn lẻ</h3>
                                <p style={{ borderLeft: "2px solid #EE0033", padding: "0px 15px", color: "#000", fontStyle: "italic" }}>Đây là các gói cước Internet Wifi đơn lẻ dành cho khách hàng là cá nhân, hộ gia đình và quán cafe nhỏ.

                                    Hãy liên hệ đến hotline:
                                    <a href="tel:0965788852" style={{ color: "#EE0033", fontWeight: 600, }}> 0965788852</a>
                                    &nbsp;để được tư vấn chi tiết hơn.</p>
                            </div>
                        </div>
                        <div className="tab-content py-5">
                            <div className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <CardInfo />
                                            <CardInfo />
                                            <CardInfo />
                                            <CardInfo />
                                            <CardInfo />
                                            <CardInfo />
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

export default ListProduct;