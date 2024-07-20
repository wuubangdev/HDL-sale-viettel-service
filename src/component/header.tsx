import { useEffect, useState } from 'react';
import logo from '../assets/logo-header/logo-viettel-2-1024x351.png';
const Header = () => {
    const [shadow, setShadow] = useState<boolean>(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 55) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
    }, [])
    return (
        <>
            {/* Navbar start */}
            <div className={shadow ? "container-fluid fixed-top shadow" : "container-fluid fixed-top"}>
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <a href="index.html" className="navbar-brand">
                            <img src={logo} alt="" style={{ maxHeight: 66 }} />
                        </a>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}
        </>
    )
}

export default Header;

