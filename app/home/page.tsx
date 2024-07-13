import React from 'react'
import Footer from '@/components/Footer';
import '../styles/styles.css';
import '../styles/search.css';
import '../styles/categories.css';
import '../styles/services.css';


export default async function Home() {

    return (
        <div className="container">
            <h1 className="heading-large">Home</h1>

            <Footer />
        </div >
    )
}