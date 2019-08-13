# 弹窗 Popup

在线演示

##用法

```html
<dash-popup :visible.sync="showPop" position="r2l">
  <h2>1234</h2>
</dash-popup>
```

```js
export default {
  data(){
    return{
      showPop: false
    }
  }
}

```

## API

|Api|type|说明|
|----|---|---|
|visible.sync|boolean|是否显示弹出框|
|position|string|从左(l)右(r)到(2)上(t)下(b)|