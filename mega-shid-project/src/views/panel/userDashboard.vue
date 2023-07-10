<template>
  <div>
    <PanelHeader/>
      <div class="container-fluid">
          <div>
              <waveForm :value="82"/>
          </div>
      </div>
  </div>
</template>

<script>
import PanelHeader from "@/components/panel/header";
import waveForm from '@/components/panel/waveform/newWave.vue'
export default {
    name : "userDashboard",
    components:{
        PanelHeader,
        waveForm

    }
}
</script>

<style>

</style>