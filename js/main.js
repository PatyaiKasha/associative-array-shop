var goods = {
  12345: {
    name: "AsusZenBook",
    cost: 1000,
    weight: "1.5 kg",
    img_url: "https://im9.cz/iR/importprodukt-orig/bd4/bd49d393822bf48d4ae06fbff8abf0f6--mmf50x50.jpg",
    stock: "Available"
  },
  54321: {
    name: "MacbookPro",
    cost: 5000,
    weight: "1.5 kg",
    img_url: "https://cdn4.iconfinder.com/data/icons/MacBook_Pro/128/tiger.png",
    stock: "missing"
  }
};

console.log(goods);

var out = "";
for (var i in goods) {
  out += "Product name: " + goods[i].name + "<br>";
  out += "Cost: " + goods[i].cost + "<br>";
  out += "Waigt: " + goods[i].weight + "<br>";
  out += "<img src="+goods[i].img_url+">"+ "<br>";
  out += "inStock: " + goods[i].stock + "<br>"+"<hr>";

}

document.getElementById("out").innerHTML = out;
