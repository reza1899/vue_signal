<template>
  <div>
      <panelLayout>

          <div class="container-fluid">
              <div>
                  <waveForm :value="82"/>
              </div>
          </div>
      </panelLayout>
  </div>
</template>

<script>
import waveForm from '@/components/panel/waveform/newWave.vue'
import  panelLayout from '@/layout/userPanel.vue'
export default {
    name : "userDashboard",
    components:{
        waveForm,
        panelLayout

    }
}
</script>

<style>

</style>