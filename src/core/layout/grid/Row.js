import React, {Component} from 'react'
import {Layout} from '../index'
import cn from 'classnames'


const CLASS_NAME = 'flex-grid-layout-row'

export default class Row extends Component {
    constructor(props, context) {
        super(props, context)
    }

    static defaultProps = {}

    render() {
        const {className, children, rows, row, style, ...props} = this.props

        return <Layout className={ cn(CLASS_NAME, className) } style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: row / rows * 100 + '%',
            bottom: (1 - (row + 1) / rows) * 100 + '%',
            ...style
        }} {...props}>
            { children }
        </Layout>
    }
}
