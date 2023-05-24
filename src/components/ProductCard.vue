<template>
    <div class="container product-card">
        <div class="card px-2" @click="saveProductId">
            <div class="row">
                <div class="col-12 col-md-4" id="img-col">
                    <img src="../assets/placeholder.webp" class="img" alt="Picture of Mushroom Related Medicine">
                </div>
                <div class=" col-12 col-md-8">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">

                                <div class="col-9" id="product-name">
                                    <div class="card-title">{{ name }}</div>
                                    <hr>
                                </div>

                                <div class="col-3" id="product-price-col">
                                    <div class="label" id="product-price">R 0.00</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">

                                <div class="col-9">
                                    <div class="label" id="product-category">Category Name</div>
                                    <div class="label" id="product-size">000ml</div>
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
.container {
    color: black;
}

.card {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s;
    cursor: pointer;
    bottom: 10px;
    margin-left: 40px;
    position: relative;
    display: inline-block;
    width: 100%;
}

.product-card .card:hover {
    cursor: pointer;
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
</style>

<script>
export default {
    props: ['name', 'productId'],
    methods: {
        saveProductId() {
            sessionStorage.setItem('productId', this.productId);

            this.$router.push({ name: 'productDescription', params: { id: this.productId } });
        }
    }
}
</script>

