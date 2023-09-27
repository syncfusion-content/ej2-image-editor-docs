ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: ['Resize', 'Save', 'Reset'],
	created: function () {
        imageEditorObj.open('bee-eater.png');
	}
  });
  imageEditorObj.appendTo('#imageeditor');


