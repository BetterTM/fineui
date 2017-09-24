import React, {Component} from 'react'
import CenterLayout from "../../src/core/layout/center/CenterLayout";
import GridLayout from "../../src/core/layout/grid/GridLayout";
import Row from "../../src/core/layout/grid/Row";
import Col from "../../src/core/layout/grid/Col";

export default class GridLayoutDemo extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {

        const mockData = {
            rows: 2,
            columns: 3,
            items: [
                {
                    row: 0,
                    column: 0,
                    el: <CenterLayout className='bg1'>Grid1</CenterLayout>
                }, {
                    row: 0,
                    column: 1,
                    el: <CenterLayout className='bg2'>Grid2</CenterLayout>
                }, {
                    row: 1,
                    column: 0,
                    el: <CenterLayout className='bg3'>Grid3</CenterLayout>
                }, {
                    row: 1,
                    column: 1,
                    el: <CenterLayout className='bg4'>Grid4</CenterLayout>
                }, {
                    row: 1,
                    column: 2,
                    el: <CenterLayout className='bg5'>Grid5</CenterLayout>
                }
            ]
        }


        return <GridLayout {...mockData}>
        </GridLayout>
    }
}

