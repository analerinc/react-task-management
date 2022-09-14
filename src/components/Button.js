import '../styles/Button.scss';


const Button = ({ ...rest }) => {

    return <button className="btn" {...rest} />
}

export default Button;