<template>
  <div class="collapse">
    <span>手风琴效果</span>
    <dash-collapse accordion>
      <dash-collapse-item name='1'>
        123
      </dash-collapse-item>
      <dash-collapse-item name='2'>
        123
      </dash-collapse-item>
      <dash-collapse-item name='3'>
        123
      </dash-collapse-item>
    </dash-collapse>

    <span>disabled</span>
    <dash-collapse>
      <dash-collapse-item name='2' disabled>
        123
      </dash-collapse-item>
    </dash-collapse>

    <dash-collapse>
      <dash-collapse-item name='3'>
        123
      </dash-collapse-item>
    </dash-collapse>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.collapse{
  // margin-top: 2em;
  width: 500px;
}
</style>
