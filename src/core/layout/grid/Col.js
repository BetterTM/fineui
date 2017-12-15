import React, {Component} from 'react'
import {Layout} from '../index'
import cn from 'classnames'
import FillLayout from '../fill/FillLayout';


const CLASS_NAME = 'flex-grid-layout-col'

export default class Col extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {

        const {className, grow, columns, column, style, ...props} = this.props

        return <FillLayout className={cn(CLASS_NAME, className)}
                           style={{
                               position: 'absolute',
                               top: 0,
                               bottom: 0,
                               left: column / columns * 100 + '%',
                               right: (1 - (column + 1) / columns) * 100 + '%',
                               ...style
                           }} {...props}>{this.props.children}</FillLayout>
    }
}
