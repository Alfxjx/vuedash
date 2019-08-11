# 按钮组件

[在线演示]()

## 用法

```html
<dash-button 
  type="primary"
  size="mid"
  radius=“18px”
  disabled
  @click="hanldeClick"
>
  <em>this is slot</em>
</dash-button>
```

```js
export default {
  methods: {
    handleClick(e){
      // e 是点击事件。
      console.log(e);
    }
  }
}
```

## 按钮的API

|Api|type|说明|
|----|---|---|
|type| string|类型，目前包括primary，round|
|size| string|尺寸，包括large，mid，small|
|radius| string|圆角，输入为8px or 20%;|
|disabled| boolean| 是否不可点击|
|click|function|绑定的点击事件。|
