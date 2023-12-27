import styles from '@/styles';
import React from 'react';

const Footer = () => {
    return (
        <div className="w-full flex justify-center">
            <footer className={`flex sm:flex-row w-full flex-col sm:gap-0 gap-2 py-4 justify-between
            ${styles.paddings} ${styles.innerWidth} max-w-[60%] border-t-2`}>
                <p className="text-sm text-black">&copy; 2023 All rights reserved</p>
                <a href="/terms" className="text-black text-sm mx-2 hover:underline">Terms of Service</a>
                <a href="/privacy" className="text-black text-sm mx-2 hover:underline">Privacy Policy</a>
            </footer>
        </div>
    );
};

export default Footer;
