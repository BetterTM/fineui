import React, {Component} from 'react'
import VerticalCenterLayout from "../../src/core/layout/center/VerticalCenterLayout";
import CenterLayout from "../../src/core/layout/center/CenterLayout";

export default class VerticalCenterLayoutDemo extends Component {
    render() {
        return (
            <VerticalCenterLayout>
                <CenterLayout className='bg1' width={ 100 } height={ 50 }>垂直居中 1</CenterLayout>
                <CenterLayout className='bg2' width={ 100 } height={ 50 }>垂直居中 2</CenterLayout>
                <CenterLayout className='bg3' width={ 100 } height={ 50 }>垂直居中 3</CenterLayout>
                <CenterLayout className='bg4' width={ 100 } height={ 50 }>垂直居中 4</CenterLayout>
                <CenterLayout className='bg5' width={ 100 } height={ 50 }>垂直居中 5</CenterLayout>
            </VerticalCenterLayout>
        );
    }
}
