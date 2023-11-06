const fileInput = document.getElementById("fileInput");
const openFileButton = document.querySelector(".upload");
const imageElement = document.getElementById("imageElement");
let val2 = true;

openFileButton.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  const selectedFile = fileInput.files[0];
  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const dataURL = e.target.result;
      imageElement.src = dataURL;
      imageElement.style.visibility = "visible"; // Display the image
    };

    reader.readAsDataURL(selectedFile);
  }
});

hotkeys("enter", function (event, handler) {
  switch (handler.key) {
    case "enter":
      if ($("#width").val() === "") {
        imageElement.width = imageElement.width;
      } else {
        imageElement.width = $("#width").val();
        $("#width").val("");
      }
      if ($("#height").val() === "") {
        imageElement.height = imageElement.height;
      } else {
        imageElement.height = $("#height").val();
        $("#height").val("");
      }
      break;
    default:
      alert(event);
  }
});

$("#hue-input").on("input", () => {
  let val = $("#hue-input").val();
  $("#imageElement").css("filter", `hue-rotate(${val}deg)`);
  $(".hue").text(`${Math.round(val)}/360`);
});

$("#sat-input").on("input", () => {
  let val = $("#sat-input").val();
  $("#imageElement").css("filter", `grayscale(${val}%)`);
  $(".sat").text(`${Math.round(val)}/100`);
});

$("#lig-input").on("input", () => {
  let val = $("#lig-input").val();
  $("#imageElement").css("filter", `brightness(${val}%)`);
  $(".lig").text(`${Math.round(val)}/500`);
});

$("#inv-colors").on("input", () => {
  if (val2) {
    $("#imageElement").css("filter", `invert(100%)`);
    val2 = false;
  } else {
    $("#imageElement").css("filter", `invert(0%)`);
    val2 = true;
  }
});

// Function to get the file extension from a URL
function getFileExtension(url) {
  const match = url.match(/\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i);
  if (match && match.length > 1) {
    return match[1];
  } else {
    return "jpeg";
  }
}

$(".dwnld").click(() => {
  const imageWithFilter = document.getElementById("imageElement");

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = imageWithFilter.width;
  canvas.height = imageWithFilter.height;

  // Apply the CSS filter to the canvas
  ctx.filter = "grayscale(100%)";
  ctx.drawImage(imageWithFilter, 0, 0, canvas.width, canvas.height);

  // Get the file extension from the original image source
  const originalSrc = imageWithFilter.src;
  const extension = getFileExtension(originalSrc);

  // Convert the canvas to a data URL with the original file extension
  const dataURL = canvas.toDataURL("image/" + extension);

  // Create a link to download the image
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "filtered_image." + extension;

  // Trigger the download
  link.click();
});
