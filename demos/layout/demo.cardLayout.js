import React, {Component} from 'react'
import CenterLayout from "../../src/core/layout/center/CenterLayout";

export default class CardLayoutDemo extends Component {
    render() {
        return (
            <CenterLayout vgap={ 20 } hgap={ 20 }>
                整个demo的切换用的就是card布局
            </CenterLayout>
        );
    }
}
