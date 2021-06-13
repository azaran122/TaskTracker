
import PropTypes from 'prop-types';
import Button from './Button'

 const Header = (props) => {
    const onClick1 =() =>{
        console.log('Clicked');
    }
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text="Add" onClick={onClick1}></Button>
        </header>
           
         )
}

Header.defaultProps={
    title:'Task Tracker'
}
Header.propTypes={
    title: PropTypes.string.isRequired,
}

// CSS inn JS
// const headingStyle={
// color: 'red'
// }
export default Header
