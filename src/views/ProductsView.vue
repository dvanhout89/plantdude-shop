<template>

<div class="container products">
    <!-- <h1 class="view-title">Products</h1> -->
<div v-for="product in products">
    <product-card-component :name="product.title" :productId="product.productId"/>

</div>
    
   

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
import ProductCard from '../components/ProductCard.vue'


export default {
  data() {
    return {
      products: [],
      numOfProducts: 0,
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
  },
  components:{
    'product-card-component':ProductCard
  }

}
</script>