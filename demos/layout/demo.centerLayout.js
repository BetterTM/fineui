import React, {Component} from 'react'
import CenterLayout from "../../src/core/layout/center/CenterLayout";

export default class CenterLayoutDemo extends Component {
    render() {
        return (
            <CenterLayout vgap={ 20 } hgap={ 20 }>
                <CenterLayout className='bg1' height={ 50 }>居中布局,水平和垂直方向居中,为了看着更明显一点,窝给外边加个边框吧</CenterLayout>
            </CenterLayout>
        );
    }
}
