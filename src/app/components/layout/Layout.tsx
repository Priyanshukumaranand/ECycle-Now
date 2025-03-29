import Footer from "./Footer"
import Header from "./Header"
import { ReactNode } from "react"

// eslint-disable-next-line react/prop-types
const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main role="main" className="flex-grow overflow-scroll no-scrollbar">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
