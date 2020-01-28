<template>
  <div class="nav-wrapper">
    <div class="money">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.money {
  overflow: auto;
  flex-grow: 1;
}
</style>