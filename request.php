<?php
$xmldata='<?xml version="1.0" encoding="UTF-8"?>
<entries>
    <definition name="definition" author="John">
A statement of the exact meaning of a word, especially in a dictionary.
     </definition>
    <definition name = "bar" author = "Kate">
        A place that sells alcholic beverages.
        </definition name = "ajax" author = "Kimberly">
        <definition>
            Technique which involves the use of javascript and xml (or JSON).
        </definition>
        <definition name="html" author="Mary">
            The standard markup language for creating web pages and web applications.
        </definition>
        <definition name ="css" author="Chris">
            A style sheet language used for describing the presentation of a document written in a markup language.
        </definition>
        <definition name ="javascript" author="John">
            A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.
        </definition>
        <definition name ="php" author="Steve">
            A server-side scripting language, and a powerful tool for making dynamic and interactive websites.
        </definition>
    </entries>';
    
header('Content-Type: text/xml');
$xmlOutput = new SimpleXMLElement($xmldata);
echo $xmlOutput->asXML();
    


?>