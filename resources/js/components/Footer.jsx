import React from 'react';

export default function Footer() {
    return (
        <footer id='footer' className="text-white font-light flex flex-col gap-5 md:flex-row text-xs justify-between items-center p-5">
            <p>Copyright © PT. Super Tasko Aria</p>
            <a href="https://wa.me/6281320361179" target="blank">
                <img src="/icon/whatsapp.svg" />
            </a>
            <p>Jl. K. H. M. Yusuf Raya No.89, Mekar Jaya,<br />
                Kec. Sukmajaya Kota Depok Provinsi Jawa Barat</p>
        </footer>
    )
}

// no wa 081320361179