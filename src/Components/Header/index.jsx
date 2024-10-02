import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuButton } from "../MenuButton";
import Menu from "../Menu";

function Header() {
    const [active, setActive] = useState(false)
    const { pathname } = useLocation();

    useEffect(() => {
        setActive(false)
    }, [pathname])

    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center justify-between px-14 py-4 bg-primaryColor">
                    <h1 className="text-white text-4xl font-bold">ACP</h1>
                    <div className="z-10">
                        <MenuButton onClick={() => setActive((prev) => !prev)} active={active} color={active ? 'black' : 'white'} />
                    </div>
                </div>
                <div className={`absolute -top-full ${active ? "translate-y-full" : ""} transition-all duration-700 z-0`}>
                    <Menu />
                </div>
            </div>

        </>
    );
}

export default Header;