# DynamicsCrm-Clone

[![Join the chat at https://gitter.im/yagasoft/DynamicsCrm-Clone](https://badges.gitter.im/yagasoft/DynamicsCrm-Clone.svg)](https://gitter.im/yagasoft/DynamicsCrm-Clone?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### Version: 3.1.1.1
---

A CRM solution that allows creating templates to clone records in CRM using a button.

### Features

  + Build templates
    + Choose the fields to copy to the new record
    + Optionally, choose a field to flag the record as a clone
  + Multiple templates for the same entity are displayed in a drop-down list

### Guide

  + Create a template in the Clone-Record Template entity
  + Go to the entity view, select a record, and you will see the button appear

I will post a complete guide soon.

### Dependencies

  + Common.cs, CommonGeneric.js, and CrmSchema.js
    + Can be found in the DynamicsCrm-Libraries repository
  + Generic Base solution ([DynamicsCrm-BaseSolution](https://github.com/yagasoft/DynamicsCrm-BaseSolution))
  + "Generic Base - App Ribbon" solution
  + CRM Logger solution ([DynamicsCrm-CrmLogger](https://github.com/yagasoft/DynamicsCrm-CrmLogger))

## Changes

#### _v3.1.1.1 (2019-02-27)_
+ Changed: moved to a new namespace
#### _v2.1.2.1 (2018-10-01)_
+ Fixed: error on AJAX call
#### _v2.1.1.1 (2018-09-06)_
+ Changed: cleaned the project of obsolete components

---
**Copyright &copy; by Ahmed Elsawalhy ([Yagasoft](http://yagasoft.com))** -- _GPL v3 Licence_
