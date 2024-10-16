import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuButton } from "../MenuButton";
import Menu from "../Menu";

export default function Header() {
    const [active, setActive] = useState(false)
    const { pathname } = useLocation();

    useEffect(() => {
        setActive(false)
    }, [pathname])

    if (active) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'auto';  
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-between px-14 py-4 bg-primaryColor w-full max-w-screen-xl flex-1">
                    <Link to={"/"} className="text-white text-4xl font-bold">ACP</Link>
                    <div className="z-50">
                        <MenuButton onClick={() => setActive((prev) => !prev)} active={active} color={active ? 'black' : 'white'} />
                    </div>
                </div>
                <div className={`absolute ${active ? "top-0" : "-top-full"} transition-all duration-700 z-40`}>
                    <Menu />
                </div>
            </div>

        </>
    );
}
