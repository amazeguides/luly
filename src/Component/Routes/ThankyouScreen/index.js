import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import mail from '../../../Assets/Img/mail.png'
import logo from '../../../Assets/Img/logo.PNG'
import Asset from '../../../Assets/Img/Asset.png'

export default () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const [IsClassAdded, setIsClassAdded] = useState(false);
    const [Loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        navigate('/Submitted')
    }
    return (

        <div className='main'>
            <div className='section_1 px-3'>
                <div>
                    <img src={logo} alt='' height='100px' />
                </div>
                <div className=' d-flex flex-column justify-content-center min100vh'>
                    <div className='Email-feild mx-auto bg-white rounded-4 py-5 px-3 px-md-5 text-center'>
                        <img src={Asset} alt='' height="100px" />
                            <p className='text-center'>Your request for joing <strong>Waiting </strong>has been recieved.</p>
                        <button type='button' className="border-0 py-2 rounded-pill px-5 w-100 bg-black text-white" onClick={() => navigate('/Home')} >
                            Go Home
                        </button>
                    </div>
                    <div className=''>
                        <div className='w-100 Email-feild d-flex justify-content-around mx-auto'>

                            <a href="/privacy-policy" className='text-white'>Terms & Conditions</a>
                            <a href="/privacy-policy" className='text-white'>Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};