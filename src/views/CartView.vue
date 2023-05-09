<template>
    <div class="container cart">
        <h1 class="view-title">Cart</h1>
        
        <div class="container product-card">
            <div class="card px-2">
                <div class="row">
                    <div class="col-12 col-md-4" id="img-col">
                        <img src="../assets/mushroom.jpg" class="img" alt="Picture of Mushroom Related Medicine">
                    </div>
                    <div class=" col-12 col-md-8">
                        <div class="row">
                            <div class="col-12">
                                <div class="row">

                                    <div class="col-9" id="product-name">
                                        <div class="card-title">REISHI, CHAGA & ECHINACEA TINCTURE</div>
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
                                        <div class="label" id="product-size">100ml</div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-outline">
                                            <input type="number" id="typeNumber" class="form-control" />
                                        </div>
                                        <div class="btn" id="add-btn">🗑</div>
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

h1 {
    color: black;
}

.subtotal>h4,
p {
    color: rgb(39, 39, 39);
    /* text-align: center; */
    height: 100px;
}

.subtotal>button {
    width: 100%;
    background-color: #B28F3E;
    border: #B28F3E;
    margin-bottom: 100px;
}

/* .subtotal>div>p {
    border: 1px solid black;
} */

.container {
    color: black;
}

.card {
    bottom: 10px;
}

#img-col {
    background-color: #1D3329;
}

.img {
    width: 100%;
    border-radius: 50%;
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

<!-- <style>
.cart {
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

.btncheckout {
    background-color: #B28F3E;
    color: white;
    width: 20%;
    border: #B28F3E;
    border-radius: 2px;
}

.subtotal {
    margin-top: 40px
}

h4 {
    color: black;
}

p {
    color: black
}
</style>  -->
