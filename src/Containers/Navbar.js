import React, { Component } from 'react'
import NavbarComponent from '../Components/Navbar'

const options = [{
    name: 'focus',
    source: require('DsrlBt/src/img/icon-focus.png')
}, {
    name: 'trigger',
    source: require('DsrlBt/src/img/icon-trigger.png')
}, {
    name: 'timmer',
    source: require('DsrlBt/src/img/icon-timmer.png')
}]

class Navbar extends Component {
    render() {
        return <NavbarComponent options={options} />
    }
}

export default Navbar