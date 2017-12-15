import React, {Component} from 'react'
import HorizontalLayout from "../../src/core/layout/HorizontalLayout";
import CenterLayout from "../../src/core/layout/center/CenterLayout";

export default class HorizontalLayoutDemo extends Component {
    render() {
        return (
            <HorizontalLayout>
                <CenterLayout className='bg1' width={ 100 } height={ 50 }>Left 1</CenterLayout>
                <CenterLayout className='bg2' width={ 100 } height={ 50 }>Left 2</CenterLayout>
                <CenterLayout className='bg3' width={ 100 } height={ 50 }>Left 3</CenterLayout>
                <CenterLayout className='bg4' width={ 100 } height={ 50 }>Left 4</CenterLayout>
                <CenterLayout className='bg5' width={ 100 } height={ 50 }>Left 5</CenterLayout>
            </HorizontalLayout>
        );
    }
}
