import { InfoCircleOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { FloatButton, Tooltip } from 'antd';
import { SiZalo } from "react-icons/si";

const FloatButtonModel = (props: any) => {
    const { showModal } = props;
    const telPhone = () => {
        window.open('tel:900300400')
    }
    return (
        <>
            <FloatButton.Group
                shape="circle"
                style={{ right: 30 }}
                // trigger="click"
                icon={<InfoCircleOutlined />}
            >
                <FloatButton
                    onClick={() => showModal()}
                    icon={<MailOutlined />}
                />
                <FloatButton
                    type="primary"
                    icon={<SiZalo />}
                />
                <Tooltip
                    placement="left"
                    color='#dc3545'
                    title="0965788852"
                    open
                >
                    <FloatButton
                        onClick={() => telPhone()}
                        icon={<PhoneOutlined onClick={() => telPhone()} />}
                    />
                </Tooltip>

                <FloatButton.BackTop />
            </FloatButton.Group>
        </>
    )
}

export default FloatButtonModel;