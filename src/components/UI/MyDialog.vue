<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">

    <div @click.stop class="dialog__content">

      <slot></slot>

    </div>
    
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'

export default {
  name: 'my-dialog',
  mixins: [toggleMixin],
  mounted() {
    console.log('dialog');
  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
}

.dialog__content {
  padding: 20px;
  margin: auto;
  background-color: white;
  border-radius: 10px;
  min-width: 300px;
  min-height: 250px;
}
</style>