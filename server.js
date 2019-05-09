let enabled = true;

function toggle(){
  if (enabled) {
    document.getElementById('status').innerHTML = "The unattended display is Disabled";
    document.getElementById('toggler').innerHTML = "Enable";
    enabled = false;
  }
  else {
    document.getElementById('status').innerHTML = "The unattended display is Enabled";
    document.getElementById('toggler').innerHTML = "Disable";
    enabled = true;
  }
}
