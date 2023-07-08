<template>
    <div>
        <nav class="navbar navbar-light m-4 rounded-3" style="background-color: #e3f2fd;">
            <div class="container row m-0 d-flex flex-row">
                <div class="col-5  text-end">
                    <a class="navbar-brand" href="#">
                        <img class="img-fluid" src="https://trello.com/1/cards/64a9974db79f1ef23ec2dd61/attachments/64a9974db79f1ef23ec2dd82/previews/64a9974eb79f1ef23ec2ddd9/download/mega.jpeg.png" alt="mega">
                    </a>
                </div>
                <div class="col-4 text-start ms-2">
                    <button class="btn ms-2" @click="handleClick">ورود</button>
                    <button class="btn" @click="handleClick2">ثبت نام</button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'HeaderApp',
    methods: {
      handleClick() {
        this.$router.push('/login')
      },
        handleClick2() {
            this.$router.push('/register')
        }
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
