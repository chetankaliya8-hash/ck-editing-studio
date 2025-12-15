function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  let url = "https://wa.me/919313548926?text="
    + "Name: " + name + "%0A"
    + "Message: " + message;

  window.open(url, "_blank");
}
