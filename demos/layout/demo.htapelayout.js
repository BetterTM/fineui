import React, {Component} from 'react'
import HtapeLayout from "../../src/core/layout/tape/HtapeLayout";
import CenterLayout from "../../src/core/layout/center/CenterLayout";

const Item = HtapeLayout.Item

export default class HtapeLayoutDemo extends Component {
    render() {
        return (
            <HtapeLayout>
                <Item width={ 100 }>
                    <CenterLayout className='bg1' width={ 100 }>Htape 1</CenterLayout>
                </Item>
                <Item width={ 100 }>
                    <CenterLayout className='bg2' width={ 100 }>Htape 2</CenterLayout>
                </Item>
                <Item width={ 100 }>
                    <CenterLayout className='bg3' width={ 100 }>Htape 3</CenterLayout>
                </Item>
                <Item width={ 100 }>
                    <CenterLayout className='bg4' width={ 100 }>Htape 4</CenterLayout>
                </Item>
                <Item>
                    <CenterLayout className='bg5' width={ 100 }>Htape 5 fill</CenterLayout>
                </Item>
            </HtapeLayout>
        );
    }
}
