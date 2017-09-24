import React, {Component} from 'react'
import VerticalLayout from "../../src/core/layout/VerticalLayout";
import CenterLayout from "../../src/core/layout/center/CenterLayout";

export default class VerticalLayoutDemo extends Component {
    render() {
        return (
            <VerticalLayout>
                <CenterLayout className='bg1' width={ 100 } height={ 50 }>Left 1</CenterLayout>
                <CenterLayout className='bg2' width={ 100 } height={ 50 }>Left 2</CenterLayout>
                <CenterLayout className='bg3' width={ 100 } height={ 50 }>Left 3</CenterLayout>
                <CenterLayout className='bg4' width={ 100 } height={ 50 }>Left 4</CenterLayout>
                <CenterLayout className='bg5' width={ 100 } height={ 50 }>Left 5</CenterLayout>
            </VerticalLayout>
        );
    }
}
