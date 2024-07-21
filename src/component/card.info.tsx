import { List } from "antd";

interface IListItem {
    icon: any;
    descriptions: string;
}
interface IProps {
    heading: string;
    subHeading?: string;
    firstCost: string;
    endCost: string;
    timeCost?: boolean;
    hideFooter?: boolean;
    dataList: IListItem[];
    showModal?: any
}

const CardInfo = (props: IProps) => {
    const { heading, firstCost, endCost, dataList, subHeading, timeCost, hideFooter, showModal } = props;
    return (
        <>
            <div className="col-md-6 col-lg-4 col-xl-3 card-info py-1">
                <div className="rounded position-relative fruite-item">
                    <div className="card-header">
                        <div className="card-header-heading">
                            <h3 className="card-header-heading-p">{heading}</h3>
                            <h3 className="card-header-heading-p">{subHeading ? subHeading : ""}</h3>
                        </div>
                    </div>
                    {/* <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>Hot</div> */}
                    <div className="p-4 border border-primary border-top-0 rounded-bottom bg-light">
                        <List
                            dataSource={dataList}
                            renderItem={(item) => (
                                <List.Item className="text-start list-item" style={{ fontSize: "1.2em" }}>
                                    {item?.icon}  &nbsp; {item?.descriptions}
                                </List.Item>
                            )}
                            header={
                                <div>
                                    <h1><span className="cost-start">{firstCost}</span><span className="cost-end">{endCost}</span></h1>
                                    {!timeCost ? <p>/tháng</p> : <p>/tháng/cam</p>}

                                </div>
                            }
                            footer={
                                <div className="d-flex justify-content-center flex-lg-wrap">
                                    {!hideFooter ?
                                        <button className="btn btn-primary border rounded-pill px-3" onClick={() => showModal()}>
                                            Đăng ký
                                        </button>
                                        : ""
                                    }
                                </div>
                            }
                        />

                    </div>
                </div>
            </div >
        </>
    )
}

export default CardInfo;