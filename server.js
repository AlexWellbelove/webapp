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

function send(){
  var form = document.getElementById('uploadform');
  var fileSelect = document.getElementById('browse');
  var uploadButton = document.getElementById('submit');

    if(form){
    form.addEventListener("submit", event, false);

      event.preventDefault();
      // Update button text.
      uploadButton.innerHTML = 'Uploading...';
      var files = fileSelect.files;
      var formData = new FormData();
      // Loop through each of the selected files.
      for (var i = 0; i < files.length; i++) {
        var file = files[i];

        // Check the file type.
        if (!file.type.match('image.*')) {
          continue;
        }
        // Add the file to the request.
        formData.append('photos[]', file, file.name);
      }
      formData.append(name, file);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'handler.php', true);
      //fuckup occurs here
      xhr.onload = function () {

        console.log("got here");
        if (xhr.status === 200) {


      // File(s) uploaded.
        uploadButton.innerHTML = 'Upload';
        } else {
          alert('An error occurred!');
    }
    }
    xhr.send(formData);
    console.log("worked");
  };
  }

      // The rest of the code will go here...
