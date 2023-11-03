<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh;">
      <a-layout-header class="header">
        <GlobalHeader />
        
      </a-layout-header>
      <a-layout-content class="countent">
        内容
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">

        <a href="" target="my website" class="footer-link">我的gitee网站</a>

      </a-layout-footer>
    </a-layout>
    <router-view />
  </div>
</template>

<script setup>

import GlobalHeader from "/src/components/GlobalHeader.vue";


</script>
<style scoped>
.header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

.countent {
}

.footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;

}
</style>