import React from "react";
import { TermsOfService } from "../../../components/termsOfService";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/footer";

export default function Home() {
    return (
        <>
        <div className="sticky top-0 z-100 border-b-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <Navbar />
        </div>
        <div>
            <TermsOfService />
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <Footer />
        </>
    )
}