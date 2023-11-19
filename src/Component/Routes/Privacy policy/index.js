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
            <div className='section_1 px-1' >
                <div>
                    <img src={logo} alt='' height='100px' />
                </div>
                <div className=' section_2 px-10'  >
                <p className='text-white'><h1>Privacy Policy</h1></p>
                <p>SimplifyREI, LLC (Pareto Process) or (“us”, “we”, or “our”) is committed to protecting the privacy of our clients, customers, and visitors to our website. 
                This Privacy Policy explains how we collect, use, and disclose personal information that we may receive as part of our services. By using our services or 
                visiting our website, you agree to the terms of this Privacy Policy.If you have additional questions or require more information about our Privacy Policy, 
                do not hesitate to contact us.This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the 
                information that they shared and/or collect in ParetoProcess. This policy is not applicable to any information collected offline or via channels other 
                than this website. </p>
                <h2 className='text-white'>Consent</h2><p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>


<h2 className='text-white'>Information we collect</h2>
<p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

<h2 className='text-white'>How we use your information</h2>
<p>We use the information we collect in various ways, including to:

Provide, operate, and maintain our website
Improve, personalize, and expand our website
Understand and analyze how you use our website
Develop new products, services, features, and functionality
Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
Send you emails
Find and prevent fraud</p>
<h2 className='text-white'>Log Files</h2>
<p>ParetoProcess follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</p>

<h2 className='text-white'>Cookies and Web Beacons</h2>
<p>Like any other website, ParetoProcess uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.</p>



                </div>
            </div>
        </div>
    );
};