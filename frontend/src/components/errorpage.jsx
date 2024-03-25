import { Link } from 'react-router-dom'
import error_style from '../styles/error.module.css';

const ErrorPage = () => {
    //TODO still need to fix the link component
    return (
        <div className={error_style.error_box}>
            <h1 className={error_style.error_box}>404 Page not Found</h1>
            <Link className={error_style.error_box} to="/">Go back Home</Link>
        </div>
    );
}

export {ErrorPage}