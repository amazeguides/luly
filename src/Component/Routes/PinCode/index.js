import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import logo from '../../../Assets/Img/logo.PNG'
import PrivacyPolicy from '../Privacy policy';

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
                    <div className='Email-feild mx-auto bg-white rounded-4 py-5 px-3 px-md-5'>
                        <p className='text-center text-decoration-underline'>Step 2 of 2: <strong>2FA</strong></p>
                        <p className='fs_24 fw-bold text-center'>Authenticate Your Number</p>
                        <p className='text-center'>We have texted a code to <strong>####</strong> please provide this promptly below to authenticate your submission.</p>

                        <form onSubmit={handleSubmit} className={IsClassAdded ? 'was-validated' : ''} >
                            <div className='otp rounded-pill overflow-hidden py-3'>

                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => <input {...props} />}
                                />
                            </div>
                            <div className="pt-3 text-center">
                                <button type={!IsClassAdded ? 'button' : 'submit'} className="border-0 py-2 rounded-pill px-5 w-100 bg-black text-white" onClick={() => setIsClassAdded(true)} >
                                    {Loading ? (
                                        // <div className="spinner-border text-light" role="status">
                                        //     <span className="visually-hidden">Loading...</span>
                                        // </div>
                                        <div className="whitespinner">
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                        </div>
                                    ) : (
                                        <>Verify</>
                                    )}</button>
                                <p className="py-2">Didn't recieve code? <strong className="cursor-pointer fw-700">Resend Code</strong></p>
                            </div>
                        </form>
                    </div>
                    <div className=''>
                        <div className='w-100 Email-feild d-flex justify-content-around mx-auto'>
                        <a href="/privacy-policy">Terms & Conditions</a>
                            <a className='text-white'>Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};