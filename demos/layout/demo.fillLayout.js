import React, {Component} from 'react'
import FillLayout from "../../src/core/layout/fill/FillLayout";
import CenterLayout from "../../src/core/layout/center/CenterLayout";

export default class FillLayoutDemo extends Component {
    render() {
        return (
            <FillLayout>
                <CenterLayout className='bg1'>fill布局,使子元素撑满父元素.</CenterLayout>
            </FillLayout>
        );
    }
}
