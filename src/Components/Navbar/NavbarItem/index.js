import React from 'react'
import PropTypes from 'prop-types'
import {
    Image,
    TouchableOpacity
} from 'react-native'
import style from './style'

const NavbarItem = ({active, source, onPress}) => {
    if (!active) {
        return (
            <TouchableOpacity onPress={onPress}>
                <Image source={source} style={style.image} ></Image>
            </TouchableOpacity>
        )
    }

    return <Image source={source} style={style.image} ></Image>
}

NavbarItem.propTypes = {
    active: PropTypes.bool,
    source: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired
}

NavbarItem.defaultProps = {
    active: false,
}

export default NavbarItem