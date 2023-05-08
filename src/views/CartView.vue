<template>
    <div class="container cart">
        <h1 class="view-title">Cart</h1>
        <!-- Remove for Lucien's stuff -->
        <div id="product-card">
        </div>
        <div class="subtotal">
            <div class="mb-4">
                <h4>Subtotal</h4>
            </div>
            <div class="mb-4">
                <h4>R 130.00</h4>
            </div>
            <div>
                <p>Terms and shipping calculated at checkout</p>
            </div>
            <button class="btn btn-success">Checkout</button>
        </div>
    </div>
</template>
 
<style>
    .container{
        text-align: center;
        color: black;
    }
    h1{
        color: black;
    }
    .subtotal > h4,p{
        color: rgb(39, 39, 39);
        /* text-align: center; */
        height: 475px;
    }
    .subtotal > button{
        width: 100%;
        background-color: #B28F3E;
    }
    .subtotal > div > p{
        border: 1px solid black;
    }
    #product-card{
        height: 10vh;
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
