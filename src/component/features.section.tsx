import wifi from "../assets/img/feature/wifi.jpg"
import wificom from "../assets/img/feature/wifidoanhnghiep.jpg"
import tivi360 from "../assets/img/feature/tv360.jpg"
import box360 from "../assets/img/feature/boxtv360.jpg"
import camera from "../assets/img/feature/camera.png"
import { useState } from "react";

interface IFeature {
    link: string;
    img: string;
    title: string;
    brand: string;
}
const defaultData: IFeature[] = [
    {
        link: "#list-1",
        img: wifi,
        title: "Gói cước Internet Wifi đơn lẻ",
        brand: "HOT"
    },
    {
        link: "#list-2",
        img: tivi360,
        title: "Gói cước Internet Wifi + APP TV360",
        brand: "HOT"
    },
    {
        link: "#list-3",
        img: box360,
        title: "Gói cước Internet Wifi + BOX TV360",
        brand: "HOT"
    },
    {
        link: "#list-4",
        img: wificom,
        title: "Gói cước Internet Doanh nghiệp",
        brand: "NEW"
    },
    {
        link: "#list-5",
        img: camera,
        title: "Các sản phẩm Camera giám sát",
        brand: "NEW"
    },
]
const Feature = () => {
    const [features, setFeature] = useState<IFeature[]>(defaultData);

    return (
        <>
            <div className="container-fluid featurs">
                <div className="container py-4">
                    <div className="row g-4 justify-content-evenly">
                        {features && features.length > 0 && features.map((feature, index) => {
                            return (
                                <div key={`feature ${index}`} className="col-md-6 col-lg-2">
                                    <a href={feature.link}>
                                        <div className="featurs-item text-center rounded bg-light pb-4">
                                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                                <img className="feature-img" src={feature.img} />
                                            </div>
                                            <div className="featurs-content text-center">
                                                <p className="mb-0 text-secondary"><b>{feature.title}</b></p>
                                                <span className="brand text-white">{feature.brand}</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>

        </>
    )
}

export default Feature;