

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

 let isBtnClick: boolean = false;
 let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    fontFamily: { default: 'Arial', items: [{id: 'arial', text: 'Arial'}, {id: 'brush script mt', text: 'Brush Script MT'},
      {id: 'papyrus', text: 'Papyrus'}, {id: 'times new roman', text: 'Times New Roman'}, {id: 'courier new', text: 'Courier New'}] },
    created: () => {
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

    document.getElementById('brushScriptMT').onclick = (): void => {
        isBtnClick = true;
        imageEditorObj.reset();
        let dimension = imageEditorObj.getImageDimension();
        imageEditorObj.drawText(dimension.x,dimension.y, null, 'Brush Script MT');
        isBtnClick = false;
    }    

    document.getElementById('papyrus').onclick = (): void => {
        isBtnClick = true;
        imageEditorObj.reset();
        let dimension = imageEditorObj.getImageDimension();
        imageEditorObj.drawText(dimension.x,dimension.y, null, 'Papyrus');
        isBtnClick = false;
    }

    document.getElementById('timesNewRoman').onclick = (): void => {
        isBtnClick = true;
        imageEditorObj.reset();
        let dimension = imageEditorObj.getImageDimension();
        imageEditorObj.drawText(dimension.x,dimension.y, null, 'Times New Roman');
        isBtnClick = false;
    }

    document.getElementById('courierNew').onclick = (): void => {
        isBtnClick = true;
        imageEditorObj.reset();
        let dimension = imageEditorObj.getImageDimension();
        imageEditorObj.drawText(dimension.x,dimension.y, null, 'Courier New');
        isBtnClick = false;
    }