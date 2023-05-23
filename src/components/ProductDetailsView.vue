<template>
    <div class="container product-card">
        <div class="card px-2">
            <div class="row">
                <div class="col-12 col-md-4" id="img-col">
                    <img :src="product.imageUrl" class="img" alt="Picture of Mushroom Related Medicine">
                </div>
                <div class="col-12 col-md-8">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-9" id="product-name">
                                    <div class="card-title">{{ product.title }}</div>
                                    <hr>
                                </div>
                                <div class="col-3" id="product-price-col">
                                    <div class="price" id="product-price">{{ product.price }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <div class="col-9">
                                    <div class="product-category" id="product-category">{{ product.category }}</div>
                                    <div class="product-size" id="product-size">{{ product.gram}}</div>
                                </div>
                                <div class="col-3">
                                    <div class="form-outline">
                                        <input type="number" id="typeNumber" class="form-control" />
                                    </div>
                                    <div class="btn" id="add-btn">Add</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pt-5">
                    <h2>Description</h2><br><br>
                    <p>{{ product.bodyHtml }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.container {
    color: black;
}
.pt-5 {
    padding-top: -3rem!important;
    padding-bottom: 4rem!important;
}
.card-title
{
    top:10px;
}
.price
{
    bottom: 15px;
}
.card {
    bottom: 10px;
}

#img-col {
    background-color: #1D3329;
}

.img {
    width: 100%;
}

#product-price-col {
    justify-content: center;
    align-content: center;
    text-align: center;
    top: 30px;
}

#product-name {
    font-size: large;
    font-weight: bolder;
}

#add-btn {
    top: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid black;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 100%;
}

#add-btn:active {
    background-color: grey;
}
.product-size
{
    top:10px;
}
.product-category
{
    top: 5px;
}
</style>

<script>
import { getProduct } from '../services/ProductService';


export default {
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    this.getProduct("8263744913693"); 
  },
  methods: {
    async getProduct(productId) { 
      try {
        const response = await getProduct(productId);
        console.log(response);
        this.product = response;
        console.log(this.product)
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

