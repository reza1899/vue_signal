<template>
    <div>
        <div class="split right">
            <div class="">
                <div class=" position-absolute top-50 start-50 translate-middle border border-3 p-5 m-auto w-75" >
                    <Form>
                       <div class="row">
                           <!-- fullName -->
                          <div class="col-12 col-md-5 mx-2 p-0">
                              <Field :rules="validateFullName" name="fullName" placeholder="نام و نام خانوادگی" type="text" v-model="userInfo.fullName" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
                              <div v-if="errors.fullName" class="alert dev_alert alert-danger p-0 mt-2 text-nowrap" role="alert">
                                  {{ errors.fullName }} <i class="fas fa-exclamation-triangle"></i>
                              </div>
                          </div>

                           <!-- phoneNumber -->
                          <div class="col-12 col-md-5 p-0">
                              <Field :rules="validatePhoneNumber" placeholder="شماره تماس" name="phoneNumber" type="text" v-model="userInfo.phoneNumber" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
                              <div v-if="errors.phoneNumber" class="alert dev_alert alert-danger fs-6 p-0 mt-2 w-50" role="alert">
                                  {{ errors.phoneNumber }} <i class="fas fa-exclamation-triangle"></i>
                              </div>
                          </div>
                       </div>

                        <!-- email -->
                       <div class="row">
                           <div class="col-12 col-md-5 mx-2 p-0">
                               <Field :rules="validateEmail" placeholder="پست الکترونیکی"   name="email" type="text" v-model="userInfo.email" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
                               <div v-if="errors.email" class="alert dev_alert alert-danger fs-6 p-0 mt-2 w-50" role="alert">
                                   {{ errors.email }} <i class="fas fa-exclamation-triangle"></i>
                               </div>
                           </div>

                           <!-- Company Name -->
                           <div class="col-12 col-md-5 p-0">
                               <Field :rules="validateCompanyName" placeholder="نام شرکت به انگلیسی" name="companyName" type="text" v-model="userInfo.companyName" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
                               <div v-if="errors.companyName" class="alert dev_alert alert_text alert-danger fs-6 p-0 mt-2 w-75" role="alert">
                                   {{ errors.companyName }} <i class="fas fa-exclamation-triangle"></i>
                               </div>
                           </div>
                       </div>
                        <!-- نام سازمان -->
                       <div class="row">

                           <div class="col-12 col-md-5 mx-2 p-0">
                               <Field :rules="validateCompanyNameFa" placeholder="نام شرکت به فارسی" name="companyNameFa" type="text" v-model="userInfo.companyNameFa" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
                               <div v-if="errors.companyNameFa" class="alert dev_alert alert-danger fs-6 p-0 mt-2 w-75" role="alert">
                                   {{ errors.companyNameFa }} <i class="fas fa-exclamation-triangle"></i>
                               </div>
                           </div>
                       </div>
                        <div class="row mt-2">
                            <div class="col-12 col-md-4 me-3 p-0">
                                <button :disabled="!userInfo.email || !userInfo.companyName || !userInfo.companyNameFa || !userInfo.phoneNumber || !userInfo.fullName" @click="register"  type="submit" class="btn w-50">ثبت</button>
                            </div>
                            <div class="col-12 col-md-4 m-3 p-0">
                                <a class="text-end mt-5" href="/login">حساب کاربری دارید؟</a>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        <div class="split left">
            <img style="border-radius: 5px;box-shadow: #2c3e50 0px 0px 15px;" class="w-100 h-100"  src="https://trello.com/1/cards/64aaff8a088d42ad0ae28a9a/attachments/64aaff8a088d42ad0ae28abc/previews/64aaff8a088d42ad0ae28ae5/download/signup.jpeg.jpg" alt="sea">
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import {Form , Field} from "vee-validate";

export default {
    name: 'RegisterView',
    components: {
      Form,
      Field
    },
    data() {
      return {
        userInfo: {
            fullName: '',
            phoneNumber: '',
            email: '',
            companyName: '',
            companyNameFa:''


        },
          errors: {
              email: '',
              fullName: '',
              phoneNumber: '',
              companyName: '',
              companyNameFa:''
          }
      }
    },
    methods: {
        validateFullName(text) {
            // a regex to check if text contains only Farsi letters and spaces
            let re = /^[\u0600-\u06FF ]+$/;
            return re.test(text);
        },
        validatePhoneNumber(phone) {
            // a simple regex to check phone number format
            let re = /^09\d{9}$/;
            return re.test(phone);
        },
        validateEmail(email) {
            // a simple regex to check email format
            let re = /\S+@\S+\.\S+/;
            return re.test(email);
        },
        validateCompanyNameFa(text) {
            // a regex to check if text contains only Farsi letters and spaces
            let re = /^[\u0600-\u06FF ]+$/;
            return re.test(text);
        },
        validateCompanyName(text) {
            // a regex to check if text contains only English letters and spaces
            let re = /^[A-Za-z ]+$/;
            return re.test(text);
        },
       async register(event) {
            // prevent the form from submitting by default
            event.preventDefault();

            console.log(this.userInfo);
            // reset errors
           this.errors.fullName = '';
           this.errors.phoneNumber ='';
            this.errors.email = '';
            this.errors.password = '';
            this.errors.companyName = '';
            this.errors.companyNameFa = '';

           //  validation fullName
           if (!this.userInfo.fullName) {
               this.errors.fullName = ' نام و نام خانوادگی الزامی می باشد';
               return;
           }
           if (!this.validateFullName(this.userInfo.fullName)) {
               this.errors.fullName = 'نام و نام خانوادگی باید به حروف فارسی باشند';
               return;
           }

           // validation phoneNumber
           if (!this.userInfo.phoneNumber) {
               this.errors.fullName = ' شماره تماس الزامی می باشد';
               return;
           }
           if (!this.validatePhoneNumber(this.userInfo.phoneNumber)) {
               this.errors.phoneNumber = 'شماره تماس معتبر نمی باشد';
               return;
           }
            // validate email
            if (!this.userInfo.email) {
                this.errors.email = 'ایمیل الزامی میباشد';
                return;
            }
            if (!this.validateEmail(this.userInfo.email)) {
                this.errors.email = 'آدرس ایمیل معتبر نمی باشد';
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
                this.errors.companyName = 'نام ک سازمان الزامی می باشد';
                return;
            }

            // validate company name in English
            if (!this.validateCompanyName(this.userInfo.companyName)) {
                this.errors.companyName = 'نام  سازمان باید به انگلیسی باشد';
                return;
            }

            // validate company name in Farsi
            if (!this.userInfo.companyNameFa) {
                this.errors.companyNameFa = 'نام سازمان الزامی است';
                return;
            }

            // validate company name in Farsi
            if (!this.validateCompanyNameFa(this.userInfo.companyNameFa)) {
                this.errors.companyNameFa = 'نام سازمان باید به فارسی باشد';
                return;
            }

            // submit form
            console.log(this.userInfo);
        //     API section
                 axios.post("http://192.168.1.10:3000/signup", this.userInfo).then((response) => {
                    console.log(response)

                 }).catch((error) => {
                     console.log(error)
                 })
           this.$router.push('/login');

        },
        }

};
</script>
<style scoped>
.dev_alert {
  font-size: 12px;
}
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