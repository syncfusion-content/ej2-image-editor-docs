

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';


//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '350px',
    toolbarUpdating: (args: any) => {
        if (args.toolbarType === 'pen') {
            for (let i: number = 0; i < args.toolbarItems.length; i++) {
                if (args.toolbarItems[i as number].align === "Center") {
                    if ((args.toolbarItems[i as number].tooltipText === "Stroke Width" || args.toolbarItems[i as number].tooltipText === "Remove") ||
                        (args.toolbarItems[i as number].type && args.toolbarItems[i as number].type === 'Separator')) {
                        args.toolbarItems[i as number].visible = false;
                    }
                }
            }
        }
    },
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
            }
        }
    });
    imageEditorObj.appendTo('#imageeditor');


