
import Home from "./Routes/Home";
import { Routes, Route, Navigate } from 'react-router-dom'
import WaitList from "./Routes/WaitList";
/*import PinCode from "./Routes/PinCode";*/
import ThankyouScreen from "./Routes/ThankyouScreen";
import PrivacyPolicy from "./Routes/Privacy policy";
import TermsAndConditions from "./Routes/Terms and conditions";



const MainComponent = () => {
    return (
        <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Join-wait-list' element={<WaitList />} />
            <Route path='/Submitted' element={<ThankyouScreen />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditions/>} />
            <Route
                path="*"
                element={<Navigate to="/Home" replace />}
            />
        </Routes>
    );
}

export default MainComponent;