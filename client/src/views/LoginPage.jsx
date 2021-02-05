import Login from './Login';
import Register from './Register';

const LoginPage = ({ setUser }) => {
    return (
        <div class="blockquote text-center">
            <Register setUser={setUser} />
            <Login setUser={setUser} />
        </div>)
}
export default LoginPage