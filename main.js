window.onload = function () {
  // Initialize the canvas and context
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // Create a new image element
  const img = new Image();

  // Set the source of the image
  img.src = "./nhnhnh.jpg";

  // Draw the image onto the canvas once it's loaded
  img.onload = function () {
    ctx.drawImage(img, 0, canvas.height - img.height, img.width, img.height);
    img.setAttribute("crossorigin", "anonymous");
    canvas.toDataURL();
  };

  // Handle error
  img.onerror = function () {
    console.error("Failed to load image.");
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
};
