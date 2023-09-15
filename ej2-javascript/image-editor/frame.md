---
layout: post
title: Frame in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Open save in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javaScript
control: Frame 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Frame in the ##Platform_Name## Image Editor control

Frame are pre-defined effects that can be applied to an image to alter its appearance or mood. Image filters can be used to add visual interest or to enhance certain features of the image. Some common types of image frame include Mat, Bevel, Line, Inset, Hook. This can be done by either using the toolbar or the [`applyImageFilter`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#applyimagefilter) method which takes a single parameter: the filter applied to an image.

## Apply frame

The [`drawFrame`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#applyimagefilter) method is utilized to apply frame to an image. By passing the desired filter type as the first parameter of the method, specified as [`ImageFilterOption`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/imageFilterOption/) the method applies the corresponding filter to the image. This allows for easy and convenient application of various filters to enhance or modify the image based on the chosen filter type.

* frameType - Specifies the frame options to the image.

In the following example, you can using the applyImageFilter method in the button click event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/frame-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/frame-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/frame-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/frame-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/frame-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/frame-cs1" %}
{% endif %}

## Frame Changing event

The [`frameChanging`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#frameChanging) event is triggered when applying frame on the image. This event provides information encapsulated within an object, which includes details about the frame applied in an image. This information encompasses:

Frame Type: This indicates the specific type of frame being applied, whether it's a mat, bevel, line, or hook.

Customization Values: These values contain information about any adjustments or modifications made to the frame. For instance, if the frame can be customized with attributes like color, size, or style, these details are conveyed within the event object.

The parameter available in the [`FrameChangeEventArgs`] is

FrameChangeEventArgs.previousFrameSetting: The frame settings including size, color, inset, offset, gradient color which is applied before changing the frame.

FrameChangeEventArgs.currentFrameSetting: The frame settings including size, color, inset, offset, gradient color which is going to apply after changing the frame.

FrameChangeEventArgs.cancel: Specifies a boolean value to cancel the frame changing action.