<template>
  <div class="main">
    <p>{{date|formatDate('yyyy/MM/dd')}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      date: new Date()
    }
  }
};
</script>

<style lang="less" scoped>
.main {
}
</style>
