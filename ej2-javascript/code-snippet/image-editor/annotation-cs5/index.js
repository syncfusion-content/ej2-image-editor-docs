ej.base.enableRipple(true);

var id;
var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: ['Annotate', "Line", "Rectangle", "Ellipse", "Circle", "Arrow", "Path"],
    showQuickAccessToolbar: false,
    shapeChanging: (args) => {
      if (args.action === 'select') {
          id = args.currentShapeSettings.id;  
      }
  },
	created: function () {
		if (ej.base.Browser.isDevice) {
			imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
	}
  });
  imageEditorObj.appendTo('#imageeditor');

document.getElementById('btnClick').onclick = function() {
	imageEditorObj.deleteShape(id)
}

