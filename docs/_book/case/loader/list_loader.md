# bi.list_loader

### 为解决排序问题引入的控件

{% method %}
[source](https://jsfiddle.net/fineui/8wa7rvcd/)

{% common %}
```javascript

BI.createWidget({
    type: "bi.list_loader",
    width: 100,
    element: 'body',
    items: items,
});

```

{% endmethod %}

### 参数

| 参数           | 说明     | 类型       | 默认值        |
| ------------ | ------ | -------- | ---------- |
| count        | 分页计数   | number   | false      |
| next         |        | object   | {}         |
| hasNext      | 是否有下一页 | function | BI.emptyFn |
| items        | 子项     | array    | []         |
| itemsCreator | 元素创造器  | function | BI.emptyFn |
| onLoaded     | 加载完成回调 | function | BI.emptyFn |

### 方法

| 方法名                   | 说明         | 参数    |
| --------------------- | ---------- | ----- |
| hasNext               | 是否有下一页     | —     |
| addItems              | 列表最后添加元素   | items |
| setValue              | 设置值        | data  |
| getVlaue              | 获得值        | —     |
| populate              | 替换内容       | items |
| resetHeight           | 重新设置高度     | h     |
| setNotSelectedValue   | 设置未选中值     | —     |
| getNotSelectedValue   | 获取未选中植     | —     |
| getAllButtons         | 获得所以根节点    | —     |
| getAllLeaves          | 获得所有叶节点    | —     |
| getSelectedButtons    | 获取选中的根节点   | —     |
| getNotSelectedButtons | 获取未选中的根节点  | —     |
| getIndexByValue       | 根据值获取索引    | value |
| getNodeById           | 根据id获取node | id    |
| getNodeByValue        | 根据值获取node  | value |

------