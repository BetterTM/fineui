import React, {Component} from 'react'
import VerticalLayout from "../../src/core/layout/VerticalLayout";
import HorizontalAdaptLayout from "../../src/core/layout/adapt/HorizontalAdaptLayout";
import CenterLayout from "../../src/core/layout/center/CenterLayout";

export default class HorizontalAdaptLayoutDemo extends Component {
    render() {
        return (
            <VerticalLayout>
                <HorizontalAdaptLayout>
                    <HorizontalAdaptLayout.Item width={ 150 }>
                        <CenterLayout className='bg1'>水平自适应 1</CenterLayout>
                    </HorizontalAdaptLayout.Item>
                    <HorizontalAdaptLayout.Item width={ 150 }>
                        <CenterLayout className='bg2'>水平自适应 2</CenterLayout>
                    </HorizontalAdaptLayout.Item>
                    <HorizontalAdaptLayout.Item width={ 150 }>
                        <CenterLayout className='bg3'>水平自适应 3</CenterLayout>
                    </HorizontalAdaptLayout.Item>
                    <HorizontalAdaptLayout.Item width={ 150 }>
                        <CenterLayout className='bg4'>水平自适应 4</CenterLayout>
                    </HorizontalAdaptLayout.Item>
                    <HorizontalAdaptLayout.Item>
                        <CenterLayout className='bg5'>水平自适应 fill 5</CenterLayout>
                    </HorizontalAdaptLayout.Item>
                </HorizontalAdaptLayout>
            </VerticalLayout>
        );
    }
}
