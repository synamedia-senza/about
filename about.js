window.addEventListener("load", async () => {
  try {
    await hs.init();

    updateFields(hs.deviceManager.deviceInfo);
    updateFields(hs.envInfo);
    updateFields(hs.deviceManager.wifiInfo);
    
    hs.deviceManager.addEventListener("wifiInfoUpdated", () => {
      updateFields(hs.deviceManager.wifiInfo);
    });
  } catch (error) {
    console.error(error);
  }
});

function updateFields(object) {
  for (let field in object) {
    let element = document.getElementById(field);
    if (element && object[field]) {
      element.innerHTML = object[field];
    }
  }
}
