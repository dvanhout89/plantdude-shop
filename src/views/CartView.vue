<template>
    <div class="container cart">
        <h1 class="view-title">Cart</h1>

        <div class="container product-card">
            <div class="card px-2">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4 col-md-2 offset-md-2" id="img-col">
                                <img src="../assets/mushroom.jpg" class="img" alt="Picture of Mushroom Related Medicine">
                            </div>
                            <div class="col-4 col-md-4">
                                <div class="row product-details">
                                    <div class="col-12" id="product-name">
                                        <div class="card-title">REISHI, CHAGA & ECHINACEA TINCTURE</div>
                                        <hr>
                                    </div>
                                    <div class="col-12">
                                       
                                        <div class="label" id="product-category">Category Name</div>
                                        <div class="label" id="product-size">100ml</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 col-md-2">
                                <div class="row">
                                    <div class="col-12">
                                        <div>
                                            <div class="label" id="product-price">R 130.00</div>
                                        </div>
                                        <div class="form-outline">
                                            <input type="number" id="typeNumber" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="btn" id="add-btn">Remove</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="subtotal">
            <div class="mb-4">
                <h4>Subtotal</h4>
            </div>
            <div class="mb-4">
                <h6>R 130.00</h6>
            </div>
            <div>
                <p>Terms and shipping calculated at checkout</p>
            </div>
            <button class="btn btn-success">Checkout</button>
        </div>
    </div>
</template>
 
<style>
.container {
    text-align: center;
    color: black;
}

.card {
    bottom: 10px;
}

#img-col {
    background-color: #1D3329;
    display: flex;
    justify-content: center;
    align-items: center;
}
#product-price{
    margin-top: 10px;

}

.img {
    width: 120%;
    border-radius: 50%;
}
.form-outline{
    margin-top: 15px;
  
}
#product-name {
    font-size: smaller;
    font-weight: bolder;
}
.card-title{
    font-size: 15px;
}

#product-category,
#product-size {
    margin-bottom: 10px;
    font-size: smaller;
}

.input-container {
    margin-top: 40px;
    margin-bottom: 10px;
}


@media (max-width: 767px) {
    .product-card .col-4 {
        flex-basis: 33.33%;
        max-width: 33.33%;
    }

    #img-col {
        justify-content: center;
        align-items: center;
        height: 20vh;
    }

    #add-btn {
        background-color: #1D3329;
        color: white;
    }

    .img {
        max-width: 70%;
    }
}


h1 {
    color: black;
}
.subtotal{
    margin-top: 20px;
}

.subtotal>h4,
p {
    color: rgb(39, 39, 39);
    height: 100px;
}

.subtotal>button {
    width: 100%;
    background-color: #B28F3E;
    border: #B28F3E;
    margin-bottom: 100px;
}

.container {
    color: black;
}

.card {
    height: 20vh;
    bottom: 10px;
    margin-top: 40px;
    width: 100%;
}

#img-col {
    background-color: #1D3329;
}

.img {
    width: 100%;
    border-radius: 50%;
    height: 20vh;
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
