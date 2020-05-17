<template>
  <div id="Prifile">
    <nav-bar class="prifile-nav">
      <div slot="center" class="title">我的档案</div>
    </nav-bar>
    <div>11</div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Prifile',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.prifile-nav {
  background-color: var(--color-tint);
}
.title {
  color: #ffffff;
  font-weight: 700;
}
</style>
