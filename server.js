let enabled = true;

function toggle(){
  if (enabled) {
    document.getElementById('status').innerHTML = "The unattended display is Disabled";
    enabled = false;
  }
  else {
    document.getElementById('status').innerHTML = "The unattended display is Enabled";
    enabled = true;
  }
}
