<template>
    <div class="container product-card">
        <div class="card px-2">
            <div class="row">
                <div class="col-12 col-md-4" id="img-col">
                    <img src="../assets/placeholder.webp" class="img" alt="Picture of Mushroom Related Medicine">
                </div>
                <div class=" col-12 col-md-8">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">

                                <div class="col-9" id="product-name">
                                    <div class="card-title">PRODUCT NAME HERE</div>
                                    <hr>
                                </div>

                                <div class="col-3" id="product-price-col">
                                    <div class="price" id="product-price">R 0.00</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">

                                <div class="col-9">
                                    <div class="product-category" id="product-category">Category Name</div>
                                    <div class="product-size" id="product-size">000ml</div>
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
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Eos veniam sint, minus vitae provident commodi suscipit quisquam
                        maiores repellendus quos consequuntur aliquid ut quasi illo, corrupti,
                        quia enim reiciendis doloribus.
                    </p>
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