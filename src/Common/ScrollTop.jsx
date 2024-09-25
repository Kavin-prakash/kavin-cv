import ScrollToTop from "react-scroll-to-top";
import './ScrollTop.css'

export function ScrollTop() {
    return (
        <div className="scroolTop-Section">
            <div />
            <ScrollToTop className="top-scrool-arrow" smooth />
        </div>
    );
}