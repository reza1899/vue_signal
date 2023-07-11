<template>
  <div>
<!--header-->
      <div>
          <panelHeader/>
      </div>
<!--main-->
   <div class="m-5">
       <slot></slot>
   </div>
<!--footer-->
    <div>
        <footerApp/>
    </div>
  </div>
</template>

<script>
import panelHeader from '@/components/panel/header/index.vue'
import footerApp from '@/components/footer/index.vue'
export default {
  name: "panelLayout",
    components: {
      panelHeader,
        footerApp
    }
}
</script>
<style>

</style>