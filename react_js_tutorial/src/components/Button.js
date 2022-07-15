const Button = ({color, text, onClick}) => {
    
    return (
        <button onClick={onClick} 
        style={{backgroundColor : color}} 
        className='button'
        > 
            {text} 
        </button>
    )
}

Button.defaultProps = {
    color : 'grey',
    text : ':)'
}

export default Button