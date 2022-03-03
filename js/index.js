$(document).ready(function(){
    $('#staticBackdrop').modal('show');
})

let foodItems = document.getElementById("food-items");

const navbarSupportedContentDivInnerHTML = `
<h1>Rs. 0</h1>
<div id="addToCartButton" class="mb-4">
    <button class="btn btn-block btn-danger">
        Proceed to Payment &nbsp;&nbsp;
        <i class="fa-solid fa-coins"></i> <br>
    </button>
</div>
<!-- <button class="btn btn-block btn-outline-success mt-2" id="showOrderListbtn"
    onclick="toggleCustomerOrderList()">
    Show Your Order
    -->
</button>
<!-- Order List Starts Here  -->
<div id="orderListItems">
    <div class="card shadow-lg border bg-light my-2">
        <div class="orderListProduct p-0 m-0 pt-2">
            <img src="./img/burgers/b3.jpg" alt="">
            <div id="productQuantity">
                <span class="badge badge-danger badge-pill">2</span>
            </div>
        </div>
        <h6 class="productName">Burger 1</h6>
        <div id="orderButtons">
            <i class="fa-solid fa-plus text-success mx-3"></i>
            <!-- <br> -->
            <i class="fa-solid fa-minus text-dark mx-3"></i>
            <!-- <br> -->
            <i class="fa-solid fa-trash-can text-danger mx-3"></i>
        </div>
    </div>
    <div class="card shadow-lg border bg-light my-2">
        <div class="orderListProduct p-0 m-0 pt-2">
            <img src="./img/pizza/p3.jpg" alt="">
            <div id="productQuantity">
                <span class="badge badge-danger badge-pill">5</span>
            </div>
        </div>
        <h6 class="productName">Pizza 5</h6>
        <div id="orderButtons">
            <i class="fa-solid fa-plus text-success mx-3"></i>
            <!-- <br> -->
            <i class="fa-solid fa-minus text-dark mx-3"></i>
            <!-- <br> -->
            <i class="fa-solid fa-trash-can text-danger mx-3"></i>
        </div>
    </div>
    <div class="card shadow-lg border bg-light my-2">
        <div class="orderListProduct p-0 m-0 pt-2">
            <img src="./img/broast/br3.jpg" alt="">
            <div id="productQuantity">
                <span class="badge badge-danger badge-pill">9</span>
            </div>
        </div>
        <h6 class="productName">Broast 2</h6>
        <div id="orderButtons">
            <i class="fa-solid fa-plus text-success mx-3"></i>
            <!-- <br> -->
            <i class="fa-solid fa-minus text-dark mx-3"></i>
            <!-- <br> -->
            <i class="fa-solid fa-trash-can text-danger mx-3"></i>
        </div>
    </div>
    <div class="card shadow-lg border bg-light my-2">
        <div class="orderListProduct p-0 m-0 pt-2">
            <img src="./img/burgers/b3.jpg" alt="">
            <div id="productQuantity">
                <span class="badge badge-danger badge-pill">2</span>
            </div>
        </div>
        <h6 class="productName">Burger 1</h6>
        <div id="orderButtons">
            <i class="fa-solid fa-plus text-success mx-3"></i>
            <!-- <br> -->
            <i class="fa-solid fa-minus text-dark mx-3"></i>
            <!-- <br> -->
            <i class="fa-solid fa-trash-can text-danger mx-3"></i>
        </div>
    </div>
    <div class="card shadow-lg border bg-light my-2">
        <div class="orderListProduct p-0 m-0 pt-2">
            <img src="./img/pizza/p3.jpg" alt="">
            <div id="productQuantity">
                <span class="badge badge-danger badge-pill">5</span>
            </div>
        </div>
        <h6 class="productName">Pizza 5</h6>
        <div id="orderButtons">
            <i class="fa-solid fa-plus text-success mx-3"></i>
            <!-- <br> -->
            <i class="fa-solid fa-minus text-dark mx-3"></i>
            <!-- <br> -->
            <i class="fa-solid fa-trash-can text-danger mx-3"></i>
        </div>
    </div>
    <div class="card shadow-lg border bg-light my-2">
        <div class="orderListProduct p-0 m-0 pt-2">
            <img src="./img/broast/br3.jpg" alt="">
            <div id="productQuantity">
                <span class="badge badge-danger badge-pill">9</span>
            </div>
        </div>
        <h6 class="productName">Broast 2</h6>
        <div id="orderButtons">
            <i class="fa-solid fa-plus text-success mx-3"></i>
            <!-- <br> -->
            <i class="fa-solid fa-minus text-dark mx-3"></i>
            <!-- <br> -->
            <i class="fa-solid fa-trash-can text-danger mx-3"></i>
        </div>
    </div>
</div>
</d>
`;
let navbarSupportedContentDiv = document.getElementById(
    "navbarSupportedContentDiv"
);
let orderList = document.getElementById("orderList");

var body = document.getElementsByTagName("BODY")[0];
var width = body.offsetWidth;

