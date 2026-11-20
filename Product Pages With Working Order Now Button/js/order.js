const ORDER_ADDRESS = "orders@examplewebsite142.com"; 
const orderForm = document.querySelector("#order-form");

function buildOrderMailto() {
    const product = document.querySelector("#product-name").textContent;
    const price = document.querySelector("#product-price").textContent;
    const size = document.querySelector('input[name="size"]:checked').value;
    const quantity = document.querySelector("#quantity").value;

    const subject = "Order: " + product;
    const body = 
        "Hello Gab & Co., I would like to order:" + "\r\n\r\n" +
        "Product: " + product + "\r\n" +
        "Size: " + size + "\r\n" +
        "Quantity: " + quantity + "\r\n" +
        "Price per shirt: " + price;

    return (
        "mailto:" + ORDER_ADDRESS +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body)
    );
}

if (orderForm) {

  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // feedback for the visitor //
    const status = document.querySelector("#order-status");
    if (status) {
      status.textContent =
        "Your email app should open with your order ready. Press Send there to finish. " +
        "If nothing opens, email us at " + ORDER_ADDRESS + ".";
    }

    window.location.href = buildOrderMailto();
  });
}