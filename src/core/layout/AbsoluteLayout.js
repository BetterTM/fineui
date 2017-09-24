import React, {
    Component
} from 'react'
import cn from 'classnames'
import Layout from './Layout'
import './AbsoluteLayout.less'
import FillLayout from './fill/FillLayout';

class AbsoluteLayout extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {children, className, ...props} = this.props;
        return <Layout className={cn('fct-absolute-layout', className)} {...props}>
            {children}
        </Layout>
    }
}

class Item extends Component {
    constructor() {
        super()
    }

    render() {
        const {children, style, left, right, top, bottom, ...props} = this.props;
        return <FillLayout style={{
            position: 'absolute',
            left,
            right,
            top,
            bottom,
            ...style
        }} {...props}>
            {children}
        </FillLayout>
    }
}
AbsoluteLayout.Item = Item;
export default AbsoluteLayout
