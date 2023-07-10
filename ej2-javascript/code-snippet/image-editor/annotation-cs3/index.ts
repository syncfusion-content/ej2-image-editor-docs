

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

 let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
            }
        }
    });
    imageEditorObj.appendTo('#imageeditor');

     //Button click
    let button: Button = new Button({cssClass: `e-primary`, content:'Click'}, '#btnClick');
    document.getElementById('btn1Click').onclick = (): void => {
        let dimension: any = imageEditorObj.getImageDimension();
        imageEditorObj.drawRectangle(dimension.x, dimension.y);
    }
    document.getElementById('btn2Click').onclick = (): void => {
        let dimension: any = imageEditorObj.getImageDimension();
        imageEditorObj.drawEllipse(dimension.x, dimension.y);
    }
    document.getElementById('btn3Click').onclick = (): void => {
        let dimension: any = imageEditorObj.getImageDimension();
        imageEditorObj.drawLine(dimension.x, dimension.y);
    }
    document.getElementById('btn4Click').onclick = (): void => {
        let dimension: any = imageEditorObj.getImageDimension();
        imageEditorObj.drawArrow(dimension.x, dimension.y+10, dimension.x+50, dimension.y+10, 10);
    }
    document.getElementById('btn5Click').onclick = (): void => {
        let dimension: any = imageEditorObj.getImageDimension();
        imageEditorObj.drawPath([{x: dimension.x, y: dimension.y}, {x: dimension.x+50, y: dimension.y+50}, {x: dimension.x+20, y: dimension.y+50}], 8);
    }


