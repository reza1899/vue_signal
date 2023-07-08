<template>
  <div class="home">
    <Header />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/index.vue";
import Footer from "@/components/footer/index.vue";
export default {
  name: 'HomeView',
  components: {
      Header,
      Footer
  }
}
</script>
