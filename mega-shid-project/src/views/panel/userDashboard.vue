<template>
  <div>
      <panelLayout>

          <div class="container-fluid">
              <div>
                  <newWave :value="82"/>
              </div>
          </div>
<!--          <div class="card" style="width: 18rem;">-->
<!--              <img  class="card-img-top" alt="...">-->
<!--              <div class="card-body">-->
<!--                  <h5 class="card-title">Card title</h5>-->
<!--                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
<!--                  <a href="#" class="btn btn-primary">Go somewhere</a>-->
<!--              </div>-->
<!--          </div>-->

      </panelLayout>
  </div>
</template>

<script>
import newWave from '@/components/panel/waveform/newWave.vue'
import  panelLayout from '@/layout/userPanel.vue'
export default {
    name : "userDashboard",
    components:{
        newWave,
        panelLayout
    },
    data(){
        const products = [
            {
                id: 1,
                name: 'Earthen Bottle',
                href: '#',
                price: '$48',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
                imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
            },
            {
                id: 2,
                name: 'Nomad Tumbler',
                href: '#',
                price: '$35',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
                imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
                id: 3,
                name: 'Focus Paper Refill',
                href: '#',
                price: '$89',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
                imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            },
            {
                id: 4,
                name: 'Machined Mechanical Pencil',
                href: '#',
                price: '$35',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
                imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
            },
            // More products...
        ]
        return{
            products
        }
    }
}
</script>

<style>

</style>