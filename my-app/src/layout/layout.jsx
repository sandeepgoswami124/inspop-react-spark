import React from 'react';
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { Body } from '../body/body'


export const Layout = () => {
    return <div>
        <Header />
        <Body />
        <Footer />
    </div>
}