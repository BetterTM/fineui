import React, {Component} from 'react'
import LeftLayout from "../../src/core/layout/flow/LeftLayout";
import CenterLayout from "../../src/core/layout/center/CenterLayout";

export default class LeftLayoutDemo extends Component {
    render() {
        return (
            <LeftLayout>
                <CenterLayout className='bg1' width={ 100 } height={ 50 }>Left 1</CenterLayout>
                <CenterLayout className='bg2' width={ 100 } height={ 50 }>Left 2</CenterLayout>
                <CenterLayout className='bg3' width={ 100 } height={ 50 }>Left 3</CenterLayout>
                <CenterLayout className='bg4' width={ 100 } height={ 50 }>Left 4</CenterLayout>
                <CenterLayout className='bg5' width={ 100 } height={ 50 }>Left 5</CenterLayout>
                <CenterLayout className='bg1' width={ 100 } height={ 50 }>Left 6</CenterLayout>
                <CenterLayout className='bg2' width={ 100 } height={ 50 }>Left 7</CenterLayout>
                <CenterLayout className='bg3' width={ 100 } height={ 50 }>Left 8</CenterLayout>
                <CenterLayout className='bg4' width={ 100 } height={ 50 }>Left 9</CenterLayout>
                <CenterLayout className='bg5' width={ 100 } height={ 50 }>Left 10</CenterLayout>
                <CenterLayout className='bg1' width={ 100 } height={ 50 }>Left 11</CenterLayout>
                <CenterLayout className='bg2' width={ 100 } height={ 50 }>Left 12</CenterLayout>
                <CenterLayout className='bg3' width={ 100 } height={ 50 }>Left 13</CenterLayout>
                <CenterLayout className='bg4' width={ 100 } height={ 50 }>Left 14</CenterLayout>
                <CenterLayout className='bg5' width={ 100 } height={ 50 }>Left 15</CenterLayout>
                <CenterLayout className='bg1' width={ 100 } height={ 50 }>Left 16</CenterLayout>
                <CenterLayout className='bg2' width={ 100 } height={ 50 }>Left 17</CenterLayout>
                <CenterLayout className='bg3' width={ 100 } height={ 50 }>Left 18</CenterLayout>
                <CenterLayout className='bg4' width={ 100 } height={ 50 }>Left 19</CenterLayout>
                <CenterLayout className='bg5' width={ 100 } height={ 50 }>Left 20</CenterLayout>
            </LeftLayout>
        );
    }
}
