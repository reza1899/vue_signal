<template>
    <div>
            <div class="split right">
                <div>
                    <div class="border-base position-absolute top-50 start-50 translate-middle p-3  w-50" >
                        <form>
                            <!--          Email                  -->
                                <p class="text-end mt-2">User Name</p>
                                <input  v-model="userInfoLogin.userName" type="text" class="form-control" aria-describedby="passwordHelpBlock">


                                      <!--                Password              -->
                                <p class="text-end mt-2">Password</p>
                                <input  v-model="userInfoLogin.password" type="password" class="form-control" aria-describedby="passwordHelpBlock">

                                                <!-- Patch code-->
                                    <p class="text-end mt-2">code</p>
                                    <input id="code" v-model="this.userInfoLogin.code" type="password" class="form-control" name="code" required>
                                    <img class="border border-dark m-3 p-2 w-50" :src="imgSrc" alt="patch code" />
                                <a class="text-end d-block " href="/register">هنوزثبت نام نکرده اید؟</a>

                            <div class="d-flex mt-4 justify-content-between">
                                <button :disabled="!userInfoLogin.userName || !userInfoLogin.password" @click="login" type="submit" class="btn">ثبت</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="split left">
                <img style="border-radius: 5px;box-shadow: #2c3e50 0px 0px 15px;" class="w-100 h-100"  src="https://trello.com/1/cards/64ab018482d70eac658ba596/attachments/64ab018482d70eac658ba5b8/previews/64ab018582d70eac658ba605/download/signup.png" alt="sea">
            </div>

        </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
    name: 'LoginView',
    data() {
        return {
            userInfoLogin: {
                userName: '',
                password: '',
                code:''
            },
            imgCode: '',
        }
    },
    created() {
        axios.get("http://192.168.1.10:3000/signin").then((response) => {
            console.log(this.imgCode)
            this.imgCode = response.data
            console.log(this.imgCode);
        }).catch((error) => {
            console.log(error)
        })
    },
    computed: {
      imgSrc (){
        return `data:image/jpeg;base64,${this.imgCode}`
      }
    },
    methods: {

       login(event) {
        event.preventDefault();
         axios.post('http://192.168.1.10:3000/signin' ,this.userInfoLogin).then((response) => {
        console.log(response.data)
          alert('ورود با موفقیت انجام شد')
             Cookies.set(this.userInfoLogin.userName, response.data)
             this.$router.push('/')
              this.$store.state.is_logged_in = true
             console.log(this.userInfo)
             if (this.$store.state.role === 'user') {
                 this.$router.push('/dashboard')
             } else if (this.$store.state.role === 'admin') {
                 this.$router.push('/admin')
             }
      }).catch((error) => {
        console.log(error)
          alert('ورود با مشکل مواجه شد')
      })
        }
    }
};
</script>
<style scoped>
button {
    border: 2px solid #9AC5F4;
    color: #2c3e50;
}
button:hover {
    background-color: #9AC5F4;
}
.border-base {
    border: #9AC5F4 1px solid;
}
.split {
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;

}

.left {
    padding: 15px;
    left: 0;
    background-color: #e3f2fd;
}

.right {
    padding: 20px;
    right: 0;
    background-color: #e3f2fd;
}

</style>