import { QRsection } from './Bonus/QRSection';
import { ContactUs } from './ContactUs/ContactUs';
import { Routings } from './Routings/Routings';
import { Soon } from './Routings/Soon';
import { Search } from './Search/Search';
import { Work } from './Tools/ToolsWork';
import { WhyUs } from './Tools/WhyUs';
import { Trips } from './Trips/Trips';

export const Home = () => {

    return <>
        <Search />
        <Trips />
        <QRsection />
        <Work />
        <Soon />
        <WhyUs />
        <Routings />
        <ContactUs />
    </>

}