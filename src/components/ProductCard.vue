<template>
    <div class="container product-card">
        <div class="card px-2">
            <div class="row">
                <div class="col-12 col-md-4" id="img-col">
                    <img :src="images" class="img" @click="saveProductId" alt="Picture of Mushroom Related Medicine">
                </div>
                <div class=" col-12 col-md-8">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">

                                <div class="col-9" id="product-name">
                                    <div class="card-title" @click="saveProductId">{{ name }}</div>
                                    <hr>
                                </div>

                                <div class="col-3" id="product-price-col">
                                    <div class="label" id="product-price">R {{ price }}</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">

                                <div class="col-9">
                                    <div class="label" id="product-category">Category Name</div>
                                    <div class="label" id="product-size">{{gram}} ml</div>
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
            </div>
        </div>
    </div>
</template>

<style>
.container.product-card {
    color: black;
}

.container.product-card .card {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s;
    cursor: pointer;
    bottom: 10px;
    margin-bottom: 40px;
    padding-bottom: 10px;
    position: relative;
    display: inline-block;
    width: 100%;
}

.container.product-card .product-card {
    padding-bottom: 10px;
}

.product-card .card:hover {
    cursor: pointer;
}

.container.product-card #img-col {
    background-color: #1D3329;
}

.container.product-card .img {
    width: 100%;
}

.container.product-card #product-price-col {
    justify-content: center;
    align-content: center;
    text-align: center;
    top: 30px;
}

.container.product-card #product-name {
    font-size: large;
    font-weight: bolder;
}

.container.product-card #add-btn {
    top: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid black;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 100%;
}

.container.product-card #add-btn:active {
    background-color: grey;
}
</style>

<script>
export default {
    props: ['name', 'productId', 'price', 'gram', 'images'],
    methods: {
        saveProductId() {
            sessionStorage.setItem('productId', this.productId);

            this.$router.push({ name: 'productDescription', params: { id: this.productId } });
        }
    }
}
</script>

