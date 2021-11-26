const Button = ({ color, title, onClick }) => {
    return <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{title}</button>
}

Button.defaultProps = {
    color: 'steelblue',
}

export default Button