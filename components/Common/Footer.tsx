import React from 'react';
import { Link } from '.';

function Footer() {
    return (
        <div className="flex flex-col items-center mb-[55px] tab:mb-[53px] pc-sm:mb-[50px]">
            <div className="font-bold text-base mt-[25px]">Made with love by Ridwan </div>
            <div className="flex flex-row justify-center items-center tab mt-[15px] text-[#B7B7B9] text-sm font-semibold">
                <Link href={'mailto:ridwan.bin.sarwar@gmail.com'}>
                    <div className="text-xs tab:text-base">ridwan.bin.sarwar@gmail.com</div>
                </Link>
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full mx-[10px] tab:mx-[15px] my-[15px] tab:my-[0px]"></div>
                <Link href={'tel:+8801532601363'}>
                    <div className="text-xs tab:text-base">+8801532601363</div>
                </Link>
            </div>
        </div>
    );
}

export default Footer;
