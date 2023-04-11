import { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { IoIosArrowUp } from "react-icons/io"
import AOS from "aos";
import "aos/dist/aos.css";


function GoTop() {
    const [showGoTop, setShowGoTop] = useState(false)

    const handleVisibleButton = () => {
        setShowGoTop(window.pageYOffset > 2000)
    }

    const handleScrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton)
    }, [])

    return (
        <div className={showGoTop ? styles.goTopVisible : ""} onClick={handleScrollUp} data-aos="fade-up">
            <button className={styles.goTop}>
                <IoIosArrowUp/>
            </button>
        </div>
    )
}

export {GoTop}