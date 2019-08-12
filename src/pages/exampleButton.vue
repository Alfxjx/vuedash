<template>
  <div class="buttons">
    <span>content="1111"</span>
    <dash-button content="1111"></dash-button>
    <span>size="large"</span>
    <dash-button size="large"></dash-button>
    <span>size="mid"</span>
    <dash-button size="mid"></dash-button>
    <span>size="small"</span>
    <dash-button size="small"></dash-button>
    <span>type="primary"</span>
    <dash-button type="primary"></dash-button>
    <span>"disabled"</span>
    <dash-button disabled content="disabled"></dash-button>
    <span>type="round""</span>
    <dash-button type="round" content="ico"></dash-button>
    <span>radius="18px"</span>
    <dash-button radius="18px"></dash-button>
    <span>slot</span>
    <dash-button>
      <em>this is slot</em>
    </dash-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.buttons{
  display: flex;
  flex-direction: column;
  > *{
    margin: 5px;
  }
}
</style>
