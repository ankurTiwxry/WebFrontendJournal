import Button from './Button'

const Header = () => {

    const onClick = () => {
        console.log('Click')
    }

    return (
        <header>
            <h1>Task Tracker</h1>
            <Button color='yellow' text='Henlo' onClick={onClick}/>
        </header>
    )
}

export default Header