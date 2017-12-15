import React, {Component} from 'react'
import RightLayout from "../../src/core/layout/flow/RightLayout";
import CenterLayout from "../../src/core/layout/center/CenterLayout";

export default class RightLayoutDemo extends Component {
    render() {
        return (
            <RightLayout>
                <CenterLayout className='bg1' width={ 100 } height={ 50 }>Right 1</CenterLayout>
                <CenterLayout className='bg2' width={ 100 } height={ 50 }>Right 2</CenterLayout>
                <CenterLayout className='bg3' width={ 100 } height={ 50 }>Right 3</CenterLayout>
                <CenterLayout className='bg4' width={ 100 } height={ 50 }>Right 4</CenterLayout>
                <CenterLayout className='bg5' width={ 100 } height={ 50 }>Right 5</CenterLayout>
            </RightLayout>
        );
    }
}
