ej.base.enableRipple(true);

var isBtnClick = false;
var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    fontFamily: { default: 'Arial', items: [{id: 'arial', text: 'Arial'}, {id: 'brush script mt', text: 'Brush Script MT'},
      {id: 'papyrus', text: 'Papyrus'}, {id: 'times new roman', text: 'Times New Roman'}, {id: 'courier new', text: 'Courier New'}] },
    created: function () {
      imageEditorObj.open('bee-eater.png');
    },
    fileOpened: function () {
      if (!isBtnClick) {
        let dimension = imageEditorObj.getImageDimension();
        imageEditorObj.drawText(dimension.x,dimension.y, null, 'Arial');
      }
    },
  });
  imageEditorObj.appendTo('#imageeditor');

  document.getElementById('brushScriptMT').onclick = function() {
    isBtnClick = true;
    imageEditorObj.reset();
    let dimension = imageEditorObj.getImageDimension();
	  imageEditorObj.drawText(dimension.x,dimension.y, null, 'Brush Script MT');
    isBtnClick = false;
  }

  document.getElementById('papyrus').onclick = function() {
    isBtnClick = true;
    imageEditorObj.reset();
    let dimension = imageEditorObj.getImageDimension();
	  imageEditorObj.drawText(dimension.x,dimension.y, null, 'Papyrus');
    isBtnClick = false;
  }

  document.getElementById('timesNewRoman').onclick = function() {
    isBtnClick = true;
    imageEditorObj.reset();
    let dimension = imageEditorObj.getImageDimension();
	  imageEditorObj.drawText(dimension.x,dimension.y, null, 'Times New Roman');
    isBtnClick = false;
  }

  document.getElementById('courierNew').onclick = function() {
    isBtnClick = true;
    imageEditorObj.reset();
    let dimension = imageEditorObj.getImageDimension();
	  imageEditorObj.drawText(dimension.x,dimension.y, null, 'Courier New');
    isBtnClick = false;
  }