if (width <= 992) {
    navbarSupportedContentDiv.innerHTML = navbarSupportedContentDivInnerHTML;
    orderList.innerHTML = "";
} else {
    orderList.innerHTML = navbarSupportedContentDivInnerHTML;
    navbarSupportedContentDiv.innerHTML = "";
}

if (window.addEventListener) {
    // all browsers except IE before version 9
    window.addEventListener("resize", onResizeEvent, true);
} else {
    if (window.attachEvent) {
        // IE before version 9
        window.attachEvent("onresize", onResizeEvent);
    }
}

function onResizeEvent() {
    bodyElement = document.getElementsByTagName("BODY")[0];
    newWidth = bodyElement.offsetWidth;
    if (newWidth != width) {
        width = newWidth;
        // console.log(width);
        if (width <= 992) {
            navbarSupportedContentDiv.innerHTML = navbarSupportedContentDivInnerHTML;
            orderList.innerHTML = "";
        } else {
            orderList.innerHTML = navbarSupportedContentDivInnerHTML;
            navbarSupportedContentDiv.innerHTML = "";
        }
    }
}
const burgers = `

<!-- Burger 1 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb1" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b1')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/burgers/b1.jpg" alt="">
            </div>
            <h5 class="text-dark">Burger 1</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b1')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Burger 1 Ends -->

<!-- Burger 2 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb2" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b2')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/burgers/b2.jpg" alt="">
            </div>
            <h5 class="text-dark">Burger 2</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b2')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Burger 2 Ends -->

<!-- Burger 3 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb3" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b3')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/burgers/b3.jpg" alt="">
            </div>
            <h5 class="text-dark">Burger 3</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b3')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Burger 3 Ends -->

<!-- Burger 4 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb4" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b4')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/burgers/b4.jpg" alt="">
            </div>
            <h5 class="text-dark">Burger 4</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b4')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Burger 4 Ends -->


<!-- Burger 5 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb5" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b5')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/burgers/b5.jpg" alt="">
            </div>
            <h5 class="text-dark">Burger 5</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b5')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Burger 5 Ends -->


<!-- Burger 6 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb6" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b6')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/burgers/b6.jpg" alt="">
            </div>
            <h5 class="text-dark">Burger 6</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b6')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Burger 6 Ends -->


<!-- Burger 7 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb7" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b7')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/burgers/b7.jpg" alt="">
            </div>
            <h5 class="text-dark">Burger 7</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b7')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Burger 7 Ends -->


<!-- Burger 8 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb8" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b8')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/burgers/b8.jpg" alt="">
            </div>
            <h5 class="text-dark">Burger 8</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b8')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Burger 8 Ends -->


<!-- Burger 9 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb9" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b9')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/burgers/b9.jpg" alt="">
            </div>
            <h5 class="text-dark">Burger 9</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b9')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Burger 9 Ends -->

`;

