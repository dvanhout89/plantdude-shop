<template>

<div class="container products">
    <h1 class="view-title">Products</h1>
    <ul v-for="product in products">
    <li>{{ product.title}}</li>
    </ul>

</div>
</template>

<style>
    .products {
        min-height: 100vh;
        display: flex;
        background: aliceblue;
        text-align: center;
        justify-content: center;
    }
    .view-title {
        color: blue;
        text-align: center;
        justify-content: center;
    }
</style>

<script>

import {getAllProducts} from '../services/ProductService'


export default {
  data() {
    return {
      products: [],
      numOfProducts: 0
    };
  },
  mounted(){
    getAllProducts().then(response => {
            console.log(response)
            this.products = response
        })
  },
  methods: {
    getAllProducts(){
        
    }
  }

}
</script>