

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';


//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '350px',
    toolbar: ['Annotation' , 'Finetune' , 'Filter' , 'Confirm' , 'Reset' , 'Save', 'ZoomIn', 'ZoomOut'],
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
            }
        }
    });
    imageEditorObj.appendTo('#imageeditor');


