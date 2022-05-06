import React from 'react';
import {connect} from 'react-redux';
import {loginRequest, logoutRequest} from '@/modules/auth/login';
import {Login} from '@/components/auth/Login';

const LoginPage = () => {
    const [login, setLogin] = useState({userid: '', password: ''})
    const dispatch = useDispatch()
    
    const onChange = e =>{
        e.preventDefault()
        const{name,value} = e.target;
        setLogin({...login,[name]:value})
      }
    const onSubmit = e => {
        e.preventDefault()
        alert('로그인정보: ' + JSON.stringify(login))
        dispatch(registerRequest(login))
        window.location.href='/'
    }
    return (<Login onChange={onChange} onSubmit={onSubmit}/>);
};

const mapStateToProps = state => ({isLoggined: state.signin.isLoggined, loginUser: state.login.loginUser})
const loginActions = {
    loginRequest,
    logoutRequest
}
export default connect(mapStateToProps, loginActions)(LoginPage)