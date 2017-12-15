import React, {Component} from 'react'
import VtapeLayout from "../../src/core/layout/tape/VtapeLayout";
import CenterLayout from "../../src/core/layout/center/CenterLayout";

const Item = VtapeLayout.Item

export default class VtapeLayoutDemo extends Component {
    render() {
        return (
            <VtapeLayout>
                <Item height={ 50 }>
                    <CenterLayout className='bg1' width={ 100 }>Vtape 1</CenterLayout>
                </Item>
                <Item height={ 50 }>
                    <CenterLayout className='bg2' width={ 100 }>Vtape 2</CenterLayout>
                </Item>
                <Item height={ 50 }>
                    <CenterLayout className='bg3' width={ 100 }>Vtape 3</CenterLayout>
                </Item>
                <Item height={ 50 }>
                    <CenterLayout className='bg4' width={ 100 }>Vtape 4</CenterLayout>
                </Item>
                <Item>
                    <CenterLayout className='bg6' width={ 100 }>Vtape fill 5</CenterLayout>
                </Item>
            </VtapeLayout>
        );
    }
}
