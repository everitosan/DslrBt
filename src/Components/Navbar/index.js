import React from 'react'
import PropTypes from 'prop-types'
import {
    ImageBackground
} from 'react-native'
import NavbarItem from './NavbarItem/index'

import style from './style'


const Navbar = ({ options, selected, onItemPressed }) => {

    const isItemActive = (itemName) => ((itemName === selected))

    return (
        <ImageBackground source={require('./navbar.png')} style={style.background}>
            {options.map((option) => (
                    <NavbarItem
                        key={option.name}
                        source={option.source}
                        active={isItemActive(option.name)}
                        onPress={onItemPressed}>
                    </NavbarItem>
                )
            )}
        </ImageBackground>
    )
}

Navbar.propTypes = {
    selected: PropTypes.oneOf(['focus','trigger','timmer']).isRequired,
    onItemPressed: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}

Navbar.defaultProps = {
    selected: 'trigger',
    onItemPressed: () => { console.log('Provide a onItemPressed please') }
}

export default Navbar