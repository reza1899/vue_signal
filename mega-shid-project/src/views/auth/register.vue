<template>
    <div>
        <div class="split right">
            <div class="">
                <div class="border-base position-absolute top-50 start-50 translate-middle p-3 m-auto w-50" >
                    <form>
                        <p class="text-end mt-2">Email</p>
                        <input type="text" v-model="userInfo.email" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
                        <div v-if="errors.email" class="alert alert-danger fs-6 p-0 mt-2 w-50" role="alert">
                            {{ errors.email }} <i class="fas fa-exclamation-triangle"></i>
                        </div>


                        <p class="text-end mt-2">Company Name</p>
                        <input type="text" v-model="userInfo.companyName" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
                        <p class="text-danger text-end fw-bold" v-if="errors.companyName">{{ errors.companyName }}</p>
                        <div v-if="errors.companyName" class="alert alert-danger fs-6 p-0 mt-2 w-75" role="alert">
                            {{ errors.companyName }} <i class="fas fa-exclamation-triangle"></i>
                        </div>

                        <p class="text-end mt-2">نام سازمان</p>
                        <input type="text" v-model="userInfo.companyNameFa" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
                        <div v-if="errors.companyNameFa" class="alert alert-danger fs-6 p-0 mt-2 w-75" role="alert">
                            {{ errors.companyNameFa }} <i class="fas fa-exclamation-triangle"></i>
                        </div>


                        <a class="text-end d-block " href="/login">حساب کاربری دارید؟</a>

                        <div class="d-flex mt-4 justify-content-between">
                            <button :disabled="!userInfo.email || !userInfo.companyName || !userInfo.companyNameFa" @click="register"  type="submit" class="btn">ثبت</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="split left">
            <img style="border-radius: 5px;box-shadow: #2c3e50 0px 0px 15px;" class="w-100 h-100"  src="../../assets/wave4.jpg" alt="sea">
        </div>

    </div>
</template>

<script>

export default {
    name: 'RegisterView',
    data() {
      return {
        userInfo: {
            email: '',
            password: '',
            companyName: '',
            companyNameFa:''


        },
          errors: {
              email: '',
              password: '',
              companyName: '',
              companyNameFa:''
          }
      }
    },
    methods: {
       async register(event) {
            // prevent the form from submitting by default
            event.preventDefault();

            console.log(this.userInfo);
            // reset errors
            this.errors.email = '';
            this.errors.password = '';
            this.errors.companyName = '';
            this.errors.companyNameFa = '';

            // validate email
            if (!this.userInfo.email) {
                this.errors.email = 'Email is required';
                return;
            }
            if (!this.validateEmail(this.userInfo.email)) {
                this.errors.email = 'Email is invalid';
                return;
            }

            // validate password
            // if (!this.userInfo.password) {
            //     this.errors.password = 'Password is required';
            //     return;
            // }
            // if (this.userInfo.password.length < 8) {
            //     this.errors.password = 'Password must be at least 8 characters';
            //     return;
            // }

            // validate company name
            if (!this.userInfo.companyName) {
                this.errors.companyName = 'Company name is required';
                return;
            }

            // validate company name in English
            if (!this.validateEnglish(this.userInfo.companyName)) {
                this.errors.companyName = 'Company name must be in English';
                return;
            }

            // validate company name in Farsi
            if (!this.userInfo.companyNameFa) {
                this.errors.companyNameFa = 'نام سازمان الزامی است';
                return;
            }

            // validate company name in Farsi
            if (!this.validateFarsi(this.userInfo.companyNameFa)) {
                this.errors.companyNameFa = 'نام سازمان باید به فارسی باشد';
                return;
            }

            // submit form
            console.log(this.userInfo);
        //     API section
        //           await this.axios.post("", this.userInfo).then(response => {
        //                 console.log(response)
        //                 alert("ثبت نام با موفقیت انجام شد")
        //             }).catch((error) => {
        //                 console.log(error);
        //                 alert("ثبت نام با مشکل مواجه شد")
        //             })
            this.$router.push('/login');
        },
        validateEmail(email) {
            // a simple regex to check email format
            let re = /\S+@\S+\.\S+/;
            return re.test(email);
        },
        validateEnglish(text) {
            // a regex to check if text contains only English letters and spaces
            let re = /^[A-Za-z ]+$/;
            return re.test(text);
        },
        validateFarsi(text) {
            // a regex to check if text contains only Farsi letters and spaces
            let re = /^[\u0600-\u06FF ]+$/;
            return re.test(text);
        },
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