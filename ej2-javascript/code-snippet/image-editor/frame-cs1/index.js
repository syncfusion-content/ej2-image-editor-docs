ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
	created: function () {
		if (ej.base.Browser.isDevice) {
			imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
	}
  });
  imageEditorObj.appendTo('#imageeditor');

document.getElementById('matClick').onclick = function() {
  imageEditorObj.drawFrame(FrameType.Mat, 'red', 'blue', 20, 20, 20, 20, 'solid', 1);
}
document.getElementById('bevelClick').onclick = function() {
  imageEditorObj.drawFrame(FrameType.Bevel, 'red', 'blue', 20, 20, 20, 20, 'solid', 1);
}
document.getElementById('lineClick').onclick = function() {
  imageEditorObj.drawFrame(FrameType.Line, 'red', 'blue', 20, 20, 20, 20, 'solid', 1);
}
document.getElementById('insetClick').onclick = function() {
  imageEditorObj.drawFrame(FrameType.Inset, 'red', 'blue', 20, 20, 20, 20, 'solid', 1);
}
document.getElementById('hookClick').onclick = function() {
  imageEditorObj.drawFrame(FrameType.Hook, 'red', 'blue', 20, 20, 20, 20, 'solid', 1);
}

