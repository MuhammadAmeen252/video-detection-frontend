'use client';

import styles from "../styles";

const Navbar = () => {
    return (
        <div className={`${styles.xPaddings} py-8 relative bg-[#e5e5e5]`}>
            <div className={`mx-auto flex ${styles.innerWidth}`}>
                <div className="w-[40px] h-[40px] bg-[#bababa] rounded-full
                 flex justify-center align-middle text-center items-center font-medium">V</div>
                <h2 className={`font-bold text-[16px] md:text-[24px] text-black 
                flex justify-center items-center ml-5`}>VIDEO STREAM DETECTION</h2>
            </div>
        </div>
    )
};

export default Navbar;