import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-white">
                <div className="footer" style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',flexDirection:'row'}}>
                    <div>
                        <ul>
                            <h3>Know About Us</h3>
                            <li><a href="#">Know Us</a></li>
                            <li><a href="#" >Refund Policy</a></li>
                            <li><a href="#" >Our Policy</a></li>
                            <li><a href="#" >How to Return ?</a></li>
                            <li><a href="#" >Term & Conditios</a></li>
                            <li><a href="#" >Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div >
                        <ul>
                            <h3>Contact Us</h3>
                            <li><i class="fa fa-facebook"></i><a href="#" id="facebook">Facebook</a></li>
                            <li><i class="fa fa-twitter"></i><a href="#" id="twitter">Twitter</a></li>
                            <li><i class="fa fa-instagram"></i><a href="#" id="facebook">Instagram</a></li>
                            <li><i class="fa fa-telegram"></i><a href="#" id="facebook">Telegram</a></li>
                        </ul>
                    </div>

                    <div >
                        <h3>Office Address</h3>
                        <p>juswgdv </p>
                        <p>csbjhsac,87687</p>
                        <p>scccs,India</p>
                        <p>Phone No : 9876543210</p>
                    </div>
                </div>
                <div  style={{textAlign:'center',padding:'5px ',backgroundColor:'grey'}}>
                    <small>SimpleKart &#169; : 2021  All Rights Reserved</small>
                </div>
            </footer>
        </div>
    )
}
