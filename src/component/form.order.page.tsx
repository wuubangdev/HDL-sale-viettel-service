import type { FormProps } from 'antd';
import { Button, Form, Input, notification, Select, Spin } from 'antd';
import { useState } from 'react';
type FieldType = {
    fullName?: string;
    telephone?: string;
    addressSet?: string;
    chooseService?: string;
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
const FormOrderPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        let url = 'https://api.sheety.co/a66b3e43b3f4c72c1222c823ed109efd/register/sheet1';
        let date = new Date();
        let body = {
            sheet1: {
                date: date.toISOString(),
                name: values.fullName,
                phone: values.telephone,
                address: values.addressSet,
                choose: values.chooseService
            }
        }
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then(json => {
                notification.success({
                    duration: 3,
                    showProgress: true,
                    message: "Đăng ký thành công",
                    description: `Chúc mừng bạn: ${json.sheet1.name} đã đăng ký dịch vụ ${json.sheet1.choose} thành công. Luận sẽ liên hệ bạn sớm nhất!`,
                })
                setLoading(false);
            })
            .catch(() => {
                notification.error({
                    duration: 3,
                    showProgress: true,
                    message: "Đăng ký thất bại",
                    description: `Có lỗi xảy ra bạn chưa đăng ký dịch vụ thành công, vui lòng thử lại dùm Luân sau nha!`,
                })
                setLoading(false);
            })
            ;
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
                            <Spin spinning={loading}>
                                <Form
                                    key={"form-page"}
                                    size='large'
                                    name="form-page"
                                    layout='vertical'
                                    onFinish={onFinish}
                                    initialValues={{
                                        services: "default-value"
                                    }}
                                >
                                    <Form.Item<FieldType>
                                        label={<span style={{ fontSize: 16 }}>Họ và tên</span>}
                                        name="fullName"
                                        rules={[{ required: true, message: 'Luận vẫn chưa biết bạn là ai nè!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item<FieldType>
                                        label={<span style={{ fontSize: 16 }}>Số điện thoại</span>}
                                        name="telephone"
                                        rules={[{ required: true, message: 'Thêm số điện thoại để Luận liên hệ với bạn nhé!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item<FieldType>
                                        label={<span style={{ fontSize: 16 }}>Địa chỉ lắp đặt</span>}
                                        name="addressSet"
                                        rules={[{ required: true, message: 'Cho Luận biết chố lắp đặt nhé!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label={<span style={{ fontSize: 16 }}>Chọn gói cước</span>}
                                        name="chooseService"
                                        rules={[{ required: true, message: 'Bạn hãy chọn gói để Luận lắp đặt cho bạn nhé!' }]}
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
                                            onClick={() => setLoading(true)}
                                        >
                                            Gửi yêu cầu
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Spin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FormOrderPage;