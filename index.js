(function () {
  emailjs.init("user_IjuMgMkHf27iV3yqtvvot");
})();

window.onload = function () {
  document
    .getElementById("waitlist")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("landing_page", "waitlist", this).then(
        function () {
          console.log("SUCCESS!");
          document.getElementById("waitlist").reset();
          document.getElementById("success").style.display = "block";
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
