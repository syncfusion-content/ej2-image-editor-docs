ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
	height: '330px',
    toolbar: [],
    zoomSettings: {maxZoomFactor: 30},
    zoomLevel: 1,
	created: function () {
		if (ej.base.Browser.isDevice) {
			imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
	}
  });
  imageEditorObj.appendTo('#imageeditor');

document.getElementById('btnClick').onclick = function() {
	if (imageEditorObj.zoomLevel < 1) {
        imageEditorObj.zoomLevel += 0.1;
    }
    else {
        imageEditorObj.zoomLevel += 1;
    }
    if (imageEditorObj.zoomLevel > imageEditorObj.zoomSettings.maxZoomFactor) {
        imageEditorObj.zoomLevel = imageEditorObj.zoomSettings.maxZoomFactor;
    }
    imageEditorObj.zoom(imageEditorObj.zoomLevel); // Zoom in
}

