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
                  <div class="form-outline">
                    <input type="number" id="typeNumber" class="form-control" />
                  </div>
                </div>
                <div class="col-12">
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

.card {
  bottom: 10px;
}

#img-col {
  background-color: #1D3329;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img {
  width: 100%;
  border-radius: 50%;
}

#product-name {
  font-size: smaller;
  font-weight: bolder;
}

#product-category,
#product-size {
  margin-bottom: 10px;
}

.input-container {
  margin-top: 5px;
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
  }
  #add-btn{
    background-color: #1D3329;
  }
  
  .img {
    max-width: 70%;
  }
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
