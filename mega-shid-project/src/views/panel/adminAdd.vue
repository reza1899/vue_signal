<template>
    <div>
        <adminPanelLayout>
            <div class="adminAdd">
                <h2 style="color: #e3f2fd;">Add User</h2>
                <p class="text-end fw-bold">User Name <i class="fas fa-angle-down mx-1"></i></p>
                <input type="text" placeholder="Name" v-model="newUser.name">
                <p class="text-end mt-1 fw-bold">Password <i class="fas fa-angle-down mx-1"></i></p>
                <input type="password" placeholder="Password" v-model="newUser.password">
                <p class="text-end mt-2 fw-bold">Role <i class="fas fa-angle-down mx-1"></i></p>
                <select class="form-select" v-model="newUser.userLevel" aria-label="Default select example">
                    <option value="admin">admin</option>
                    <option value="user">user</option>
                </select>
                <button class="btn border border-primary " @click="addUser" >Add User</button>
            </div>
        </adminPanelLayout>
    </div>
</template>

<script>
import adminPanelLayout from '@/layout/adminPanel.vue'
export default {
    name: "adminAdd",
    components: {
        adminPanelLayout
    },
    data() {
        return {
            toast: false,
            newUser : {
                name : '',
                password : '',
                userLevel : null,
            }
        }
    },
    methods: {
        addUser() {
           // await this.axios.post("", this.newUser).then(response => {
           //                     console.log(response)
            //                    alert("ایجاد کاربر با موفقیت انجام شد")
           //                 }).catch((error) => {
           //                     console.log(error);
           //                     alert("ثبت نام با مشکل مواجه شد")
           //                 })
            console.log(this.newUser)
        }
    }
}
</script>

<style>

.adminAdd {
    background-color: #e3f2fd;
    padding: 20px;
    border-radius: 5px;
}

h2 {
    text-align: center;
    margin-bottom: 10px;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top : 10px;
}

button {
    border: #333333 solid 1px;
    color: #2c3e50;
    margin-top: 10px;
}
button:hover {
    background-color: #9AC5F4;
}

</style>