<template>
    <div class="container product-details-card">
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
                                    <div class="price" id="product-price">R {{ product.price }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <div class="col-9">
                                    <div class="product-category" id="product-category">{{ product.category }}</div>
                                    <div class="product-size" id="product-size">{{ product.gram}} ml</div>
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
</template>


<style>
.container.product-details-card {
    color: black;
}
.container.product-details-card .pt-5 {
    padding-top: -3rem!important;
    padding-bottom: 4rem!important;
}
.container.product-details-card .card-title
{
    top:10px;
}
.container.product-details-card .price
{
    bottom: 15px;
}
/* .card {
    bottom: 10px;
} */

.container.product-details-card #img-col {
    background-color: #1D3329;
}

.container.product-details-card .img {
    width: 100%;
    border-radius:50%;
}

.container.product-details-card #product-price-col {
    justify-content: center;
    align-content: center;
    text-align: center;
    top: 30px;
}

.container.product-details-card #product-name {
    font-size: large;
    font-weight: bolder;
}

.container.product-details-card #add-btn {
    top: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid black;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 100%;
}

.container.product-details-card #add-btn:active {
    background-color: grey;
}
.container.product-details-card .product-size
{
    top:10px;
}
.container.product-details-card .product-category
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
    const productId = sessionStorage.getItem('productId');
    if (productId) {
      this.getProduct(productId);
    }
  },
  methods: {
    async getProduct(productId) {
      try {
        const response = await getProduct(productId);
        console.log(response);
        this.product = response;
        console.log(this.product);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>