 import PropType from 'prop-types'

 const Button = ({color, text, onClick}) => {
    // const onClick = (e) => {
       
    // }
    
    return (
          
         <button onClick={onClick} style={{backgroundColor:'green'}} className='btn'>{text} </button>   
    )
}
Button.defaultProps = {
    color: 'steelblue'

}
Button.propTypes={
    text:PropType.string,
    color:PropType.string,
    onClick:PropType.func
}
export default Button