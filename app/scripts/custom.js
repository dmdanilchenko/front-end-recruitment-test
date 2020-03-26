function cloneBacon() {
  const imgCollection = document.getElementsByClassName('bacon-img');
  if (imgCollection.length) {
    let imgNew = imgCollection[0].cloneNode(true);
    imgCollection[0].parentElement.appendChild(imgNew);
  }
}
