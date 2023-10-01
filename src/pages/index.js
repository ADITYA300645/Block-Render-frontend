import Appbar from "@/components/Appbar/Appbar";
import SecondaryAppbar from "@/components/Appbar/SecondaryAppbar";
import Cards from "@/components/Cards/Cards";
import Filterbar from "@/components/FilterBar/Filterbar";
import Hero from "@/components/Hero/Hero";

export default function Home() {
    return (
        <>
            <Appbar />
            <Hero />
            <SecondaryAppbar></SecondaryAppbar>
            <Filterbar/>
            <Cards></Cards>
        </>
    );
}
