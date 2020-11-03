import React from 'react';

function Location(){
    return(
        <div className='LocationBanner'>
            <div className='locationBlock'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.6086987067883!2d-98.4267153855376!3d29.64410624432924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c891137980bef%3A0xd449b09c7bf68790!2s21920%20Bulverde%20Rd%20Suite%20102-103%2C%20San%20Antonio%2C%20TX%2078259!5e0!3m2!1sen!2sus!4v1604366641232!5m2!1sen!2sus" className='mapA'></iframe>
                <div>
                    <p className='LocationText'>21920 Bulverde Rd. Suite 102-103<br /> San Antonio, TX 78259
                    <br />
                    <table>
                        <tr>
                            <th>Hours of operation</th>
                            <th>Contact us</th>
                        </tr>
                        <tr>
                            <td>Mon - Fri: 8a.m.-6p.m.</td>
                            <td>Phone: 210-503-5063</td>
                        </tr>
                    <tr>
                            <td>Sat: 10a.m.-5p.m.</td>
                            <td>Fax: 210-973-5494</td>
                        </tr>
                        <tr>
                            <td>Sun: Closed</td>
                            <td>zikampharmacy@gmail.com</td>
                        </tr>
                    </table></p>
                </div>
            </div>
            <div className='locationBlock'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1438.5408477596245!2d-98.28191661008728!3d29.59765125226324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c9240cdb770cf%3A0x165090da4e84c0be!2s17323%20I-35%20N%2C%20Schertz%2C%20TX%2078154!5e0!3m2!1sen!2sus!4v1604368873154!5m2!1sen!2sus" className='mabB'></iframe>
                <div>
                    <p className='LocationText'>17323 IH-35 N, <br />Schertz, TX 78154
                    <br />
                    <table>
                        <tr>
                            <th>Hours of operation</th>
                            <th>Contact us</th>
                        </tr>
                        <tr>
                        <td>Mon - Fri: 9a.m.-6p.m.</td>
                            <td>Phone: 210-310-3132</td>
                        </tr>
                    <tr>
                            <td>Sat: 10a.m.-2p.m.</td>
                            <td>Fax: 210-310-3279</td>
                        </tr>
                        <tr>
                            <td>Sun: Closed</td>
                            <td>zikampharmacy@gmail.com</td>
                        </tr>
                    </table></p>
                </div>
            </div>
        </div>
    )
}

export default Location