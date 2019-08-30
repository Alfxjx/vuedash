<template>
  <div class="popup-wrapper">
    <transition name="slide-in" :enter-active-class="enterClass" :leave-active-class="leaveClass">
      <div class="actionsheet" :class="position" v-show="visible" ref="position">
        <slot></slot>
      </div>
    </transition>
    <div class="mask" :class="{'show':visible,'zIndex':!visible}" @click="clearMask"></div>
  </div>
</template>

<script lang="js">
export default {
  name: 'dash-popup',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    container: {
      type: String,
      default: '#app'
    },
    position: {
      type: String,
      default: 't2b'
    }
  },
  computed: {
    enterClass() {
      return `slide-in-${this.position}`;
    },
    leaveClass() {
      return `slide-in-${this.position}-reverse`;
    }
  },
  mounted() {
    // this._getContainer()
  },
  methods: {
    clearMask() {
      if (!this.visble) {
        this.$emit('update:visible', false);
      }
    }
  }
}
</script>

<style scoped lang="less">
.popup-wrapper {
  .actionsheet {
    position: absolute;
    background: #fff;
    opacity: 1;
    z-index: 99999;
    min-width: 20px;
    min-height: 50px;
    &.t2b {
      top: 0;
      width: 100%;
    }
    &.b2t {
      bottom: 0;
      width: 100%;
    }
    &.l2r {
      left: 0;
      top: 0;
      bottom: 0;
    }
    &.r2l {
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
  .mask {
    background: #000;
    opacity: 0.2;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    // position: fixed;
    // TODO
    transition: opacity 200ms linear;
    &.show {
      z-index: 9;
    }
    &.zIndex {
      z-index: -1;
      opacity: 0;
    }
  }
}
.slide-in-t2b {
  animation: slide-in-t2b 0.4s;
}
.slide-in-t2b-reverse {
  animation: slide-in-t2b 0.4s reverse;
}
@keyframes slide-in-t2b {
  0% {
    transform: translate(0, -100%);
  }
  25% {
    transform: translate(0, -75%);
  }
  50% {
    transform: translate(0, -50%);
  }
  75% {
    transform: translate(0, -25%);
  }
  100% {
    transform: translate(0, 0);
  }
}

.slide-in-b2t {
  animation: slide-in-b2t 0.4s;
}
.slide-in-b2t-reverse {
  animation: slide-in-b2t 0.4s reverse;
}
@keyframes slide-in-b2t {
  0% {
    transform: translate(0, 100%);
  }
  25% {
    transform: translate(0, 75%);
  }
  50% {
    transform: translate(0, 50%);
  }
  75% {
    transform: translate(0, 25%);
  }
  100% {
    transform: translate(0, 0);
  }
}
.slide-in-l2r {
  animation: slide-in-l2r 0.4s;
}
.slide-in-l2r-reverse {
  animation: slide-in-l2r 0.4s reverse;
}
@keyframes slide-in-l2r {
  0% {
    transform: translate(-100%, 0);
  }
  25% {
    transform: translate(-75%, 0);
  }
  50% {
    transform: translate(-50%, 0);
  }
  75% {
    transform: translate(-25%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.slide-in-r2l {
  animation: slide-in-r2l 0.4s;
}
.slide-in-r2l-reverse {
  animation: slide-in-r2l 0.4s reverse;
}
@keyframes slide-in-r2l {
  0% {
    transform: translate(100%, 0);
  }
  25% {
    transform: translate(75%, 0);
  }
  50% {
    transform: translate(50%, 0);
  }
  75% {
    transform: translate(25%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
