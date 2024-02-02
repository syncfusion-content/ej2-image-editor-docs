ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '350px',
     toolbarUpdating: function (args) {
        if (args.toolbarType === 'pen') {
            for (let i = 0; i < args.toolbarItems.length; i++) {
                if (args.toolbarItems[i].align === "Center") {
                    if ((args.toolbarItems[i].tooltipText === "Stroke Width" || args.toolbarItems[i].tooltipText === "Remove") ||
                        (args.toolbarItems[i].type && args.toolbarItems[i].type === 'Separator')) {
                        args.toolbarItems[i].visible = false;
                    }
                }
            }
        }
     },
     created: function () {
        if (ej.base.Browser.isDevice) {
          imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
      }
  });
  imageEditorObj.appendTo('#imageeditor');


