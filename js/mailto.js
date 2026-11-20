const TO_ADDRESS = "hello@examplewebsite142.com"; 
const form = document.querySelector("#contact-form");

function buildMailto() {
    const name = document.querySelector("#full-name").value;
    const email = document.querySelector("#email").value;
    const topic = document.querySelector("#topic").value;
    const text = document.querySelector("#message").value;

    const subject = "Website message: " + topic;
    const body = 
        "Name: " + name + "\r\n" +
        "Email: " + email + "\r\n\r\n" +
        text;

    return (
        "mailto:" + TO_ADDRESS +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body)
    );
}

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const status = document.querySelector("#form-status");

        if (status) {
            status.textContent = 
            "Your email app should open with your message ready. Press -Send- there to finish " +
            "If nothing opens, email us at " + TO_ADDRESS + "."
        }

        window.location.href = buildMailto();
  });
}
