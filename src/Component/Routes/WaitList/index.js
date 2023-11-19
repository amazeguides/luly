import React, { useState } from 'react'
import FloatInput from '../../subComponent/FloatInput';
import logo from '../../../Assets/Img/logo.PNG'
import { useNavigate } from 'react-router-dom';

const WaitList = () => {

    const navigate = useNavigate()

    const initialValues = {
        name: '',
        phone: '',
        agree: false
    }
    const initialErrors = {
        name: '',
        phone: '',
        agree: false

    }
    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialErrors);
    const [IsClassAdded, setIsClassAdded] = useState(false);
    const [Loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type == 'checkbox') {
            setFormData({
                ...formData, [name]: checked
            })
        }
        else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const SetErrors = (e) => {
        e.preventDefault()
        const { name, validity } = e.target
        if (validity.valueMissing) {
            setFormErrors({ ...formErrors, [name]: 'This Feild is required' })
        }
        else if (validity.typeMismatch) {
            setFormErrors({ ...formErrors, [name]: 'Provide the Correct Format' })
        }
        else {
            setFormErrors({ ...formErrors, [name]: '' })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        navigate('/Submitted')
    }
    return (
        <>
            <div className='main'>
                <div className='section_1 px-3'>
                    <div>
                        <img src={logo} alt='' height='100px' />
                    </div>
                    <div className=' d-flex flex-column justify-content-center min100vh'>

                        <div className='Email-feild mx-auto bg-white rounded-4 p-3 p-md-4'>
                            <p className='text-center text-decoration-underline'>Step 1 of 2: <strong>Basic Info</strong></p>
                            <p className='fs_32 fw-bold text-center'>Create Your Luly Account</p>
                         
                            <form onSubmit={handleSubmit} className={IsClassAdded ? 'was-validated' : ''} >
                                <div className="d-flex flex-column justify-content-center text-center">
                                    <div className="row">
                                        <div className="col-12 py-3">
                                            <FloatInput label="Name" placeholder="Name" val={formData.name} >
                                                <input type="text" name="name"
                                                    value={formData.name}
                                                    className="input_feild form-control w-100"
                                                    required
                                                    onInvalid={SetErrors}
                                                    onChange={handleChange} />
                                            </FloatInput>
                                            <div className="invalid-feedback text-start">{formErrors.name}</div>
                                        </div>

                                        <div className="col-12">
                                            <FloatInput label="Phone Number" placeholder="Phone Number" val={formData.phone} >
                                                <input type="number" name="phone"
                                                    value={formData.phone}
                                                    className="input_feild form-control w-100"
                                                    required
                                                    max={9999999990}
                                                    onInvalid={SetErrors}
                                                    onChange={handleChange} />
                                            </FloatInput>
                                            <div className="invalid-feedback text-start">{formErrors.phone}</div>
                                        </div>
                                        <div className="form-check py-3 ms-3 text-start">
                                            <input className="form-check-input" required type="checkbox" name='agree' checked={formData?.agree} onChange={handleChange} id="flexCheckDefault" />
                                            <label className="form-check-label text-muted fs_12" htmlFor="flexCheckDefault">
                                                By checking this box, I give my consent that Luly.ai may contact me with offers and other updates at the phone number above including by text, autodialer, or artificial voice. By checking this box, I also agree to the terms of service and privacy policy.
                                            </label>
                                        </div>
                                        <div className="pt-3 px-4 text-center">
                                            <button type={!IsClassAdded ? 'button' : 'submit'} className="border-0 py-3 rounded-pill px-5 w-100 bg-black text-white" onClick={() => setIsClassAdded(true)} >
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
                                                    <>Continue</>
                                                )}</button>
                                            <p className=" py-2">Already A Member? <strong className="cursor-pointer fw-700" onClick={() => navigate('/Home')}>Sign into an existing account.</strong></p>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className=''>
                            <div className='w-100 Email-feild d-flex justify-content-around mx-auto'>
                            <a href="/terms-and-conditions" className='text-white'>Terms & Conditions</a>
                                <a href="/privacy-policy" className='text-white'>Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WaitList;