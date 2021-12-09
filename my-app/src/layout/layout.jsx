import React from 'react';
// import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { Body } from '../body/body'
import { MenuBar ,Header} from '../header'; // ./folderName
// import { MenuBar } from '../header/menubar';


export const Layout = () => {
    return <div>
        <Header />
        <MenuBar />
        <Body />
        <Footer />
    </div>
}