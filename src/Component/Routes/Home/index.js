import { useState, useEffect } from 'react';
import icon from '../../../Assets/Img/alelo.png'
import logo from '../../../Assets/Img/logo.PNG'
import laptop from '../../../Assets/Img/laptop.png'
import { useNavigate } from 'react-router-dom';
import FloatInput from '../../subComponent/FloatInput';
import Lottie from 'lottie-react';
import Anmie from '../../subComponent/Anmie.json'


const Home = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isTounched, setIsTounched] = useState(false);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);

        // Basic email validation, you can enhance it based on your requirements
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(inputValue));
    };


    const submitEmail = (e) => {
        e.preventDefault();
        if (isValid && isTounched) {
            navigate('/Join-wait-list')
        }
        else {
            setIsTounched(true)
        }
    }

    return (
        <>
            <div className='main'>
                <div className='section_1 min100vh'>
                    <div className='container-fluid'>
                        <img src={logo} alt='' height='100px' />
                    </div>
                    <div
                        className='my-auto container d-flex flex-column justify-content-between align-items-center h-100'
                        style={{
                            position: 'relative', // Make the container a positioning context
                            overflow: 'hidden',   // Hide overflowing content
                            minHeight: '88vh',
                        }}
                    >
                        <Lottie
                            animationData={Anmie}
                            loop={true}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                left: '25%',
                                zIndex: 0,         // Behind other elements
                            }}
                        />

                        <div className='center-content py-5 z-index-2'>
                            <div className='header-text text-center text-white'>
                                <p className='fs_40 fw_500'>Your New Best Friend,</p>
                                <img src={logo} alt='' height='100px' />
                                <p>Meet Luly, a generative Al-powered voice bot that is capable of handing full conversations over phone calls and can autonomously execute 
                                    tasks across thousands of applications. </p>
                            </div>
                            <form onSubmit={submitEmail} className='Email-feild mx-auto'>
                                <div class="input-container d-flex bg-white rounded-pill p-2 p-md-3">
                                    <div className="w-100">
                                        <FloatInput label="Email" placeholder="Email" val={email} >
                                            <input
                                                type="email"
                                                className={`form-control p-2 border-0 rounded-pill me-3 ${isTounched ? isValid ? '' : 'is-invalid' : ''}`}
                                                value={email}
                                                onChange={handleChange} />
                                        </FloatInput>
                                        <div className="invalid-feedback text-start">Please enter a valid email address</div>
                                    </div>

                                    <button type='submit' className="btn btn-primary text-white border-0 rounded-pill px-3 py-2 cursor-pointer grad">Continue</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Home;