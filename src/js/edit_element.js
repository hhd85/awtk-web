function EditElement() {}

EditElement.create = function (type) {
  let el = new EditElement();
  el.init(type);

  return el
}

EditElement.prototype.init = function (type) {
  let id = "awtk_edit";
  let element = document.createElement(type);

  element.id = id;
  document.body.appendChild(element);

  this.edit = element;

  return true;
}

EditElement.prototype.moveResize = function (x, y, w, h) {
  this.edit.style.position = "absolute";

  this.edit.style.left = x + "px";
  this.edit.style.top = y + "px";
  this.edit.style.width = w + "px";
  this.edit.style.height = (h - 4) + "px";

  return true;
}

EditElement.prototype.setFontSize = function (fontSize) {
  this.edit.style['font-size'] = fontSize + "px";

  return true;
}

EditElement.prototype.setZIndex = function (zIndex) {
  this.edit.style['z-index'] = zIndex;

  return true;
}

EditElement.prototype.setFont = function (font) {
  this.edit.style['font'] = font;

  return true;
}

EditElement.prototype.setTextColor = function (color) {
  this.edit.style['color'] = color;

  return true;
}

EditElement.prototype.setBgColor = function (color) {
  this.edit.style['background-color'] = color;

  return true;
}

EditElement.prototype.setText = function (text) {
  this.edit.value = text;

  return true;
}

EditElement.prototype.getText = function () {
  return this.edit.value;
}

EditElement.prototype.show = function () {
  this.edit.style.visibility = 'visible';
  this.edit.style.zIndex = 8;
  this.edit.style.opacity = 1;
  this.edit.focus();

  return true;
}

EditElement.prototype.hide = function () {
  this.edit.style.opacity = 0;
  this.edit.style.zIndex = 0;
  this.edit.style.visibility = 'hidden';
  this.edit.blur();
  this.edit.onchange = null;

  return true;
}