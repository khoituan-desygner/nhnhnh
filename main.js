window.onload = function () {
  // Initialize the canvas and context
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // Create a new image element
  const img = new Image();

  // Set the source of the image
  img.src =
    "https://raw.githubusercontent.com/khoituan-desygner/nhnhnh/master/nhnhnh.jpg";

  // Draw the image onto the canvas once it's loaded
  img.onload = function () {
    ctx.drawImage(img, 0, canvas.height - img.height, img.width, img.height);
  };

  // Handle error
  img.onerror = function (err) {
    window.alert("Failed to load image.", err);
  };

  // Function to export the canvas as an image
  function exportCanvas() {
    // Get the data URL for the image
    const dataURL = canvas.toDataURL("image/png");

    // Create a link element
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvas-image.png"; // Set the default file name

    // Trigger the download by simulating a click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Add event listener to the button to export the canvas as an image
  document.getElementById("download").addEventListener("click", exportCanvas);

  const inputBox = document.getElementById("input-box");

  inputBox.addEventListener("keypress", (event) => {
    if (event.key != "Enter") return;

    console.log(inputBox.value);

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    // Set the font properties
    context.font = "30px Arial";
    context.fillStyle = "black";

    // Draw the text on the canvas
    context.fillText(inputBox.value, 50, 100);

    // Optionally, you can also stroke the text for an outline effect
    context.strokeStyle = "blue";
    context.strokeText(inputBox.value, 50, 100);
  });
};
