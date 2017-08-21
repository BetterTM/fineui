import React, { Component, PropTypes } from 'react'
import Button from '../components/button'
import TreeDemo from './demo.tree'
import ComboDemo from './demo.combo'
import ButtonDemo from './demo.button'
import LabelDemo from './demo.label'
import GridDemo from './demo.gird'
import Toast from '../components/tip/toast/Toast'
//eslint warning 太多了,先注释了
//import TableDemo from './demo.table' es
import range from 'lodash/range'
import './example.less'

import { AbsoluteLayout, CenterLayout, HorizontalCenterLayout, VerticalCenterLayout, HorizontalLayout, HtapeLayout, VtapeLayout, Layout, CardLayout, VerticalLayout, HorizontalAdaptLayout, VerticalAdaptLayout } from '../layout'

class App extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            defaultShowKey: '1'
        }
    }

    static defaultProps = {}

    changeCard = (key) => {
        this.setState({
            defaultShowKey: key
        })
    }

    render() {
        const { ...props } = this.props,
            { ...state } = this.state;
        return <VerticalLayout>
            <CenterLayout vgap={20}>
                <Button hgap={10} handler={() => this.changeCard('1')}>ButtonDemo</Button>
                 <Button hgap={10} handler={() => this.changeCard('2')}>LabelDemo</Button>
                 <Button hgap={10} handler={() => this.changeCard('3')}>TreeDemo</Button>
                 <Button hgap={10} handler={() => this.changeCard('4')}>GridDemo</Button>
                 <Button hgap={10} handler={() => this.changeCard('5')}>ComboDemo</Button>
                <Button hgap={10} handler={() => Toast.show('这是一个 toast,持续3秒')}>Toast</Button>
                <Button hgap={10} handler={() => Toast.hide()}>Hide Toast</Button>
            </CenterLayout>
            <CardLayout defaultShowKey={state.defaultShowKey}>
                <ButtonDemo key='1'></ButtonDemo>
                <LabelDemo key='2'></LabelDemo>
                <TreeDemo key='3'></TreeDemo>
                <GridDemo key='4'></GridDemo>
                <ComboDemo key="5"></ComboDemo>
            </CardLayout>
        </VerticalLayout>
    }
}
export default App
