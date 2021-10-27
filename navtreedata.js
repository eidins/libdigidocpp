/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "libdigidocpp", "index.html", [
    [ "Libdigidocpp Programmer's Guide", "manual.html", [
      [ "Introduction", "manual.html#introduction", [
        [ "About DigiDoc", "manual.html#about", null ],
        [ "Format of digitally signed file", "manual.html#format", [
          [ "BDOC container format", "manual.html#container", null ],
          [ "BDOC signature profiles", "manual.html#profiles", [
            [ "BDOC signature with time-mark", "manual.html#BDOC-TM", null ],
            [ "BDOC signature with time-stamp", "manual.html#BDOC-TS", null ]
          ] ],
          [ "ASiC-S container format", "manual.html#asics", null ]
        ] ]
      ] ],
      [ "Release Notes", "manual.html#releasenotes", null ],
      [ "Overview", "manual.html#overview", [
        [ "References and additional resources", "manual.html#References", null ],
        [ "Terms and acronyms", "manual.html#Terms", null ],
        [ "Supported functional properties", "manual.html#Supported", null ],
        [ "Component model", "manual.html#Component", null ],
        [ "Dependencies", "manual.html#Dependencies", [
          [ "Software libraries", "manual.html#libraries", null ],
          [ "XML Schemas", "manual.html#Schemas", [
            [ "XML schema modifications", "manual.html#schema-modification", null ]
          ] ]
        ] ]
      ] ],
      [ "Configuring Libdigidocpp", "manual.html#conf", [
        [ "Loading configuration settings", "manual.html#loading", null ],
        [ "Configuration parameters", "manual.html#parameters", [
          [ "Logging settings", "manual.html#logging-settings", null ],
          [ "Time-stamping service settings", "manual.html#TS-settings", null ],
          [ "PKCS#11 settings", "manual.html#pkcs11-settings", null ],
          [ "Trust anchor/TSL settings", "manual.html#CA-settings", null ],
          [ "HTTP proxy settings", "manual.html#proxy-settings", null ],
          [ "Digest type settings", "manual.html#digest-settings", null ],
          [ "Settings for signing OCSP requests", "manual.html#ocspsigning-settings", null ],
          [ "OCSP responder settings", "manual.html#ocspresponder-settings", null ]
        ] ],
        [ "Sample configuration file", "manual.html#sample-conf", null ]
      ] ],
      [ "Using Libdigidocpp API", "manual.html#usage", [
        [ "Initialization", "manual.html#initialization", null ],
        [ "Creating and signing a DigiDoc document (local signing)", "manual.html#creating", [
          [ "Creating a DigiDoc container", "manual.html#containercreate", null ],
          [ "Adding data files", "manual.html#adddatafile", null ],
          [ "Adding signatures", "manual.html#API-add-sign", [
            [ "Optionally specify the signature profile", "manual.html#API-sign-profile", null ],
            [ "Optionally specify additional signer's data", "manual.html#API-sign-data", null ],
            [ "Optionally specify signature digest method", "manual.html#API-signature-hash", null ],
            [ "Create the signature", "manual.html#API-sign-create", null ],
            [ "Validating the created signatures", "manual.html#validatesig", null ],
            [ "Save container changes", "manual.html#savesig", null ]
          ] ]
        ] ],
        [ "Creating and signing a DigiDoc document (external signing, e.g. in browser)", "manual.html#websigning", null ],
        [ "Reading and writing DigiDoc documents", "manual.html#containeropen", null ],
        [ "Validating signature containers and signatures", "manual.html#validate", [
          [ "Using the main validation method", "manual.html#main-method", null ],
          [ "Checking for additional errors/warnings", "manual.html#additional", null ],
          [ "Determining the validation status", "manual.html#validation-status", [
            [ "Validation status VALID WITH WARNINGS", "manual.html#validatewarnings", null ]
          ] ],
          [ "Additional information about validation", "manual.html#validation-info", [
            [ "Overview of validation activities", "manual.html#validation-overview", null ]
          ] ]
        ] ],
        [ "Extracting data files", "manual.html#extracting", null ],
        [ "Removing signatures and data files", "manual.html#removing", null ],
        [ "Shutting down the library", "manual.html#shutting-down", null ],
        [ "Exception handling", "manual.html#exceptions", null ]
      ] ],
      [ "Libdigidocpp utility program", "manual.html#utility", [
        [ "Creating and signing a document (local signing)", "manual.html#Creating", null ],
        [ "Creating and signing a document (external signing, e.g. in browser)", "manual.html#websign", null ],
        [ "Opening document, validating signatures and extracting data files", "manual.html#Opening", null ],
        [ "Adding signatures", "manual.html#Adding", null ],
        [ "Removing signatures and data files", "manual.html#Removing", null ]
      ] ],
      [ "National and cross-border support", "manual.html#supported-tokens", [
        [ "TSL list usage in Libdigidocpp", "manual.html#TSL-overview", [
          [ "TSL initialization process", "manual.html#TSL-init", null ]
        ] ],
        [ "Identity tokens in Libdigidocpp", "manual.html#tokens", null ]
      ] ],
      [ "Interoperability testing", "manual.html#testing", [
        [ "DigiDoc framework cross-usability tests", "manual.html#cross-usability", null ]
      ] ],
      [ "Libdigidocpp implementation notes", "manual.html#implementation-notes", [
        [ "Digital signature related notes", "manual.html#signature-notes", null ],
        [ "Certificate related notes", "manual.html#cert-notes", null ],
        [ "Container related notes", "manual.html#container-notes", null ]
      ] ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Namespace Members", "namespacemembers.html", [
      [ "All", "namespacemembers.html", null ],
      [ "Functions", "namespacemembers_func.html", null ],
      [ "Typedefs", "namespacemembers_type.html", null ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"classdigidoc_1_1X509Cert.html#ae043d5889073a6ccd4168e0a5329257b",
"manual.html#containercreate"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';