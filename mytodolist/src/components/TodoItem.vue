<template>
<li class="item" @click="handleDelete">{{content}}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    handleDelete () {
      // alert(this.index)
      this.$emit('delete', this.index)
    }
  }
}
</script>

// scoped代表作用域，只会对本地作用域起效果
<style scoped>
  .item {
    color: green;
  }
</style>
