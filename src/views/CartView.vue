<template>
    <div class="container cart">
        <h1 class="view-title">Cart</h1>

        <div class="container product-card">
            <div class="card px-2">
                <div class="row">
                    <div class="col-4 col-md-2 " id="img-col">
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
                    <div class="col-4 col-md-4">
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
.container.cart {
    text-align: center;
    color: black;
    height: 100%;
}

.container.cart .card {
    bottom: 10px;
    margin-top: 40px;
}

.container.cart body {
    height: 100%;
}


.container.cart #img-col {
    background-color: #1D3329;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container.cart .img {
    width: 120%;
    border-radius: 50%;
}

.container.cart #product-price {
    margin-top: 10px;

}


.container.cart .form-outline {
    margin-top: 15px;

}

.container.cart #product-name {
    font-size: smaller;
    font-weight: bolder;
}

.container.cart .card-title {
    font-size: 15px;
}

.container.cart #product-category,
.container.cart #product-size {
    margin-bottom: 10px;
    font-size: smaller;
}

.container.cart .input-container {
    margin-top: 40px;
    margin-bottom: 10px;
}


@media (max-width: 767px) {
    .container.cart .product-card .col-4 {
        flex-basis: 33.33%;
        max-width: 33.33%;
    }

    .container.cart #img-col {
        justify-content: center;
        align-items: center;
        height: 20vh;
        width: fit-content;
    }

    .container.cart #add-btn {
        background-color: #1D3329;
        color: white;
    }

    .container.cart .img {
        max-width: 70%;
    }
}


.container.cart h1 {
    color: black;
}

.container.cart .subtotal {
    margin-top: 20px;
}

.container.cart .subtotal>h4,
p {
    color: rgb(39, 39, 39);
    height: 100px;
}

.container.cart .subtotal>button {
    width: 100%;
    background-color: #B28F3E;
    border: #B28F3E;
    margin-bottom: 100px;
}

.container.cart .card {
    height: 20vh;
    bottom: 10px;
    margin-top: 40px;
    width: 100%;
}

.container.cart #img-col {
    background-color: #1D3329;
}

.container.cart .img {
    width: 130px;
    border-radius: 50%;
    height: 20vh;
}

.container.cart #product-price-col {
    justify-content: center;
    align-content: center;
    text-align: center;
    top: 30px;
}

.container.cart #product-name {
    font-size: large;
    font-weight: bolder;
}

.container.cart #add-btn {
    top: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid black;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 100%;
}

.container.cart #add-btn:active {
    background-color: grey;
}
</style>