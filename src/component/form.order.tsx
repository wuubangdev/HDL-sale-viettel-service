import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Select } from 'antd';
type FieldType = {
    name?: string;
    phone?: string;
    address?: string;
    service?: string;
};
const services = [
    "HOME",
    "SUN1",
    "SUN2",
    "SUN3",
    "STAR1",
    "STAR2",
    "STAR3",
    "HOME + APP TV360",
    "SUN1 + APP TV360",
    "SUN2 + APP TV360",
    "SUN3 + APP TV360",
    "STAR1 + APP TV360",
    "STAR2 + APP TV360",
    "STAR3 + APP TV360",
    "HOME + BOX TV360",
    "SUN1 + BOX TV360",
    "SUN2 + BOX TV360",
    "SUN3 + BOX TV360",
    "STAR1 + BOX TV360",
    "STAR2 + BOX TV360",
    "STAR3 + BOX TV360",
    "F90BASIC",
    "F90PLUS",
    "VIP200",
    "VIP500",
    "PRO300",
    "MESHPRO300",
    "PRO600",
    "MESHPRO600",
    "CAMERA NGOÀI TRỜI",
    "CAMERA TRONG NHÀ",
]
const FormOrder = () => {
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };
    return (
        <>
            <div className="container-fluid pt-4 pb-3">
                <div className="container">
                    <div className="text-center mx-auto mb-3" style={{ maxWidth: 700 }}>
                        <h3 className="text-primary">ĐĂNG KÝ LẮP ĐẶT</h3>
                        <h5 className="text-success">Vui lòng điền thông tin của bạn vào bên dưới để đăng ký lắp đặt nhé!</h5>
                    </div>
                    <div className='row justify-content-center' >
                        <div className='col-md-6 col-lg-6'>
                            <Form
                                size='large'
                                name="basic"
                                layout='vertical'
                                onFinish={onFinish}
                                initialValues={{
                                    services: "default-value"
                                }}
                            >
                                <Form.Item<FieldType>
                                    label={<span style={{ fontSize: 16 }}>Họ và tên</span>}
                                    name="name"
                                    rules={[{ required: true, message: 'Tớ vẫn chưa biết bạn là ai nè!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    label={<span style={{ fontSize: 16 }}>Số điện thoại</span>}
                                    name="phone"
                                    rules={[{ required: true, message: 'Thêm số điện thoại để mình liên hệ với nhau nhé!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item<FieldType>
                                    label={<span style={{ fontSize: 16 }}>Địa chỉ lắp đặt</span>}
                                    name="address"
                                    rules={[{ required: true, message: 'Bạn quên chọn địa chỉ để mình lắp đặt nè!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label={<span style={{ fontSize: 16 }}>Chọn gói cước</span>}
                                    name="service"
                                    rules={[{ required: true, message: 'Bạn hãy chọn gói để mình lắp đặt cho bạn nhé!' }]}
                                >
                                    <Select>
                                        <Select.Option value="default-value">Chọn gói cước tại đây</Select.Option>
                                        {services.map((service, index) => {
                                            return (
                                                <Select.Option key={`service-${index}`} value={service}>{service}</Select.Option>
                                            )
                                        })}
                                    </Select>
                                </Form.Item>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button
                                        type="primary"
                                        danger
                                        htmlType="submit"
                                    >
                                        Gửi yêu cầu
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FormOrder;