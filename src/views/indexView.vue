<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'




const data = reactive(
  {
    // name:res.data.results[0]['name'].title+''+res.data.results[0]['name'].first+''+res.data.results[0]['name'].last,
    name: null,
    gender: null,
    email: null,
    location: {
      country: null,
      city: null,
    },
    picture: {
      medium: null
    },
    phone: null,
  }
);


function hello() {
  //  data++
  axios.get('https://randomuser.me/api/')
    .then(res => {
      console.log(res.data.results[0])
      data.name = res.data.results[0].name.title + ' ' + res.data.results[0].name.first + ' ' + res.data.results[0].name.last
      data.gender = res.data.results[0].gender
      data.email = res.data.results[0].email
      data.location.city = res.data.results[0].location.city
      data.location.country = res.data.results[0].location.country
      data.location.country = res.data.results[0].location.country
      data.picture.medium = res.data.results[0].picture.medium
      data.phone = res.data.results[0].phone
      console.log(data)

      // data = res
    }).catch(error => {

    })
}


</script>

<template>
  <main>
    <div class="row g-2 p-5 align-items-center bg-primary">
      <div class="col-lg-6 coll-md-12 col-sm-12 ">
        <div class="hero-content">
          <h1 class="fw-bold text-uppercase">home page view</h1>
          <p class="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit nesciunt sit architecto, eum totam eos
            excepturi tenetur repudiandae ipsum?
          </p>
          <button class="btn btn-success" @click="hello">click me</button>
          <p>
            {{ data.name }} <br>
            {{ data.gender }} <br>
            {{ data.email }} <br>
            {{ data.location.city }} <br>
            {{ data.location.country }} <br>
            {{ data.phone }}
          </p>
          
          <img :src="data.picture.medium" class="img-fluid" alt="people image">

        </div>
      </div>

      <div class="col-lg-6 coll-md-12 col-sm-12">
        <img src="../../public/image/value.jpg" class="img-fluid" alt="hero-image">
      </div>

    </div>
  </main>
</template>

<style scoped>
.col-lg-6 {
  color: white;
}
</style>
