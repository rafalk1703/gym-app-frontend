<script setup>
defineProps({
  title: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="title-component">{{title}}</div>
</template>

<style scoped lang="scss">
.title-component{
  width: max-content;
  padding: 24px 16px;
  background: #202020;
  border: 1px solid #626262;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 32px;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #FFFFFF;
}
</style>