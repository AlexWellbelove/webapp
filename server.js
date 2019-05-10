let enabled = true;

function toggle() {
  if (enabled) {
    document.getElementById('status').innerHTML = "The unattended display is Disabled";
    document.getElementById('toggler').innerHTML = "Enable";
    enabled = false;
  } else {
    document.getElementById('status').innerHTML = "The unattended display is Enabled";
    document.getElementById('toggler').innerHTML = "Disable";
    enabled = true;
  }
}

function previewFiles() {

  var preview = document.querySelector('#preview');
  var files = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      var reader = new FileReader();

      reader.addEventListener("load", function() {
        var image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild(image);
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }
}
