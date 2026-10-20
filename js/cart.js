console.log("JS ĐÃ CHẠY");
function setPrice() {
  const price = document.querySelectorAll(".price");
  price.forEach((item) => {
    let gia = Number(item.textContent).toLocaleString("DE-de", {
      style: "currency",
      currency: "VND",
    });
    console.log(gia, typeof gia);
  });
}

setPrice();
