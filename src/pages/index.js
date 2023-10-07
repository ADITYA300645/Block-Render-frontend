import Appbar from "@/components/Appbar/Appbar";
import SecondaryAppbar from "@/components/Appbar/SecondaryAppbar";
import Cards from "@/components/Cards/Cards";
import Filterbar from "@/components/FilterBar/Filterbar";
import Hero from "@/components/Hero/Hero";
import SignInOverlay from "@/components/SignIn Overlay/SignInOverlat";
import { getCookies, setCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function Home(props) {
    var isVisible = useSelector((state) => state.authBanner.isVisible);
    return (
        <>
            <SignInOverlay isVisible={isVisible}></SignInOverlay>

            <Appbar />
            <Hero />
            <SecondaryAppbar></SecondaryAppbar>
            <Filterbar />
            <Cards></Cards>
        </>
    );
}
