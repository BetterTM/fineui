# bi.single

## 这仅仅只是一个超类, 所有简单控件的基类,title的控制,文字超过边界显示3个点,基类[BI.Widget](/core/widget.md)


## API
##### 基础属性
| 参数    | 说明           | 类型  | 可选值 | 默认值
| :------ |:-------------  | :-----| :----|:----
| readonly | 是否只读 | boolean |  true,false| false |
| title | title | string |— | null |
| warningTitle | 错误title | string | —| null|
| tipType | title类型 | string | success,warning | null |
| value | value值 | string |— | null |



## 对外方法
| 名称     | 说明                           |  回调参数     
| :------ |:-------------                  | :-----   
| enableHover | 恢复hover可用| opt |
| disabledHover | 取消hover事件 | —|
| populate | 刷新或者清空列表 | items |
| setTitle | 设置title| title,opt |
| setWarningTitle | 设置错误title | title,opt|
| getTipType | 获取tipType|—|
| isReadOnly | 是否只读| —|
| getTitle | 获取title|—|
| getWarningTitle | 获取warningTitle| —|
| setValue | 设置value值| value|
| getValue| 获取value值| —|





---


