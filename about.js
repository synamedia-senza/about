window.addEventListener("load", async () => {
  try {
    await senza.init();

    updateFields(senza.deviceManager.deviceInfo);
    updateFields(senza.envInfo);
    updateFields(senza.deviceManager.wifiInfo);
    
    senza.deviceManager.addEventListener("wifiInfoUpdated", () => {
      updateFields(senza.deviceManager.wifiInfo);
    });

    senza.lifecycle.configure({autoBackground: false});
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
