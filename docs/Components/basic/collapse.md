# 伸缩框 Collapse

[在线演示]()

## 用法

```html
<dash-collapse accordion>
  <dash-collapse-item name="1">
    123
  </dash-collapse-item>
  <dash-collapse-item name="2" disabled>
    123
  </dash-collapse-item>
  <dash-collapse-item name="3">
    123
  </dash-collapse-item>
</dash-collapse>
```

## API

|Api|type|说明|
|----|---|---|
|name|string,number| 标题 |
|disabled|boolean|是否不可点击|
|accordion|boolean|手风琴模式|