import React, { Component } from 'react'
import { Layout, CenterLayout, HorizontalLayout, VerticalLayout, VerticalCenterLayout } from '../../core/layout'
import Label from '../../base/single/label'
import TreeView from './TreeView'

import filter from 'lodash/filter'
import forEach from 'lodash/forEach'
import some from 'lodash/some'
import uniq from 'lodash/uniq'
import find from 'lodash/find'
import { UUID } from '../../utils'

export default class Tree extends Component {

    constructor(props) {
        super(props)
    }

    static defaultProps = {
        nodes: []
    }

    handler = (id) => {
        let target = find(this.props.nodes, (value) => {
            return value.id === id
        })
        this.props.handler(target)
        this.activeNode = id
    }

    initTree = (id, depth) => {
        const nodes = this.props.nodes
        let childrenNode = []
        let current = null
        forEach(nodes, (value) => {
            if (value.id === id) {
                current = value
            }
            if (value.pid === id) { //找到属于 id 的子孙,递归向下生成
                this.counter++
                childrenNode.push(this.initTree(value.id, depth + 1))
            }
        })

        let itemClicked = () => {
            this.handler(id)
        }

        let content = ''
        let item = null
        if (current) {
            content = current.text
            //树的 item部分,愿意写什么写什么,加上 checkbox 就变成 muliti 的了,窝不关心
            item = <CenterLayout>
                     <Label>
                       { content }
                     </Label>
                   </CenterLayout>
        }


        return <TreeView key={ UUID() } active={ id === this.activeNode } item={ item } depth={ depth } handler={ itemClicked } open={ (current && current.open === false) ? false : true }>
                 { childrenNode.length > 0 ? childrenNode : null }
               </TreeView>
    }

    render() {

        const data = this.props.nodes
        //找到所有根节点,没 pid 的(设为-1)或者有 pid 但找不到 id===pid的节点,其实最好是强制根节点必须设 pid=-1,这样很方便
        forEach(data, (value) => {
            if (!value.pid) {
                value.pid = -1
            }
        })
        let rootArry = filter(data, (value) => {
            return !some(data, (item) => item.id === value.pid)
        })
        //提取公共 pid并去重
        let root = uniq(rootArry.map(((value) => {
            return value.pid
        })))

        return <Layout>
                 { root.map((value) => {
                       return this.initTree(value, 0)
                   }) }
               </Layout>
    }
}