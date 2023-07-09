<template>
    <div>
            <div class="split right">
                <div>
                    <div class="border-base position-absolute top-50 start-50 translate-middle p-3  w-50" >
                        <form>
                                <p class="text-end mt-2">User Name</p>
                                <input  v-model="userInfo.userName" type="text" class="form-control" aria-describedby="passwordHelpBlock">



                                <p class="text-end mt-2">Password</p>
                                <input  v-model="userInfo.password" type="password" class="form-control" aria-describedby="passwordHelpBlock">


                                <a class="text-end d-block " href="/register">هنوزثبت نام نکرده اید؟</a>

                            <div class="d-flex mt-4 justify-content-between">
                                <button @click="login" type="submit" class="btn">ثبت</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="split left">
                <img style="border-radius: 5px;box-shadow: #2c3e50 0px 0px 15px;" class="w-100 h-100"  src="../../assets/wave2.jpg" alt="sea">
            </div>

        </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            userInfo: {
                userName: '',
                password: '',
            }
        }
    },
  methods: {
    login(event) {
        event.preventDefault();
      // this.axios.post('' ,this.userInfo).then((response) => {
      //   console.log(response)
      //     alert('ورود با موفقیت انجام شد')
      //     this.$router.push('/')
      // }).catch((error) => {
      //   console.log(error)
      //     alert('ورود با مشکل مواجه شد')
      // })
      //   this.$router.push('/')
        console.log(this.userInfo)
        this.$router.push('/')
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