import react from "react";

import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/footer";
import { Contact } from "../../../components/contact";

export default function Home() {
    return (
    <>
    <div className="sticky top-0 z-100 border-b-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <Navbar />
    </div>
        
    <div className="z-0">
        <Contact />
    </div>

    <div className="z-50">
        <Footer />
    </div>
    </>
  )
}