const pizza = ` 


<!-- pizza 1 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb1" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b1')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/pizza/p1.jpg" alt="">
            </div>
            <h5 class="text-dark">pizza 1</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b1')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- pizza 1 Ends -->

<!-- pizza 2 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb2" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b2')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/pizza/p2.jpg" alt="">
            </div>
            <h5 class="text-dark">pizza 2</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b2')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- pizza 2 Ends -->

<!-- pizza 3 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb3" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b3')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/pizza/p3.jpg" alt="">
            </div>
            <h5 class="text-dark">pizza 3</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b3')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- pizza 3 Ends -->

<!-- pizza 4 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb4" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b4')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/pizza/p4.jpg" alt="">
            </div>
            <h5 class="text-dark">pizza 4</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b4')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- pizza 4 Ends -->


<!-- pizza 5 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb5" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b5')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/pizza/p5.jpg" alt="">
            </div>
            <h5 class="text-dark">pizza 5</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b5')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- pizza 5 Ends -->


<!-- pizza 6 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb6" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b6')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/pizza/p6.jpg" alt="">
            </div>
            <h5 class="text-dark">pizza 6</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b6')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- pizza 6 Ends -->


<!-- pizza 7 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb7" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b7')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/pizza/p1.jpg" alt="">
            </div>
            <h5 class="text-dark">pizza 7</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b7')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- pizza 7 Ends -->


<!-- pizza 8 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb8" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b8')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/pizza/p2.jpg" alt="">
            </div>
            <h5 class="text-dark">pizza 8</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b8')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- pizza 8 Ends -->


<!-- pizza 9 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb9" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b9')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/pizza/p5.jpg" alt="">
            </div>
            <h5 class="text-dark">pizza 9</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b9')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- pizza 9 Ends -->

`;
const broast = ` 


<!-- Broast 1 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb1" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b1')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/broast/br1.jpg" alt="">
            </div>
            <h5 class="text-dark">Broast 1</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b1')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Broast 1 Ends -->

<!-- Broast 2 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb2" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b2')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/broast/br2.jpg" alt="">
            </div>
            <h5 class="text-dark">pizza 2</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b2')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Broast 2 Ends -->

<!-- Broast 3 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb3" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b3')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/broast/br3.jpg" alt="">
            </div>
            <h5 class="text-dark">Broast 3</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b3')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Broast 3 Ends -->

<!-- Broast 4 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb4" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b4')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/broast/br4.jpg" alt="">
            </div>
            <h5 class="text-dark">Broast 4</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b4')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Broast 4 Ends -->


<!-- Broast 5 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb5" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b5')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/broast/br5.jpg" alt="">
            </div>
            <h5 class="text-dark">Broast 5</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b5')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Broast 5 Ends -->


<!-- Broast 6 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb6" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b6')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/broast/br6.jpg" alt="">
            </div>
            <h5 class="text-dark">Broast 6</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b6')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Broast 6 Ends -->


<!-- Broast 7 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb7" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b7')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/broast/br7.jpg" alt="">
            </div>
            <h5 class="text-dark">Broast 7</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b7')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Broast 7 Ends -->


<!-- Broast 8 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb8" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b8')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/broast/br8.jpg" alt="">
            </div>
            <h5 class="text-dark">Broast 8</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b8')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Broast 8 Ends -->


<!-- Broast 9 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb9" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b9')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/broast/br1.jpg" alt="">
            </div>
            <h5 class="text-dark">Broast 9</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b9')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Broast 9 Ends -->

`;
const iceCream = ` 


<!-- Ice Cream 1 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb1" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b1')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/ice creams/ice4.jpg" alt="">
            </div>
            <h5 class="text-dark">Ice Cream 1</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b1')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Ice Cream 1 Ends -->

<!-- Ice Cream 2 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb2" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b2')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/ice creams/ice8.jpg" alt="">
            </div>
            <h5 class="text-dark">Ice Cream 2</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b2')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Ice Cream 2 Ends -->

<!-- Ice Cream 3 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb3" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b3')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/ice creams/ice3.jpg" alt="">
            </div>
            <h5 class="text-dark">Ice Cream 3</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b3')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Ice Cream 3 Ends -->

<!-- Ice Cream 4 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb4" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b4')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/ice creams/ice4.jpg" alt="">
            </div>
            <h5 class="text-dark">Ice Cream 4</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b4')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Ice Cream 4 Ends -->


<!-- Ice Cream 5 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb5" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b5')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/ice creams/ice5.jpg" alt="">
            </div>
            <h5 class="text-dark">Ice Cream 5</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b5')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Ice Cream 5 Ends -->


<!-- Ice Cream 6 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb6" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b6')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/ice creams/ice6.jpg" alt="">
            </div>
            <h5 class="text-dark">Ice Cream 6</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b6')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Ice Cream 6 Ends -->


<!-- Ice Cream 7 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb7" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b7')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/ice creams/ice7.jpg" alt="">
            </div>
            <h5 class="text-dark">Ice Cream 7</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b7')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Ice Cream 7 Ends -->


<!-- Ice Cream 8 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb8" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b8')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/ice creams/ice8.jpg" alt="">
            </div>
            <h5 class="text-dark">Ice Cream 8</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b8')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Ice Cream 8 Ends -->


<!-- Ice Cream 9 Start -->
<div class="col-12 col-md-6 col-lg-4 pb-3 d-block m-auto">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <div id="alertb9" class="d-none">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Added to Cart!</strong> 
                    </br>
                    <a href="#topNav">Show Your Order</a>
                    <br> 
                    <button type="button" class="close" aria-label="Close" onclick="hideAlert1Container('b9')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="card-img img-fluid">
                <img src="./img/ice creams/ice6.jpg" alt="">
            </div>
            <h5 class="text-dark">Ice Cream 9</h5>
            <h6 class="text-dark"> <span id="amount">299</span> <br> Rupees-Only</h6>
            <button class="btn btn-block btn-danger" onclick="showSuccessAlert('b9')">
                Add to Cart &nbsp;&nbsp;
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
<!-- Ice Cream 9 Ends -->

`;

foodItems.innerHTML = burgers;
function changeMenuHandler(value) {
    if (value === "burger") foodItems.innerHTML = burgers;
    else if (value === "pizza") foodItems.innerHTML = pizza;
    else if (value === "ice-cream") foodItems.innerHTML = iceCream;
    else if (value === "broast") foodItems.innerHTML = broast;
}

// function toggleAddToCartMenu() {
//   document.getElementById("orderList").classList.toggle("d-block");
// }
// function toggleCustomerOrderList() {
//   let orderListItems = document.getElementById("orderListItems");
//   orderListItems.classList.toggle("d-block");
//   let button = document.querySelector("#showOrderListbtn");
//   console.log(button.innerText);
//   if (button.innerText === "Show Your Order")
//     button.innerText = "Hide Your Order";
//   else button.innerText = "Show Your Order";
// }
function showSuccessAlert(id) {
    let alert = document.getElementById("alert" + id);
    if (alert.classList.contains("d-block")) {
        alert.classList.toggle("d-block");
        setTimeout(() => {
            alert.classList.add("d-block");
        }, 100);
    } else {
        alert.classList.add("d-block");
    }
}
function hideAlert1Container(id) {
    let alert = document.getElementById("alert" + id);
    alert.classList.toggle("d-block");
}
