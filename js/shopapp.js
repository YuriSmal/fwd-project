const basket = {
  money: 0,
  items: 0
};

const toys = [
  {
    name: "Printer V1",
    price: 150,
    picture: "img/1.jpg"
  },
  {
    name: "Printer V2",
    price: 200,
    picture: "img/2.jpg"
  },
  {
    name: "Printer V3",
    price: 100,
    picture: "img/3.jpg"
  },
  {
    name: "Printer V4",
    price: 300,
    picture: "img/4.jpg"
  },
  {
    name: "Printer V5",
    price: 330,
    picture: "img/5.jpg"
  },
  {
    name: "Printer V6",
    price: 400,
    picture: "img/6.jpg"
  },
  {
    name: "Printer V7",
    price: 270,
    picture: "img/7.jpg"
  },
  {
    name: "Printer V8",
    price: 599,
    picture: "img/8.jpg"
  },
  {
    name: "Printer V9",
    price: 400,
    picture: "img/9.jpg"
  }
];

init();

function init() {
  basketView();
  toysView();

  document.getElementById("toyshop").innerHTML += toys.toString();
}

//view of the backet

function basketView() {
  let view =
    '<div class="row justify-content-end">' +
    '<div class="col-3 col-sm-3 col-md-2">' +
    '<h1 class="text-danger"><i class="fas fa-shopping-basket"></i></h1>' +
    "</div>" +
    '<div class="col-3 col-sm-4 col-md-3">' +
    "<h3>Total " +
    basket.money +
    "</h3>" +
    "</div>" +
    "</div>";

  document.getElementById("toyshop").innerHTML += view;
}

function toysView() {
  let view = '<div class="row">';

  toys.forEach(function(item, index) {
    view += '<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">';
    view += '<div class="card">';
    view += '<div class="card-body text-center">';
    view += '<h4 class="card-title">' + item.name + "</h4>";

    view += '<div class="">';
    view +=
      '<img style="width: 100%; height: auto;"  src="' + item.picture + '">';
    view += "</div>";
    view += '<div class="m-2">';
    view += '<p class="card-text">' + item.price + "</p>";
    view += "</div>";
    view += '<a href="#" class="btn btn-primary">Add to cart</a>';
    view += "</div>";
    view += "</div>";
    view += "</div>";
  });

  view += "</div>";

  document.getElementById("toyshop").innerHTML += view;
}
