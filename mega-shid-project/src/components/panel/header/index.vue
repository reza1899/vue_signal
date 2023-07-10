<template>
    <div>
        <nav class="navbar navbar-light m-4 rounded-3 " style="background-color: #e3f2fd;">
            <div class="container-fluid row m-0 d-flex flex-row">
                <div class="col-4 col-md-2 p-0 ">
                    <panelMenu/>
                </div>
                <div class="col-4 col-md-5  text-end">
                    <a class="navbar-brand" href="#">
                        <img class="img-fluid" src="https://trello.com/1/cards/64a9974db79f1ef23ec2dd61/attachments/64a9974db79f1ef23ec2dd82/previews/64a9974eb79f1ef23ec2ddd9/download/mega.jpeg.png" alt="mega">
                    </a>
                </div>
                <div class="col-4 col-md-4  text-start ">
                    <b> {{ full_name }}   :  نام کاربری</b>
                    <i class="fas fa-user-alt me-2"></i>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import panelMenu from '@/components/panel/menu/index.vue'
export default {
    name: 'panelHeader',
    components: {
      panelMenu
    },
    computed: {
        full_name() {
            return this.$store.state.user_data.full_name
        },

    }
}
</script>
<style scoped>
button {
    border: 2px solid #9AC5F4;
    color: #2c3e50;
}
button:hover {
    background-color: #9AC5F4;
}
img {
    width: 200px;
    height: 50px;
}
</style>
