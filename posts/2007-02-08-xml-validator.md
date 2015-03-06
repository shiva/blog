---
layout: post
title: XML Validator
categories: []
tags:
- Tools
published: true
meta:
  tags: ''
  _utw_tags_0: s:208:"a:4:{i:0;O:8:"stdClass":1:{s:3:"tag";s:15:"Random-Thoughts";}i:1;O:8:"stdClass":1:{s:3:"tag";s:3:"XML";}i:2;O:8:"stdClass":1:{s:3:"tag";s:9:"XML-Tools";}i:3;O:8:"stdClass":1:{s:3:"tag";s:13:"XML-Validator";}}";
  _aktt_hash_meta: ''
  aktt_notify_twitter: 'no'
author:
  login: admin
  email: shiv@shiv.me
  display_name: Shiva
  first_name: Shiva
  last_name: Velmurugan
---

It is quite surprising that there are hardly any open-source to validate XML out there. I had the need to validate a auto-generated XML output against a valid xsd, to see if the code that I wrote to generate XML was producing not only syntactically correct XML, but also XML that was data-valid. **XML Validator**, provides an&nbsp;UI that allows you to check the validity of any XML, in with reference to its xsd. It is free for Personal and Commercial use without any warranties. So don't come to me if it makes your dog barks all night, or if your computer commits suicide.

## Download it [here](http://shvelmur.com/downloads/projects/XMLValidator.zip).

[![](/images/XMLValidator_thumb12.png)](http://shvelmur.com/images/wpress/XMLValidator_9477/XMLValidator14.png) 

#### **Features (more like limitations now - :) )**

*   Compare syntactically valid XML against its XSD.
*   Select files by using windows controls.
*   No install required.

#### **Known behavior**

*   Stops level traversal upon error.
*   Uses MSXML parser/validator.
*   Expects sub-elements to occur in the same order as defined.
*   Both XML/XSD should be local files.
*   If a namespace is used for the XML, it should be provided as input.

#### **Features in future releases**

*   Support for multiple parsers

    *   xerces
    *   xpp
    *   JDOM

*   CLI support for integration with test scripts.
*   Validate XML syntax.
*   Pick XSD from the URI (if mentioned).
*   Read namespace from XML/XSD.
*   Allow copy/paste XML/XSD.
*   Allow URL as input source for XML/XSD.

This is a result of 30 mins of fiddling around with SharpDevelop, so it is not very complete nor does it have a lot of features. I would like to take it there. Your comments and suggestions for new features are welcome. 

<div>[tags]XML, XML Tools, XML Validator[/tags]</div>