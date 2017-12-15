import React, {Component} from 'react'
import VerticalAdaptLayout from "../../src/core/layout/adapt/VerticalAdaptLayout";
import CenterLayout from "../../src/core/layout/center/CenterLayout";

export default class VerticalAdaptLayoutDemo extends Component {
    render() {
        return (
            <VerticalAdaptLayout>
                <VerticalAdaptLayout.Item height={ 30 }>
                    <CenterLayout className='bg1'>垂直自适应 1</CenterLayout>
                </VerticalAdaptLayout.Item>
                <VerticalAdaptLayout.Item height={ 30 }>
                    <CenterLayout className='bg2'>垂直自适应 2</CenterLayout>
                </VerticalAdaptLayout.Item>
                <VerticalAdaptLayout.Item height={ 30 }>
                    <CenterLayout className='bg3'>垂直自适应 3</CenterLayout>
                </VerticalAdaptLayout.Item>
                <VerticalAdaptLayout.Item height={ 30 }>
                    <CenterLayout className='bg4'>垂直自适应 4</CenterLayout>
                </VerticalAdaptLayout.Item>
                <VerticalAdaptLayout.Item>
                    <CenterLayout className='bg5'>垂直自适应 5</CenterLayout>
                </VerticalAdaptLayout.Item>
            </VerticalAdaptLayout>
        );
    }
}
