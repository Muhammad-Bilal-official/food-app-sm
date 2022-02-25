// $(document).ready(function(){
//     $('#staticBackdrop').modal('show');
// })

let foodItems = document.getElementById("food-items");

const burgers = `<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <div class="card-img img-fluid">
                                <img src="./img/burgers/b1.jpg" alt="">
                            </div>
                            <h5 class="text-dark">Burger 1</h5>
                            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <div class="card-img img-fluid">
                                <img src="./img/burgers/b2.jpg" alt="">
                            </div>
                            <h5 class="text-dark">Burger 2</h5>
                            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <div class="card-img img-fluid">
                                <img src="./img/burgers/b3.jpg" alt="">
                            </div>
                            <h5 class="text-dark">Burger 3</h5>
                            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <div class="card-img img-fluid">
                                <img src="./img/burgers/b4.jpg" alt="">
                            </div>
                            <h5 class="text-dark">Burger 4</h5>
                            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <div class="card-img img-fluid">
                                <img src="./img/burgers/b5.jpg" alt="">
                            </div>
                            <h5 class="text-dark">Burger 5</h5>
                            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <div class="card-img img-fluid">
                                <img src="./img/burgers/b6.jpg" alt="">
                            </div>
                            <h5 class="text-dark">Burger 6</h5>
                            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <div class="card-img img-fluid">
                                <img src="./img/burgers/b7.jpg" alt="">
                            </div>
                            <h5 class="text-dark">Burger 7</h5>
                            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <div class="card-img img-fluid">
                                <img src="./img/burgers/b8.jpg" alt="">
                            </div>
                            <h5 class="text-dark">Burger 8</h5>
                            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <div class="card-img img-fluid">
                                <img src="./img/burgers/b9.jpg" alt="">
                            </div>
                            <h5 class="text-dark">Burger 9</h5>
                            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <div class="card-img img-fluid">
                                <img src="./img/burgers/b10.jpg" alt="">
                            </div>
                            <h5 class="text-dark">Burger 10</h5>
                            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
                        </div>
                    </div>
                </div>
            </div>`;
        
const pizza = `  <div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/pizza/p1.jpg" alt="">
        </div>
        <h5 class="text-dark">Pizza 1</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/pizza/p2.jpg" alt="">
        </div>
        <h5 class="text-dark">Piiza 2</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/pizza/p3.jpg" alt="">
        </div>
        <h5 class="text-dark">Pizza 3</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/pizza/p4.jpg" alt="">
        </div>
        <h5 class="text-dark">Pizza 4</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/pizza/p5.jpg" alt="">
        </div>
        <h5 class="text-dark">Pizza 5</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/pizza/p6.jpg" alt="">
        </div>
        <h5 class="text-dark">Pizza 6</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/pizza/p4.jpg" alt="">
        </div>
        <h5 class="text-dark">Pizza 7</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/pizza/p3.jpg" alt="">
        </div>
        <h5 class="text-dark">Pizza 7</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/pizza/p1.jpg" alt="">
        </div>
        <h5 class="text-dark">Pizza 8</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/pizza/p2.jpg" alt="">
        </div>
        <h5 class="text-dark">Pizza 9</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>`;
const iceCream = `
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/ice creams/ice1.gif" alt="">
        </div>
        <h5 class="text-dark">Ice Cream 1 1</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/ice creams/ice2.png" alt="">
        </div>
        <h5 class="text-dark">Ice Cream 2</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/ice creams/ice3.jpg" alt="">
        </div>
        <h5 class="text-dark">Ice Cream 3</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/ice creams/ice4.jpg" alt="">
        </div>
        <h5 class="text-dark">ICE Crea 4</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/ice creams/ice5.jpg" alt="">
        </div>
        <h5 class="text-dark">Ice Cream 5</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/ice creams/ice6.jpg" alt="">
        </div>
        <h5 class="text-dark">Ice Cream 6</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/ice creams/ice6.jpg" alt="">
        </div>
        <h5 class="text-dark">Ice Cream 7</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/ice creams/ice3.jpg" alt="">
        </div>
        <h5 class="text-dark">Ice Cream 8</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/ice creams/ice5.jpg" alt="">
        </div>
        <h5 class="text-dark">Ice Cream 9</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
<div class="card shadow-sm">
    <div class="card-body text-center">
        <div class="card-img img-fluid">
            <img src="./img/ice creams/ice4.jpg" alt="">
        </div>
        <h5 class="text-dark">Ice Cream 10</h5>
        <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
    </div>
</div>
</div>
`;
const broast = ``;
foodItems.innerHTML = burgers;
function changeMenuHandler(value) {
    if (value === "burger") foodItems.innerHTML = burgers;
    else if (value === "pizza") foodItems.innerHTML = pizza;
    else if (value === "ice-cream") foodItems.innerHTML = iceCream;
}
