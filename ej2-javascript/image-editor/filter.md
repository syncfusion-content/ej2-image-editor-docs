---
layout: post
title: Filter in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Open save in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javaScript
control: Filter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filter in ##Platform_Name## Image editor control

Filters are pre-defined effects that can be applied to an image to alter its appearance or mood. Image filters can be used to add visual interest or to enhance certain features of the image. Some common types of image filters include cold, warm, chrome, sepia, and invert. This can be done by either using the toolbar or the [`applyImageFilter`](../../api/image-editor/#applyimagefilter) method which takes a single parameter: the filter applied to an image.

## Apply filter effect

In [`applyImageFilter`](../../api/image-editor/#applyimagefilter) method is used to perform filtering by specifying the type of filter as [`applyImageFilter`](../../api/image-editor/#applyimagefilter) and send it a first parameter of the method.

* filterOption - Specifies the filter options to the image.

In the following example, you can using the applyImageFilter method in the button click event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/filter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/filter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/filter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/filter-cs1" %}
{% endif %}