<template>
    <div>
        <div onclick="" class="main_div">
            <div class="main_btn btn btn-primary" @click="open_menu()">
                <i class="fas fa-bars"></i>
            </div>
            <div style="background-color: #e3f2fd; width: 260px" class="menu_div" v-if="show_menu">
                <!-- menu item -->
                <div class="menu_item border-bottom" v-for="item in menu_items"
                     :key="item.text" @click="click_item(item)">
                    <i class="mx-2 fs-5" :class="item.icon" v-if="item.icon !== ''"></i>
                    <span>{{ item.text }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "panelMenu",
    data() {
        return {
            menu_items: [
                {
                    text: "داشبورد",
                    link: "/dashboard",
                    icon: "fas fa-shapes",
                },
                {
                    text: "حساب کاربری",
                    link: "/profile",
                    icon: "fas fa-user",
                },
                {
                    text: "خروج",
                    link: "/",
                    icon: "fa fa-power-off",
                },
            ],
            show_menu: false,
        }
    },
    methods: {
        open_menu() {
            this.show_menu = !this.show_menu;
            if (this.show_menu) {
                document.addEventListener('click', this.close_menu);
            } else {
                document.removeEventListener('click', this.close_menu);
            }
        },
        close_menu(event) {
            if (!this.$el.contains(event.target)) {
                this.show_menu = false;
                document.removeEventListener('click', this.close_menu);
            }
        },
        click_item(item) {
            this.show_menu = false;
            document.removeEventListener('click', this.close_menu);
            this.$router.push(item.link);
            if (item.text === "خروج") {
                this.$store.dispatch("logout");
            }
        }
    }
}
</script>
<style scoped>
.menu_item:hover {
    background-color: #3b5998;
}

.menu_item.active {
    background-color: #b3d8ff;
}
.main_div {
    /*  */
}

/*.main_btn {*/
/*    !*  *!*/
/*    position: fixed;*/
/*    top: 15px;*/
/*    right: 15px;*/
/*    z-index: 99;*/
/*}*/

.menu_div {
    /*  */
    position: fixed;
    top: 80px;
    right: 15px;
    left: 83%;


    text-align: right;
    padding: 20px;
    box-shadow: 0px 0px 5px blue;
    border-radius: 5px;

    background: white;
    z-index: 99;
}

.menu_item {
    transition: all 0.3s ease-in-out;
    color: black;
    padding: 15px;
    display: block;
    text-decoration: none;
    cursor: pointer;
}

/*@media only screen and (max-width: 500px) {*/
/*    .main_btn {*/
/*        position: fixed;*/
/*        top: 15px;*/
/*        right: 15px;*/
/*        z-index: 99;*/
/*    }*/

    .menu_div {
        position: fixed;
        top: 80px;
        right: 30px;
        left: 10%;

        text-align: right;
        padding: 20px;
        box-shadow: 0px 0px 5px black;
        border-radius: 5px;
        background: white;
        z-index: 99;
    }
/*}*/

/*@media only screen and (min-width: 500px) and (max-width: 990px) {*/
/*    .main_btn {*/
/*        position: fixed;*/
/*        top: 15px;*/
/*        right: 15px;*/
/*        z-index: 99;*/
/*    }*/

    .menu_div {
        position: fixed;
        top: 80px;
        right: 25px;
        left: 50%;

        text-align: right;
        padding: 20px;
        box-shadow: 0px 0px 5px black;
        border-radius: 5px;
        background: white;
        z-index: 99;
    }
/*}*/
</style>