<template>
  <div class="MainNavigation_Wrapper">
    <h1 class="MainNavigation_Title">TODO LIST</h1>
    <div class="MainNavigation_IconBox">
      <i class="fas fa-file-signature fa-2x"></i>
      <i class="fas fa-user-check fa-2x"></i>
      <i class="fas fa-user-edit fa-2x"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:'MainNavigation'
}
</script>

<style>
.MainNavigation_Wrapper {
  display: flex;
}

h1 {
  font-size: 2.3rem;
  font-weight: 700;
  margin: 1.8rem 0 0 0;
  color: #2f3542;
  font-family: 'Righteous', cursive;
}

.MainNavigation_Title {
  flex: 2;
}

.MainNavigation_IconBox {
  flex: 1.2;
}

.fas {
  margin-top: 2.5rem;
  padding-left: 17px;
  color: #a4b0be;
}

</style>