---
layout: post
title: Toolbar in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Toolbar in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Toolbar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in ##Platform_Name## Image editor control

Toolbars are used to interact and edit images with customization. Users can define their own toolbars for an image editor by customizing the items or the entire toolbar.

## Built-in Toolbar Items

Specifies the toolbar items to perform UI interactions. Refer to the built-in toolbar items for the default value.

* Crop,
* Transform,
* Annotate,
* ZoomIn,
* ZoomOut,
* Open,
* Reset,
* Save,
* Pan

## Custom Toolbar items

Users can define their own toolbars for an image editor by customizing the items or the entire toolbar. Users can achieve this by using the [`toolbar`](../../api/image-editor/#toolbar) property.

The built-in toolbar can be customized using the [`toolbar`](../../api/image-editor/#toolbar) property, so the specified toolbar items can be enabled in the Image Editor toolbar. And the contextual toolbar which is enabled while inserting annotations can also be customized in the toolbarUpdating event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-cs1" %}
{% endif %}

## Toolbar template

Specifies template to the Image Editor Toolbar. If you want to customize the entire toolbar in your own way use this property. The property depends on the ‘toolbar’.

The toolbar of the Image Editor can be replaced with the user specific UI using the [`toolbarTemplate`](../../api/image-editor/#toolbartemplate) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/toolbar-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/toolbar-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-template-cs1" %}
{% endif %}

## Customize Contextual Toolbar

The built-in contextual toolbar can be customized using the toolbar property, so the specified toolbar items can be enabled in the Image Editor toolbar. And the contextual toolbar which is enabled while inserting annotations can  be customized in the [`toolbarUpdating`](../../api/image-editor/#toolbarupdating) event

In the following example, the contextual toolbar for rectangle will be rendered with only stroke color by excluding fill color and stroke width using toolbarUpdating event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/toolbar-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/toolbar-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-template-cs2" %}
{% endif %}

## Show or Hide a toolbar

The [`toolbar`](../../api/image-editor/#toolbar) property controls the visibility of the toolbar in the Image Editor. When the Toolbar property is set to an empty list, the toolbar is hidden. Conversely, if the Toolbar property contains a list of items, the toolbar is shown, displaying the specified items. This feature provides flexibility for users to personalize their image editing experience. 

Here is an example of hiding the toolbar of the image editor using Toolbar property. 

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/toolbar-template-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-template-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/toolbar-template-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-template-cs3" %}
{% endif %}

## Show or Hide a toolbar Item

The [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property is utilized to control the visibility of toolbar items in the Image Editor. By default, the Toolbar property includes the default toolbar items. If you wish to hide the default toolbar items and specify your own set of required items, you need to explicitly define those items in the Toolbar property. This allows you to customize the toolbar by displaying only the specific items you require, tailoring the editing experience to your preferences. 

Here is an example of hiding the cropping and selection toolbar items using [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property. 

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/toolbar-template-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-template-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-template-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/toolbar-template-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-template-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-template-cs4" %}
{% endif %}