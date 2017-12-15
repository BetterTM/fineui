import React, {Component} from 'react'
import HorizontalCenterLayout from "../../src/core/layout/center/HorizontalCenterLayout";
import CenterLayout from "../../src/core/layout/center/CenterLayout";

export default class HorizontalCenterLayoutDemo extends Component {
    render() {
        return (
            <HorizontalCenterLayout>
                <CenterLayout className='bg1' width={ 100 } height={ 50 }>水平居中 1</CenterLayout>
                <CenterLayout className='bg2' width={ 100 } height={ 50 }>水平居中 2</CenterLayout>
                <CenterLayout className='bg3' width={ 100 } height={ 50 }>水平居中 3</CenterLayout>
                <CenterLayout className='bg4' width={ 100 } height={ 50 }>水平居中 4</CenterLayout>
                <CenterLayout className='bg5' width={ 100 } height={ 50 }>水平居中 5</CenterLayout>
            </HorizontalCenterLayout>
        );
    }
}
