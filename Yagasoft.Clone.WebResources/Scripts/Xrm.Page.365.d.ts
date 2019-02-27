//This software is the property of http://msxrmtools.com. It can be used by anyone without requiring permission from 
//publisher however  re-publishing of this software is requires that due credit should be given to http://msxrmtools.com 
//with a backlink to this site.

var Xrm = new _xrm();

function _xrm() {
    this.Page = new _page();
    this.Utility = new _utility(); 
    this.__namespace = true;
}

_xrm.prototype.toString=function()
{
    return "[object Xrm namespace]";
}

function _page() {
    this.__namespace = true;
    this.context = new _context();
    this.data = new _data();
    this.ui = new _ui();
    this.getAttribute= function (argument)
    {
        /// <summary>
        /// Returns one or more attributes depending on the arguments passed.
        /// </summary>
        /// <param name="argument" mayBeNull="true" optional="true" >
        /// <para>1: None: Returns an array of all the attributes.</para>
        /// <para>2: String: Returns the attribute where the argument matches the name.</para>
        /// <para>3: Number: Returns the attribute where the argument matches the index.</para>
        /// <para>4: Function: Returns any attributes that cause the delegate function to return true.</para>
        /// </param>
        return Xrm.Page.data.entity.attributes.get(argument);
    }
    this.getControl = function (argument) {
        /// <summary>
        /// Returns one or more controls depending on the arguments passed.
        /// </summary>
        /// <param name="argument" mayBeNull="true" optional="true" >
        /// <para>1: None: Returns an array of all the controls.</para>
        /// <para>2: String: Returns the control where the argument matches the name.</para>
        /// <para>3: Number: Returns the control where the argument matches the index.</para>
        /// <para>4: Function: Returns any controls that cause the delegate function to return true.</para>
        /// </param>
        return Xrm.Page.ui.controls.get(argument);
    }
}
_page.prototype.toString = function () {
    return "[object Xrm namespace]";
}

function _utility()
{
    this.alertDialog = function (message, onCloseCallback) {
        /// <summary>
        /// Displays a dialog box containing an application-defined message. [Remarks: This method is only available for Updated Entities.]
        /// </summary>
        /// <param name="message" type="String" mayBeNull="false" optional="false" >
        /// The text of the message to display in the dialog.
        /// </param>
        /// <param name="onCloseCallback" type="Function" mayBeNull="true" optional="false" >
        /// A function to execute when the OK button is clicked.
        /// </param>
        /// <returns type="dialog" />
    }
    this.confirmDialog = function (message, yesCloseCallback, noCloseCallback) {
        /// <summary>
        /// Displays a confirmation dialog box that contains an optional message as well as OK and Cancel buttons. [Remarks: This method is only available for Updated Entities.]
        /// </summary>
        /// <param name="message" type="String" mayBeNull="false" optional="false" >
        /// The text of the message to display in the dialog.
        /// </param>
        /// <param name="yesCloseCallback" type="Function" mayBeNull="true" optional="false" >
        /// A function to execute when the OK button is clicked.
        /// </param>
        /// <param name="noCloseCallback" type="Function" mayBeNull="true" optional="false" >
        ///A function to execute when the Cancel button is clicked.
        /// </param>
        /// <returns type="dialog" />
    }
    this.isActivityType = function (entityName) {
        /// <summary>
        /// Determine if an entity is an activity entity.
        /// </summary>
        /// <param name="entityName" type="String" mayBeNull="false" optional="false" >
        /// The logicalName of an entity.
        /// </param>
        /// <returns type="Boolean" />

    }
    this.openEntityForm = function (name, id, parameters) {
        /// <summary>
        /// Opens an entity form.
        /// </summary>
        /// <param name="name" type="String" mayBeNull="false" optional="false" >
        /// The logical name of an entity.
        /// </param>
        /// <param name="id" type="String" mayBeNull="true" optional="true" >
        /// The string representation of a unique identifier or the record to open in the form. If not set, a form to create a new record is opened.
        /// </param>
        /// <param name="parameters" type="Object" mayBeNull="true" optional="true" >
        /// A dictionary object that passes extra query string parameters to the form. Invalid query string parameters will cause an error. 
        /// </param>
        /// <returns type="window" />
    }
    this.openWebResource = function (webResourceName, webResourceData, width, height) { 
            /// <summary>
            /// Opens an HTML web resource.
            /// </summary>
            /// <param name="webResourceName" type="String" mayBeNull="false" optional="false" >
            /// The name of the HTML web resource to open.
            /// </param>
            /// <param name="webResourceData" type="String" mayBeNull="true" optional="true" >
            /// Data to be passed into the data parameter.
            /// </param>
            /// <param name="width" type="Number" mayBeNull="true" optional="true" >
            /// The width of the window to open in pixels.
            /// </param>
            /// <param name="height" type="Number" mayBeNull="true" optional="true" >
            /// The height of the window to open in pixels.
            /// </param>
            ///<returns type="window" />
        }
    }


function _context() {
    this.client = new _client();
    this.getClientUrl = function () {
        /// <summary>
        /// Returns the base URL that was used to access the application.
        /// </summary>
        /// <returns type="String" />        
    }
    this.getCurrentTheme = function () {
        /// <summary>
        /// Returns a string representing the current Microsoft Office Outlook theme chosen by the user.
        /// </summary>
        /// <returns type="String" />        
    }
    this.getIsAutoSaveEnabled = function () {
        /// <summary>
        /// This method was introduced with Microsoft Dynamics CRM 2015 and Microsoft Dynamics CRM Online 2015 Update.
      ///  Returns whether Autosave is enabled for the organization. 
        /// </summary>
        /// <returns type="Boolean" />        
    }
    this.getOrgLcid = function () {
        /// <summary>
        /// Returns the LCID value that represents the base language for the organization.
        /// </summary>
        /// <returns type="Number" />        
    }
    this.getOrgUniqueName = function () {
        /// <summary>
        /// Returns the unique text value of the organization’s name.
        /// </summary>
        /// <returns type="String" />  
    }
    this.getQueryStringParameters = function () {
        /// <summary>
        /// Returns a dictionary object of key value pairs that represent the query string arguments that were passed to the page.
        /// </summary>
        /// <returns type="Object" />  
    }
    this.getTimeZoneOffsetMinutes = function () {
        /// <summary>
        /// Returns the difference between the local time and Coordinated Universal Time (UTC).
        /// </summary>
        /// <returns type="Number" />  
    }
    this.getUserId = function () {
        /// <summary>
        /// Returns the GUID of the SystemUser.Id value for the current user.
        /// </summary>
        /// <returns type="String" />  
    }
    this.getUserLcid = function () {
        /// <summary>
        /// Returns the LCID value that represents the Microsoft Dynamics CRM Language Pack that is the user selected as their preferred language.
        /// </summary>
        /// <returns type="Number" />  
    }
    this.getUserName = function () {
        /// <summary>
        /// Returns the name of the current user.
        /// </summary>
        /// <returns type="String" />  
    }
    this.getUserRoles = function () {
        /// <summary>
        /// Returns an array of strings that represent the GUID values of each of the security roles that the user is associated with or any teams that the user is associated with.
        /// </summary>
        /// <returns type="Array" />  
    }
   
    this.prependOrgName = function (sPath) {
        /// <summary>
        /// Prepends the organization name to the specified path.
        /// </summary>
        /// <param name="" type="String" mayBeNull="false" optional="false" >
        /// A local path to a resource.
        /// </param>
        /// <returns type="String" />  
    }
}

function _client()
{
    this.getClient = function () {
        /// <summary>
        /// Returns a value to indicate which client the script is executing in.
        /// </summary>
        /// <returns type="String" />
    }
    this.getClientState = function () {
        /// <summary>
        /// Returns a value to indicate the state of the client.
        /// </summary>
        /// <returns type="String" />
    }
    this.getFormFactor = function () {
        /// <summary>
        /// Use this method to get information about the kind of device the user is using.
        /// </summary>
        /// <returns type="Number" />
    }
}

function _data() {
    this.entity = new _entity();
    this.process = new _process();
    this.refresh = function (save) {

        /// <summary>
        /// Asynchronously refreshes and optionally saves all the data of the form without reloading the page. Remarks: This method is only available for Updated Entities.]
        /// </summary>
        /// <param name="save" type="boolean" mayBeNull="false" optional="false" >
        /// A Boolean value to indicate if data should be saved after it is refreshed.
        /// </param> 

        return new _then();
    }
    this.save = function () { return new _then(); }
}

function _then() {
    this.then = function (successCallback, errorCallback) {
        /// <param name="successCallback" type="Fucntion" mayBeNull="false" optional="false" >
        /// A function to call when the operation succeeds.
        /// </param>
        /// <param name="errorCallback" type="Fucntion" mayBeNull="false" optional="false" >
        /// A function to call when the operation fails.
        /// </param>
    };
};

function _entity() {
    this.attributes = new _attributesCollection();
    this.getDataXml = function () {
        /// <summary>
        /// Returns a string representing the XML that will be sent to the server when the record is saved. Only data in fields that have changed are set to the server.
        /// </summary>
        /// <returns type="String" />
    };
    this.getEntityName = function () {
        /// <summary>
        /// Returns a string representing the logical name of the entity for the record
        /// </summary>
        /// <returns type="String" />
    };
    this.getId = function () {
        /// <summary>
        /// Returns a string representing the GUID id value for the record.
        /// </summary>
        /// <returns type="String" />
    };
    this.getIsDirty = function () {

        /// <summary>
        /// Returns a Boolean value that indicates if any fields in the form have been modified
        /// </summary>
        /// <returns type="Boolean" />

    };
    this.addOnSave = function (functionReference) {
        /// <summary>
        /// Adds the event handler function to be called when the entity is saved. 
        /// It will be added to the bottom of the event pipeline and called after the other event handlers.
        /// </summary>
        /// <param name="functionReference" type="Function" mayBeNull="false" optional="false" >
        /// Fucntion to be called when the record is saved.
        /// </param>


    };
    this.removeOnSave = function (functionReference) {
        /// <summary>
        /// Removes the the event handler function from the event pipeline.
        /// </summary>
        /// <param name="functionReference" type="Function" mayBeNull="false" optional="false" >
        /// Fucntion to be removed from event pipeline.
        /// </param>

    };
    this.getPrimaryAttributeValue = function () {

        /// <summary>
        /// Gets a string for the value of the primary attribute of the entity. [Remarks: This method is only available for Updated Entities.]
        /// </summary>
        /// <returns type="String" />

    };
    this.save = function (argument) {
        /// <summary>
        /// Saves the record.
        /// </summary>
        /// <param name="argument" type="String" mayBeNull="true" optional="true" >
        /// <para>1: None: If no parameter is included the record will simply be saved. </para>
        /// <para>2: "saveandclose" : Saves record and closes the form.</para>   
        /// <para>3: "saveandnew" : Saves the record and opens a blank form for a new record.</para>
        /// </param>
    }
}


function _process()
{
    this.getActiveProcess = function()
    {
        /// <summary>
        /// Returns a Process object representing the active process.
        /// </summary>
        /// <returns type="Process" />
        return new _processObj();
    }
    this.setActiveProcess = function (processId, callbackFunction) {
        /// <summary>
        /// Set a Process as the active process.
        /// </summary>
        /// <param name="processId" type="String" mayBeNull="false" optional="false" >
        /// The Id of the process to make the active process. 
        /// </param>
        /// <param name="callbackFunction" type="String" mayBeNull="false" optional="false" >
        /// A function to call when the operation is complete. This callback function is passed one of the following string values to indicate whether the operation succeeded.
        /// </param>
    }
    this.getActiveStage = function () {
        /// <summary>
        /// Returns a Stage object representing the active stage
        /// </summary>
        /// <returns type="Stage" />
        return new _stageObj();
    }
    this.setActiveStage = function (stageId, callbackFunction) {
        /// <summary>
        /// Returns a Stage object representing the active stage
        /// <para>	crossEntity  : The stage must be one for the current entity.</para>
        /// <para>	invalid   : There are three reasons why this value may be returned:
        /// 1.The stageId parameter is a non-existent stage ID value.
        /// 2.The active stage isn’t the selected stage
        /// 3.The record hasn’t been saved yet.
        /// </para>
        /// <para>	unreachable   : The stage exists on a different path.</para>
        /// <para>	dirtyForm   : This value will be returned if the data in the page is not saved.</para>
        /// </summary>
        /// <param name="stageId" type="String" mayBeNull="false" optional="false" >
        /// The ID of the completed stage for the entity to make the active stage.
        /// </param>
        /// <param name="callbackFunction" type="String" mayBeNull="false" optional="false" >
        /// An optional function to call when the operation is complete.
        ///The callback function will be passed a string value of “success” if the operation completes successfully.
        /// </param>
    }
    this.getActivePath = function () {
        /// <summary>
        /// Use this method to get a collection of stages currently in the active path with methods to interact with the stages displayed in the business process flow control.
        /// The active path represents stages currently rendered in the process control based on the branching rules and current data in the record.
        /// </summary>
        /// <returns type="Collection" />
    }
    this.getEnabledProcesses = function (callbackFunction) {
        /// <summary>
        /// Use this method to asynchronously retrieve the enabled business process flows that the user can switch to for an entity.
        /// </summary>
        /// <returns type="Collection" />
    }
    this.getSelectedStage = function () {
        /// <summary>
        /// Use this method to get the currently selected stage.
        /// </summary>
        /// <returns type="Stage" />
    }
    this.addOnStageChange = function (handler) {
        /// <summary>
        /// Use this to add a function as an event handler for the OnStageChange event so that it will be called when the business process flow stage changes.
        /// </summary>
        /// <param name="handler" type="function reference" mayBeNull="false" optional="false" >
        /// </param>

    }
    this.removeOnStageChange = function (handler) {
        /// <summary>
        /// Use this to remove a function as an event handler for the OnStageChange event.
        /// </summary>
        /// <param name="handler" type="function reference" mayBeNull="false" optional="false" >
        /// </param>
    }
    this.addOnStageSelected = function (handler) {
        /// <summary>
        /// Use this to add a function as an event handler for the OnStageSelected event so that it will be called when a business process flow stage is selected.
        /// </summary>
        /// <param name="handler" type="function reference" mayBeNull="false" optional="false" >
        /// </param>
    }
    this.removeOnStageSelected = function (handler) {
        /// <summary>
        /// Use this to remove a function as an event handler for the OnStageSelected event.
        /// </summary>
        /// <param name="handler" type="function reference" mayBeNull="false" optional="false" >
        /// </param>
    }
    this.moveNext = function (callbackFunction) {
        /// <summary>
        /// Progresses to the next stage.
        /// </summary>
        /// <param name="callbackFunction" type="function reference" mayBeNull="false" optional="true" >
        /// <para>	success : The operation succeeded.</para>
        /// <para>	crossEntity : The next stage is for a different entity.</para>
        /// <para>	end : The active stage is the last stage of the active path.</para>
        /// <para>	invalid : The operation failed because the selected stage isn’t the same as the active stage.</para>
        /// <para>	dirtyForm : This value will be returned if the data in the page is not saved.</para>
        /// </param>
    }
    this.movePrevious = function (callbackFunction) {
        /// <summary>
        /// Moves to the previous stage. You can use movePrevious to a previous stage in a different entity.
        /// </summary>
        /// <param name="callbackFunction" type="function reference" mayBeNull="false" optional="true" >
        /// <para>	success : The operation succeeded.</para>
        /// <para>	crossEntity : The previous stage is for a different entity.</para>
        /// <para>	beginning : The active stage is the first stage of the active path.</para>
        /// <para>	invalid : The operation failed because the selected stage isn’t the same as the active stage.</para>
        /// <para>	dirtyForm : This value will be returned if the data in the page is not saved.</para>
        /// </param>
    }
}

function _processObj()
{
    this.getId = function () {
        /// <summary>
        /// Returns the unique identifier of the proces.
        /// </summary>
        /// <returns type="String" />
    }
    this.getName = function () {
        /// <summary>
        /// Returns the name of the process.
        /// </summary>
        /// <returns type="String" />
    }
    this.getStages = function () {
        /// <summary>
        /// Returns an collection of stages in the process
        /// </summary>
        /// <returns type="collection" />
    }
    this.isRendered = function () {
        /// <summary>
        /// Returns true if the process is rendered, false if not
        /// </summary>
        /// <returns type="Boolean" />
    }
}
function _stageObj() {
    this.getCategory = function () {
        /// <summary>
        /// Returns an object with a getValue method which will return the integer value of the business process flow category. 
        /// </summary>
        /// <returns type="Number" />
       
        return new _stageCategory();
    }
    this.getEntityName = function () {
        /// <summary>
        /// Returns the logical name of the entity associated with the stage.
        /// </summary>
        /// <returns type="String" />
    }
    this.getId = function () {
        /// <summary>
        /// Returns the unique identifier of the stage.
        /// </summary>
        /// <returns type="String" />
    }
    this.getName = function () {
        /// <summary>
        /// Returns the name of the stage.
        /// </summary>
        /// <returns type="String" />
    }
    this.getStatus = function () {
        /// <summary>
        /// Returns the status of the stage
        /// </summary>
        /// <returns type="String" />
    }
    this.getSteps = function () {
        /// <summary>
        /// Returns a collection of steps in the stage.
        /// </summary>
        /// <returns type="Array" />
    }
}

function _stageCategory()
{
    this.getValue=function(){}
}

function _ui() {
    this.process = new _uiProcess();
    this.controls = new _controlsCollection();
    this.formSelector = new __formSelectorItems();
    this.navigation = new __navigationItems();
    this.tabs = new _tabsCollection();
    this.close = function () {
        /// <summary>
        /// Closes the form.
        /// </summary>
    }
    this.getCurrentControl = function () {
        /// <summary>
        /// Method to get the control object that currently has focus on the form. Web Resource and IFRAME controls are not returned by this method.
        /// </summary>
        /// <returns type="Object" />
    }
    this.getFormType = function () {
        /// <summary>
        /// Indicates the form context for the record.
        /// <para>	0 : Undefined</para>
        /// <para>	1 : Create</para>
        /// <para>	2 : Update</para>
        /// <para>	3 : Read Only</para>
        /// <para>	4 : Disabled</para>
        /// <para>	5 : Quick Create (Deprecated)</para>
        /// <para>	6 : Bulk Edit</para>
        /// <para>	11: Read Optimized</para>
        /// </summary>
        /// <returns type="Number" />
    }

    this.clearFormNotification = function (uniqueId) {

        /// <summary>
        /// Use this method to remove form level notifications. 
        /// <para>[Remarks: This method is only available for Updated Entities.]</para>
        /// </summary>
        /// <param name="uniqueId" type="String" mayBeNull="false" optional="false" >
        /// A unique identifier for the message used with setFormNotification to set the notification. 
        /// </param>
        /// <returns type="Boolean" />

    };
    this.setFormNotification = function (message, level, uniqueId) {

        /// <summary>
        /// Use this method to display form level notifications. You can display any number of notifications and they will be displayed until they are removed using clearFormNotification. The height of the notification area is limited so each new message will be added to the top. Users can scroll down to view older messages that have not yet been removed.
        /// <para>[Remarks: This method is only available for Updated Entities.]</para>
        /// </summary>
        /// <param name="message" type="String" mayBeNull="false" optional="false" >
        /// The text of the message 
        /// </param>
        /// <param name="level" type="String" mayBeNull="false" optional="false" >
        /// The text of the message 
        /// <para>ERROR : Notification will use the system error icon.</para>
        /// <para>WARNING : Notification will use the system warning icon.</para>
        /// <para>INFO : Notification will use the system info icon.</para>
        /// </param>
        /// <param name="uniqueId" type="String" mayBeNull="false" optional="false" >
        /// A unique identifier for the message used with clearFormNotification to remove the notification. 
        /// </param>
        /// <returns type="Boolean" />

    };
    this.getViewPortHeight = function () {
        /// <summary>
        /// Returns the height of the viewport in pixels.
        /// </summary>
        /// <returns type="Number" />
    }
    this.getViewPortWidth = function () {
        /// <summary>
        /// Returns the width of the viewport in pixels.
        /// </summary>
        /// <returns type="Number" />
    }
    this.refreshRibbon = function () {
        /// <summary>
        /// Causes the ribbon to re-evaluate data that controls what is displayed in it.
        /// </summary>
    }
}

function _uiProcess()
{
    this.getDisplayState=function()
    {
        /// <summary>
        /// Use this method to retrieve the display state for the business process control.
        /// </summary>
        /// <returns type="String" />
    }
    this.setDisplayState = function (strExpanded) {
        /// <summary>
        /// Use this method to expand or collapse the business process flow control.
        /// </summary>
        /// <param name="strExpanded" type="String" mayBeNull="false" optional="false" >
        /// Use “expanded” to expand the control, “collapsed” to collapse it.
        /// </param>
    }
    this.getVisible = function () {
        /// <summary>
        /// Use setVisible to show or hide the business process control. Use getVisible to retrieve whether the business process control is visible.
        /// </summary>
        /// <returns type="Boolean" />
    }
    this.setVisible = function (boolVisible) {
        /// <summary>
        /// Use this method to show or hide the business process flow control.
        /// </summary>
        /// <param name="boolVisible" type="Boolean" mayBeNull="false" optional="false" >
        /// Use true to show the control; otherwise, false.
        /// </param>
    }
}

function _attribute(arg) {
    this.controls = new _controlsCollection();
    this.getInitialValue = function () {
        /// <summary>
        /// Returns a value that represents the value set for an optionset or Boolean attribute when the form opened.
        /// </summary>
        /// <returns type="Number" />
    };
    this.getOption = function (value) {
        /// <summary>
        /// Returns an option object with the value matching the argument passed to the method.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false" >
        /// String or Number value
        /// </param>
        /// <returns type="Option" />
    };
    this.getOptions = function () {
        /// <summary>
        /// Returns an array of option objects representing the valid options for an optionset attribute.
        /// </summary>
        /// <returns type="Array " />
    };
    this.getSelectedOption = function () {
        /// <summary>
        /// Returns the option object that is selected in an optionset attribute.
        /// </summary>
        /// <returns type="Option" />
    };
    this.getText = function () {
        /// <summary>
        /// Returns a string value of the text for the currently selected option for an optionset attribute.
        /// </summary>
        /// <returns type="String" />
    };
    this.getAttributeType = function () {
        /// <summary>
        /// Returns a string value that represents the type of attribute.
        /// <para></para>
        /// <para>This method will return one of the following string values:</para>
        /// <para>1: boolean</para>
        /// <para>2: datetime</para>
        /// <para>3: decimal</para>
        /// <para>4: double</para>
        /// <para>5: integer</para>
        /// <para>6: lookup</para>
        /// <para>7: memo</para>
        /// <para>8: money</para>
        /// <para>9: optionset</para>
        /// <para>10: string</para>
        /// </summary>
        /// <returns type="String" />
    };
    this.getFormat = function () {
        /// <summary>
        /// Returns a string value that represents formatting options for the attribute.
        /// <para></para>
        /// <para>This method will return one of the following string values or null:</para>
        /// <para>1: date</para>
        /// <para>2: datetime</para>
        /// <para>3: duration</para>
        /// <para>4: email</para>
        /// <para>5: language</para>
        /// <para>6: none</para>
        /// <para>7: phone</para>
        /// <para>8: text</para>
        /// <para>9: textarea</para>
        /// <para>10: tickersymbol</para>
        /// <para>10: timezone</para>
        /// <para>10: url</para>
        /// </summary>
        /// <returns type="String" />
    };
    this.getIsDirty = function () {
        /// <summary>
        /// Returns a Boolean value indicating if there are unsaved changes to the attribute value
        /// </summary>
        /// <returns type="Boolean" />
    };
    this.getIsPartyList = function () {
        /// <summary>
        ///Returns a Boolean value indicating whether the lookup represents a partylist lookup. Partylist lookups allow for multiple records to be set, such as the To: field for an e-mail entity record.
        /// <para>[Remarks: This method is only available for Updated Entities.]</para>
        /// </summary>
        /// <returns type="Boolean" />
    };
    this.getMaxLength = function () {
        /// <summary>
        /// Returns a number indicating the maximum length of a string or memo attribute
        /// </summary>
        /// <returns type="Number" />
    };
    this.getName = function () {
        /// <summary> 
        /// Returns a string representing the logical name of the attribute
        /// </summary>
        /// <returns type="String" />
    };
    this.getParent = function () {
        /// <summary>
        /// Returns the Xrm.Page.data.entity object that is the parent to all attributes
        /// </summary>
        /// <returns type="Xrm.Page.data.entity" />
    };
    this.getUserPrivilege = function () {
        /// <summary>
        /// Returns an object with three Boolean properties corresponding to privileges indicating if the user can create, read or update data values for an attribute. 
        /// <para></para>
        /// <para>The returned object has following three Boolean properties</para>
        /// <para>.canRead</para>
        /// <para>.canUpdate</para>
        /// <para>.canCreate</para>
        /// </summary>
        /// <returns type="Object" />
    };
    this.getMax = function () {
        /// <summary>
        /// Returns a number indicating the maximum allowed value for an attribute
        /// </summary>
        /// <returns type="Number" />
    };
    this.getMin = function () {
        /// <summary>
        /// Returns a number indicating the minimum allowed value for an attribute
        /// </summary>
        /// <returns type="Number" />
    };
    this.getPrecision = function () {
        /// <summary>
        /// Returns the number of digits allowed to the right of the decimal point
        /// </summary>
        /// <returns type="Number" />
    };
    this.addOnChange = function (functionPointer) {
        /// <summary>
        /// Adds an event handler function to the OnChange event for the attribute. It will be called after the other event handler functions in the event pipeline.
        /// </summary>
    };
    this.removeOnChange = function (functionPointer) {
        /// <summary>
        /// Removes and event handler function from the OnChange event for the attribute.
        /// </summary>
    };
    this.fireOnChange = function () {
        /// <summary>
        /// Causes the OnChange event to occur on the attribute so that any script associated to that event can execute.
        /// </summary>
    };
    this.getRequiredLevel = function () {
        /// <summary>
        /// Returns a string value indicating whether a value for the attribute is required or recommended.
        /// <para></para>
        /// <para>Returns one of the three possible values:</para>
        /// <para>.none</para>
        /// <para>.required</para>
        /// <para>.recommended</para>
        /// </summary>
        /// <returns type="String" />
    };
    this.setRequiredLevel = function (requirementLevel) {
        /// <summary>
        /// Sets whether data is required or recommended for the attribute before the record can be saved.
        /// </summary>
        /// <param name="requirementLevel" type="String" mayBeNull="false" optional="false" >
        /// <para>One of the following values:</para>
        /// <para>"none"</para>
        /// <para>"required"</para>
        /// <para>"recommended"</para>
        /// </param>
        /// <returns type="" />
    };
    this.getSubmitMode = function () {
        /// <summary>
        /// Returns a string indicating when data from the attribute will be submitted when the record is saved.
        /// <para></para>
        /// <para>Returns one of the three possible values:</para>
        /// <para>"always" : The value is always submitted.</para>
        /// <para>"never" : The value is never submitted. When this option is set, data cannot be edited for any fields in the form for this attribute.</para>
        /// <para>"dirty" : (default)The value is submitted on create if it is not null, and on save only when it is changed.</para>
        /// </summary>
        /// <returns type="String" />
    };
    this.setSubmitMode = function (value) {
        /// <summary>
        /// Sets whether data from the attribute will be submitted when the record is saved.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false" >
        /// <para>"always": The data is always sent with a save.</para>
        /// <para>"never": The data is never sent with a save. When this is used the field(s) in the form for this attribute cannot be edited.</para>
        /// <para>"dirty": Default behavior. The data is sent with the save when it has changed.</para>
        /// </param>
    };
    this.getValue = function () {
        /// <summary> 
        /// Retrieves the data value for an attribute.
        /// <para></para>
        /// <para>Return value depends on the type of attribute:</para>
        /// <para>boolean:Boolean</para>
        /// <para>datetime:Date</para>
        /// <para>decimal:Number</para>
        /// <para>double:Number</para>
        /// <para>integer:Number</para>
        /// <para>lookup:Array [An Array of objects, each lookup has three properties: {.entityType .id .name}]</para>
        /// <para>memo:String</para>
        /// <para>money:Number</para>
        /// <para>optionSet:Number</para>
        /// <para>string:String</para>
        /// </summary>
        /// <returns type="" />
    };
    this.setValue = function (value) {
        /// <summary>
        /// Sets the data value for an attribute.
        /// </summary>
        /// <param name="value" type="String" mayBeNull="false" optional="false" >
        /// <para>Return value depends on the type of attribute:</para>
        /// <para>boolean:Boolean</para>
        /// <para>datetime:Date</para>
        /// <para>decimal:Number</para>
        /// <para>double:Number</para>
        /// <para>integer:Number</para>
        /// <para>lookup:Array [An Array of objects, each lookup has three properties: {.entityType .id .name}]</para>
        /// <para>memo:String</para>
        /// <para>money:Number</para>
        /// <para>optionSet:Number</para>
        /// <para>string:String</para>
        /// </param>
    };
}

function _control(arg) {
    this.showAutoComplete = function (object) {
        /// <summary>
        /// Use this to show up to 10 matching strings in a drop-down list as users press keys to type character in a specific text field. You can also add a custom command with an icon at the bottom of the drop-down list. On selecting an item in the drop-down list, the value in the text field changes to the selected item, the drop-down list disappears, and the OnChange event for the text field is invoked.
        /// </summary>
        /// <param name="object" type="Object " mayBeNull="false" optional="false" >
        /// Object that defines the result set, which includes results and commands, to be displayed in the auto-completion drop-down list.
        /// </param>
    };
    this.hideAutoComplete = function () {
        /// <summary>
        /// Use this function to hide the auto-completion drop-down list you configured for a specific text field.
        /// </summary>
    };
    this.getDisabled = function () {
        /// <summary>
        /// Returns whether the control is disabled.
        /// </summary>
        /// <returns type="Boolean" />
    };
    this.setDisabled = function (bool) {
        /// <summary>
        /// Sets whether the control is disabled.
        /// </summary>
        /// <param name="bool" type="Boolean" mayBeNull="false" optional="false" >
        /// True if the control should be disabled, otherwise false.
        /// </param>
    };
    this.getAttribute = function () {

        /// <summary>
        /// Returns the attribute that the control is bound to.
        /// </summary>
        /// <returns type="Object" />

        return new _attribute()
    };
    this.getControlType = function () {
        /// <summary>
        /// Returns a value that categorizes controls.
        /// <para></para>
        /// <para>standard: A Standard control</para>
        /// <para>iframe: An IFRAME control</para>
        /// <para>lookup: A Lookup control</para>
        /// <para>optionset: An OptionSet control</para>
        /// <para>subgrid: A subgrid control</para>
        /// <para>webresource: A web resource control</para>
        /// <para>notes: A Notes control</para>
        /// </summary>
        /// <returns type="String" />
    };
    this.getName = function () {
        /// <summary>
        /// Returns the name assigned to the control.
        /// </summary>
        /// <returns type="String" />
    };
    this.getParent = function () {
        /// <summary>
        /// Returns a reference to the section object that contains the control.
        /// </summary>
        /// <returns type="object" />
    };
    this.getValue = function () {
        /// <summary>
        /// Gets the latest value in a control as the user types characters in a specific text or number field. This method helps you to build interactive experiences by validating data and alerting users as they type characters in a control. 
        /// </summary>
        /// <returns type="String" />
    };

    this.addOnKeyPress = function (reference) {
        /// <summary>
        /// Gets the latest value in a control as the user types characters in a specific text or number field. This method helps you to build interactive experiences by validating data and alerting users as they type characters in a control. 
        /// </summary>
        /// <param name="reference" type="Function" mayBeNull="false" optional="true" >
        /// The function will be added to the bottom of the event handler pipeline. The execution context is automatically set to be passed as the first parameter passed to event handler set using this method.
        /// </param>
    };

    this.removeOnKeyPress = function (reference) {
        /// <summary>
        /// Use this to remove an event handler for a text or number field that you added using addOnKeyPress.
        /// </summary>
        /// <param name="reference" type="Function" mayBeNull="false" optional="true" >
        /// If an anonymous function is set using addOnKeyPress, it can’t be removed using this method.
        /// </param>
    };

    this.fireOnKeyPress = function () {
        /// <summary>
        /// Use this to manually fire an event handler that you created for a specific text or number field to be executed on the keypress event.
        /// </summary>
    };

    this.getLabel = function () {
        /// <summary>
        /// Returns the label for the control
        /// </summary>
        /// <returns type="String" />
    };
    this.setLabel = function (label) {
        /// <summary>
        /// Sets the label for the control
        /// </summary>
        /// <param name="label" type="String" mayBeNull="false" optional="false" >
        /// The new label for the control.
        /// </param>
    };
    this.addCustomFilter = function (filter, entityLogicaName) {
        /// <summary>
        /// Use add additional filters to the results displayed in the lookup. Each filter will be combined with any previously added filters as an ‘AND’ condition.
        /// </summary>
        /// <param name="filter" type="String" mayBeNull="false" optional="false" >
        /// The fetchXml filter element to apply. 
        /// </param>
        /// <param name="entityLogicaName" type="String" mayBeNull="false" optional="true" >
        /// If this is set the filter will only apply to that entity type. Otherwise it will apply to all types of entities returned
        /// </param>
    };
    this.addCustomView = function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
        /// <summary>
        /// Adds a new view for the lookup dialog box.
        /// </summary>
        /// <param name="viewId" type="String" mayBeNull="false" optional="false" >
        /// The string representation of a GUID for a view.
        /// </param>
        /// <param name="entityName" type="String" mayBeNull="false" optional="false" >
        /// The name of the entity. 
        /// </param>
        /// <param name="viewDisplayName" type="String" mayBeNull="false" optional="false" >
        /// The name of the view.
        /// </param>
        /// <param name="fetchXml" type="String" mayBeNull="false" optional="false" >
        /// The fetchXml query for the view.
        /// </param>
        /// <param name="layoutXml" type="String" mayBeNull="false" optional="false" >
        /// The XML that defines the layout of the view.
        /// </param>
        /// <param name="isDefault" type="Boolean" mayBeNull="false" optional="false" >
        /// Whether the view should be the default view.
        /// </param>
        /// <returns type="" />
    };
    this.getDefaultView = function () {
        /// <summary>
        /// Returns the Id value of the default lookup dialog view.
        /// </summary>
        /// <returns type="String" />
    };
    this.setDefaultView = function (viewGuid) {
        /// <summary>
        /// Sets the default view for the lookup control dialog.
        /// </summary>
        /// <param name="" type="String" mayBeNull="false" optional="false" >
        /// The Id of the view to be set as the default view.
        /// </param>
    };
    this.addPreSearch = function (handler) {
        /// <summary>
        /// Use this method to apply changes to lookups based on values current just as the user is about to view results for the lookup.
        /// <para>[Remarks: This method is only available for Updated Entities.]</para>
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false" optional="false" >
        /// function that will be run just before the search to provide results for a lookup occurs. You can use this handler to call one of the other lookup control functions and improve the results to be displayed in the lookup. 
        /// </param>
    };
    this.removePreSearch = function (handler) {
        /// <summary>
        /// Use this method to remove event handler functions that have previously been set for the PreSearch event.
        /// <para>[Remarks: This method is only available for Updated Entities.]</para>
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false" optional="false" >
        /// Function to remove
        /// </param>
        /// <returns type="" />
    };
    this.setNotification = function (message) {
        /// <summary>
        /// Display a message near the control to indicate that data is not valid. When this method is used on Microsoft Dynamics CRM for tablets a red "X" icon appears next to the control. Tapping on the icon will display the message.
        /// </summary>
        /// <param name="message" type="String" mayBeNull="false" optional="false" >
        /// The message to display
        /// </param>
        /// <returns type="Boolean" />
    };
    this.clearNotification = function () {
        /// <summary>
        /// Remove a message already displayed for a control
        /// </summary>
        /// <returns type="Boolean" />
    };
    this.addOption = function (option, index) {
        /// <summary>
        /// Adds an option to an option set control.
        /// </summary>
        /// <param name="option" type="Object" mayBeNull="false" optional="false" >
        /// An option object to add to the OptionSet
        /// </param>
        /// <param name="index" type="Number" mayBeNull="false" optional="true" >
        /// The index position to place the new option. If not provided the option will be added to the end
        /// </param>
    };
    this.clearOptions = function () {
        /// <summary>
        /// Clears all options from an Option Set control.
        /// </summary>
    };
    this.removeOption = function (number) {
        /// <summary>
        /// Removes an option from an Option Set control.
        /// </summary>
        /// <param name="number" type="Number" mayBeNull="false" optional="false" >
        /// The value of the option you want to remove.
        /// </param>
    };
    
    this.setFocus = function () {
        /// <summary>
        /// Sets the focus on the control.
        /// </summary>
    };
    this.getShowTime = function () {
        /// <summary>
        /// Get whether a date control shows the time portion of the date.
        /// </summary>
    };
    this.setShowTime = function (bool) {
        /// <summary>
        /// Specify whether a date control should show the time portion of the date.
        /// <para>[Remarks: This method is only available for Updated Entities.]</para>
        /// </summary>
        /// <param name="bool" type="Boolean" mayBeNull="false" optional="false" >
        /// If false time will not be displayed for a Datetime field.
        /// </param>
    };
    this.refresh = function () {
        /// <summary>
        /// Refreshes the data displayed in a Sub-Grid
        /// </summary>
    };
    this.getVisible = function () {
        /// <summary>
        /// Returns a value that indicates whether the control is currently visible.
        /// </summary>
        /// <returns type="Boolean" />
    };
    this.setVisible = function (bool) {
        /// <summary>
        /// Sets a value that indicates whether the control is visible.
        /// </summary>
        /// <param name="" type="Boolean" mayBeNull="false" optional="false" >
        /// True if the control should be visible, otherwise false.
        /// </param>
    };
    this.getData = function () {
        /// <summary>
        /// Returns the value of the data query string parameter passed to a Silverlight web resource.
        /// </summary>
        /// <returns type="String" />
    };
    this.setData = function (string) {
        /// <summary>
        /// Sets the value of the data query string parameter passed to a Silverlight web resource.
        /// </summary>
        /// <param name="string" type="String" mayBeNull="false" optional="false" >
        /// The data value to pass to the Silverlight web resource
        /// </param>
    };
    this.getInitialUrl = function () {
        /// <summary>
        /// Returns the default URL that an IFRAME control is configured to display. This method is not available for web resources.
        /// </summary>
        /// <returns type="String" />
    };
    this.getObject = function () {
        /// <summary>
        /// Returns the object in the form that represents an I-frame or web resource.
        /// </summary>
        /// <returns type="Object" />
    };
    this.getSrc = function () {
        /// <summary>
        /// Returns the current URL being displayed in an IFRAME or web resource.
        /// </summary>
        /// <returns type="String" />
    };
    this.setSrc = function (string) {
        /// <summary>
        /// Sets the URL to be displayed in an IFRAME or web resource.
        /// </summary>
        /// <param name="string" type="String" mayBeNull="false" optional="false" >
        /// The URL
        /// </param>
    };
}
function _tab(arg) {
    this.sections = new _sectionsCollection();
    this.getDisplayState = function () {
        /// <summary>
        /// Returns a value that indicates whether the tab is collapsed or expanded.
        /// <para>[Remarks: For Microsoft Dynamics CRM for tablets this method will always return expanded because tabs cannot be collapsed.]</para>
        /// <para></para>
        /// <para>Possible values returned are:</para>
        /// <para>"expanded"</para>
        /// <para>"collapsed"</para>
        /// </summary>
        /// <returns type="String" />
    };
    this.setDisplayState = function (string) {
        /// <summary>
        /// Sets the tab to be collapsed or expanded.
        /// <para>[Remarks: This method does not work with Microsoft Dynamics CRM for tablets because tabs cannot be collapsed.]</para>
        /// </summary>
        /// <param name="string" type="String" mayBeNull="false" optional="false" >
        /// <para>expanded</para>
        /// <para>collapsed</para>
        /// </param>
    };
    this.getName = function () {
        /// <summary>
        /// Returns the name of the tab
        /// </summary>
        /// <returns type="String" />
    };
    this.getParent = function () {
        /// <summary>
        /// Returns the Xrm.Page.ui (client-side reference) object
        /// </summary>
        /// <returns type="Object" />
    };
    this.getLabel = function () {
        /// <summary>
        /// Returns the tab label
        /// </summary>
        /// <returns type="String" />
    };
    this.setLabel = function (String) {
        /// <summary>
        /// Sets the label for the tab
        /// </summary>
    };
    this.setFocus = function () {
        /// <summary>
        /// Sets the focus on the tab.
        /// </summary>
    };
    this.getVisible = function () {
        /// <summary>
        /// Returns a value that indicates whether the tab is visible.
        /// </summary>
        /// <returns type="Boolean" />
    };
    this.setVisible = function (boolean) {
        /// <summary>
        /// Sets a value that indicates whether the control is visible
        /// </summary>
      
    };
}
function _section(arg) {
    this.controls = new _controlsCollection();
    this.getName = function () {
        /// <summary>
        /// Method to return the name of the section.
        /// </summary>
        /// <returns type="String" />
    };
    this.getParent = function () {
        /// <summary>
        /// Method to return the tab containing the section.
        /// </summary>
        /// <returns type="Object" />
    };
    this.getLabel = function () {
        /// <summary>
        /// Returns the label for the section.
        /// </summary>
        /// <returns type="String" />
    };
    this.setLabel = function (string) {
        /// <summary>
        /// Sets the label for the section.
        /// </summary>
    };
    this.getVisible = function () {
        /// <summary>
        /// Returns true if the section is visible, otherwise returns false.
        /// </summary>
        /// <returns type="Boolean" />
    };
    this.setVisible = function (bool) {
        /// <summary>
        /// Sets a value to show or hide the section.
        /// </summary>
    };
}
function _form(arg) {
    this.getId = function () {
        /// <summary>
        /// Returns the GUID ID of the form.
        /// </summary>
        /// <returns type="String" />
    };
    this.getLabel = function () {
        /// <summary>
        /// Returns the label of the form.
        /// </summary>
        /// <returns type="String" />
    };
    this.navigate = function () {
        /// <summary>
        /// Opens the specified form
        /// </summary>
    };
}
function _navigationItem(arg) {
    this.getId = function () {
        /// <summary>
        /// Returns the name of the item.
        /// </summary>
        /// <returns type="String" />
    };
    this.getLabel = function () {
        /// <summary>
        /// Returns the label for the item.
        /// </summary>
        /// <returns type="String" />
    };
    this.setLabel = function (label) {
        /// <summary>
        /// Sets the label for the item.
        /// </summary>
        /// <param name="label" type="String" mayBeNull="false" optional="false" >
        /// The new label for the item
        /// </param>
        /// <returns type="" />
    };
    this.setFocus = function () {
        /// <summary>
        /// Sets the focus on the item
        /// </summary>
    };
    this.getVisible = function () {
        /// <summary>
        /// Returns a value that indicates whether the item is currently visible.
        /// </summary>
        /// <returns type="Boolean" />
    };
    this.setVisible = function (bool) {
        /// <summary>
        /// Sets a value that indicates whether the item is visible
        /// </summary>
        /// <param name="bool" type="Boolean" mayBeNull="false" optional="false" >
        ///
        /// </param>
    };
}

function _attributesCollection() {
    this.forEach = function (delegate_function) {
        /// <summary>
        /// Applies the action contained within a delegate function.
        /// </summary>
        /// <param name="delegate_function" type="Function" mayBeNull="false" optional="false" >
        /// The delegate_function must include parameters for attribute and index. i.e : MyFunction(attribute,index).
        /// </param>
    };
    this.get = function (argument) {
        /// <summary>
        /// Returns one or more attributes depending on the arguments passed.
        /// </summary>
        /// <param name="argument" mayBeNull="true" optional="true" >
        /// <para>1: None: Returns an array of all the attributes.</para>
        /// <para>2: String: Returns the attribute where the argument matches the name.</para>
        /// <para>3: Number: Returns the attribute where the argument matches the index.</para>
        /// <para>4: Function: Returns any attributes that cause the delegate function to return true.</para>
        /// </param>
        return new _attribute();
    }
    this.getLength = function () {
        /// <summary>
        /// Returns the number of items in the collection.
        /// </summary>
        /// <returns type="Number" />
    };
}
function _controlsCollection() {
    this.forEach = function (delegate_function) {
        /// <summary>
        /// Applies the action contained within a delegate function.
        /// </summary>
        /// <param name="delegate_function" type="Function" mayBeNull="false" optional="false" >
        /// The delegate_function must include parameters for attribute and index. i.e : MyFunction(attribute,index).
        /// </param>
    };
    this.get = function (argument) {
        /// <summary>
        /// Returns one or more controls depending on the arguments passed.
        /// </summary>
        /// <param name="argument" mayBeNull="true" optional="true" >
        /// <para>1: None: Returns an array of all the controls.</para>
        /// <para>2: String: Returns the controls where the argument matches the name.</para>
        /// <para>3: Number: Returns the controls where the argument matches the index.</para>
        /// <para>4: Function: Returns any controls that cause the delegate function to return true.</para>
        /// </param>
        return new _control();
    }
    this.getLength = function () {
        /// <summary>
        /// Returns the number of items in the collection.
        /// </summary>
        /// <returns type="Number" />
    };
}
function _tabsCollection() {
    this.forEach = function (delegate_function) {
        /// <summary>
        /// Applies the action contained within a delegate function.
        /// </summary>
        /// <param name="delegate_function" type="Function" mayBeNull="false" optional="false" >
        /// The delegate_function must include parameters for attribute and index. i.e : MyFunction(attribute,index).
        /// </param>
    };
    this.get = function (argument) {
        /// <summary>
        /// Returns one or more tabs depending on the arguments passed.
        /// </summary>
        /// <param name="argument" mayBeNull="true" optional="true" >
        /// <para>1: None: Returns an array of all the tabs.</para>
        /// <para>2: String: Returns the tabs where the argument matches the name.</para>
        /// <para>3: Number: Returns the tabs where the argument matches the index.</para>
        /// <para>4: Function: Returns any tabs that cause the delegate function to return true.</para>
        /// </param>
        return new _tab();
    }
    this.getLength = function () {
        /// <summary>
        /// Returns the number of items in the collection.
        /// </summary>
        /// <returns type="Number" />
    };
}
function _sectionsCollection() {
    this.forEach = function (delegate_function) {
        /// <summary>
        /// Applies the action contained within a delegate function.
        /// </summary>
        /// <param name="delegate_function" type="Function" mayBeNull="false" optional="false" >
        /// The delegate_function must include parameters for attribute and index. i.e : MyFunction(attribute,index).
        /// </param>
    };
    this.get = function (argument) {
        /// <summary>
        /// Returns one or more section depending on the arguments passed.
        /// </summary>
        /// <param name="argument" mayBeNull="true" optional="true" >
        /// <para>1: None: Returns an array of all the section.</para>
        /// <para>2: String: Returns the section where the argument matches the name.</para>
        /// <para>3: Number: Returns the attribute where the argument matches the index.</para>
        /// <para>4: Function: Returns any attributes that cause the delegate function to return true.</para>
        /// </param>
        return new _section();
    }
    this.getLength = function () {
        /// <summary>
        /// Returns the number of items in the collection.
        /// </summary>
        /// <returns type="Number" />
    };
}
function __formSelectorItems() {
    this.items = new ___formSelectorItemsCollection();
    this.getCurrentItem = function () { };
}
function __navigationItems() {
    this.items = new _navigationItemsCollection();
}
function _navigationItemsCollection() {
    this.forEach = function (delegate_function) {
        /// <summary>
        /// Applies the action contained within a delegate function.
        /// </summary>
        /// <param name="delegate_function" type="Function" mayBeNull="false" optional="false" >
        /// The delegate_function must include parameters for attribute and index. i.e : MyFunction(attribute,index).
        /// </param>
    };
    this.get = function (argument) {
        /// <summary>
        /// Returns one or more navigation item depending on the arguments passed.
        /// </summary>
        /// <param name="argument" mayBeNull="true" optional="true" >
        /// <para>1: None: Returns an array of all the navigation item.</para>
        /// <para>2: String: Returns the navigation item where the argument matches the name.</para>
        /// <para>3: Number: Returns the navigation item where the argument matches the index.</para>
        /// <para>4: Function: Returns any navigation item that cause the delegate function to return true.</para>
        /// </param>
        return new _navigationItem();
    }
    this.getLength = function () {
        /// <summary>
        /// Returns the number of items in the collection.
        /// </summary>
        /// <returns type="Number" />
    };
}
function ___formSelectorItemsCollection() {
    this.forEach = function (delegate_function) {
        /// <summary>
        /// Applies the action contained within a delegate function.
        /// </summary>
        /// <param name="delegate_function" type="Function" mayBeNull="false" optional="false" >
        /// The delegate_function must include parameters for attribute and index. i.e : MyFunction(attribute,index).
        /// </param>
    };
    this.get = function (argument) {
        /// <summary>
        /// Returns one or more form depending on the arguments passed.
        /// </summary>
        /// <param name="argument" mayBeNull="true" optional="true" >
        /// <para>1: None: Returns an array of all the form.</para>
        /// <para>2: String: Returns the form where the argument matches the name.</para>
        /// <para>3: Number: Returns the form where the argument matches the index.</para>
        /// <para>4: Function: Returns any form that cause the delegate function to return true.</para>
        /// </param>
        return new _form();
    }
    this.getLength = function () {
        /// <summary>
        /// Returns the number of items in the collection.
        /// </summary>
        /// <returns type="Number" />
    };
}

function _navigationItems() {
    this.items = new _collection();
}

// http://delegateas.github.io/Delegate.XrmDefinitelyTyped/index.html

declare namespace Xrm {
    var Page: Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>;

    /**
     * Enum which corresponds to the values of Xrm.Page.ui.getFormType()
     */
    const enum FormType {
        Undefined = 0,
        Create = 1,
        Update = 2,
        ReadOnly = 3,
        Disabled = 4,
        QuickCreate = 5,
        BulkEdit = 6,
    }


    /**
     * Interface for an option set value.
     */
    interface Option<T> {
        /**
         * Label for the option.
         */
        text: string;
        /**
         * Value for the option.
         */
        value: T;
    }


    /**
     * Interface for an user privileges for an attribute.
     */
    interface UserPrivilege {
        /**
         * Specificies if the user can read data values for the attribute.
         */
        canRead: boolean;
        /**
         * Specificies if the user can update data values for the attribute.
         */
        canUpdate: boolean;
        /**
         * Specificies if the user can create data values for the attribute.
         */
        canCreate: boolean;
    }


    /**
     * Interface for an entity reference for the Xrm.Page context.
     */
    interface EntityReference {
        id: string;
        entityType: string;
        name?: string | null;
    }


    /**
     * Interface of the base functionality of a collection without the 'get' function.
     */
    interface CollectionBase<T> {
        /**
         * Apply an action in a delegate function to each object in the collection.
         *
         * @param delegate The delegate function which iterates over the collection.
         */
        forEach(delegate: ForEach<T>): void;

        /**
         * Get the number of items in the collection.
         */
        getLength(): number;
    }


    interface ForEach<T> {
        /**
         * Iterates over the collection.
         *
         * @param item The current object.
         * @param index The index of the current object.
         */
        (item: T, index: number): any
    }


    /**
     * A collection of a certain type.
     */
    interface Collection<T> extends CollectionBase<T> {
        /**
         * Get all the objects from the collection.
         */
        get(): T[];

        /**
         * Gets the object with the given index in the collection.
         *
         * @param index The index of the desired object.
         */
        get(index: number): T;

        /** 
         * Gets the object with the given name in the collection.
         *
         * @param name The name of the desired object.
         */
        get(name: string): T;

        /**
         * Get the objects from the collection which make the delegate function return true.
         *
         * @param chooser The delegate function that filters the objects.
         */
        get(chooser: CollectionChooser<T>): T[];
    }


    interface CollectionChooser<T> {
        /**
         * Delegate function to choose which objects from the collections should be returned.
         * 
         * @param item Current object
         * @parem index Index of the current object
         */
        (item: T, index: number): boolean;
    }

    /**
     * A collection of attributes.
     */
    interface AttributeCollection extends Collection<Attribute<any>> {
    }

    /**
     * A collection of controls.
     */

    interface ControlCollection extends Collection<AnyControl> {
    }

    /**
     * A collection of sections.
     */
    interface SectionCollection extends Collection<PageSection> {
    }

    /**
     * A collection of tabs.
     */
    interface TabCollection extends Collection<PageTab<SectionCollection>> {
    }

    /**
     * A collection of attributes.
     */
    interface AttributeCollectionBase extends CollectionBase<Attribute<any>> {
    }

    /**
     * A collection of controls.
     */
    interface ControlCollectionBase extends CollectionBase<AnyControl> {
    }

    /**
     * A collection of sections.
     */
    interface SectionCollectionBase extends CollectionBase<PageSection> {
    }

    /**
     * A collection of tabs.
     */
    interface TabCollectionBase extends CollectionBase<PageTab<SectionCollectionBase>> {
    }

    type AttributeType =
        "boolean" | "datetime" | "decimal" | "double" | "integer" | "lookup"
        | "memo" | "money" | "optionset" | "string";

    type AttributeFormat =
        "date" | "datetime" | "duration" | "email" | "language" | "none"
        | "phone" | "text" | "textarea" | "tickersymbol" | "timezone" | "url"

    type AttributeRequiredLevel = "none" | "required" | "recommended";

    type AttributeSubmitMode = "always" | "never" | "dirty";


    /**
     * Interface for an standard entity attribute.
     */
    interface Attribute<T> {
        /**
         * Collection of controls associated with the attribute.
         */
        controls: Collection<Control<Attribute<T>>>;

        /**
         * Retrieves the data value for an attribute.
         */
        getValue(): T | null;

        /**
         * Sets the data value for an attribute.
         *
         * @param val The new value for the attribute.
         */
        setValue(val?: T | null): void;

        /**
         * Get the type of attribute.
         */
        getAttributeType(): AttributeType;

        /**
         * Get the attribute format. 
         */
        getFormat(): AttributeFormat;

        /**
         * Determine whether the value of an attribute has changed since it was last saved.
         */
        getIsDirty(): boolean;

        /**
         * Determine whether a lookup attribute represents a partylist lookup.
         */
        getIsPartyList(): boolean;

        /**
         * Get the maximum length of string which an attribute that stores string data can have.
         */
        getMaxLength(): number;

        /**
         * Get the name of the attribute.
         */
        getName(): string;

        /**
         * Get a reference to the Xrm.Page.data.entity object that is the parent to all attributes.
         */
        getParent(): PageEntity<Collection<Attribute<any>>>;

        /**
         * Returns an object with three Boolean properties corresponding to privileges indicating if the user can create, 
         * read or update data values for an attribute. This function is intended for use when Field Level Security 
         * modifies a user's privileges for a particular attribute.
         */
        getUserPrivilege(): UserPrivilege;

        /**
         * Sets a function to be called when the attribute value is changed.
         *
         * @param functionRef The event handler for the on change event.
         */
        addOnChange(functionRef: (context?: ExecutionContext<this>) => any): void;

        /**
         * Removes a function from the OnChange event hander for an attribute.
         *
         * @param functionRef The event handler for the on change event.
         */
        removeOnChange(functionRef: Function): void;

        /**
         * Causes the OnChange event to occur on the attribute so that any script associated to that event can execute.
         */
        fireOnChange(): void;

        /**
         * Returns a string value indicating whether a value for the attribute is required or recommended.
         */
        getRequiredLevel(): AttributeRequiredLevel;

        /**
         * Sets whether data is required, recommended or optional for the attribute before the record can be saved.
         */
        setRequiredLevel(level: AttributeRequiredLevel): void;

        /**
         * Returns a string indicating when data from the attribute will be submitted when the record is saved.
         */
        getSubmitMode(): AttributeSubmitMode;

        /**
         * Sets when data from the attribute will be submitted when the record is saved.
         */
        setSubmitMode(mode: AttributeSubmitMode): void;
    }


    /**
     * Interface for a numerical attribute.
     */
    interface NumberAttribute extends Attribute<number> {
        /**
         * Collection of controls associated with the attribute.
         */
        controls: Collection<NumberControl>;

        /**
         * Returns a number indicating the maximum allowed value for an attribute.
         */
        getMax(): number;

        /**
         * Returns a number indicating the minimum allowed value for an attribute.
         */
        getMin(): number;

        /**
         * Returns the number of digits allowed to the right of the decimal point.
         */
        getPrecision(): number;
    }


    /**
     * Interface for a lookup attribute.
     */
    interface LookupAttribute extends Attribute<EntityReference[]> {
        /**
         * Collection of controls associated with the attribute.
         */
        controls: Collection<LookupControl>;
    }


    /**
     * Interface for a date attribute.
     */
    interface DateAttribute extends Attribute<Date> {
        /**
         * Collection of controls associated with the attribute.
         */
        controls: Collection<DateControl>;
    }


    /**
     * Interface for an OptionSet attribute.
     */
    interface OptionSetAttribute<T> extends Attribute<T> {
        /**
         * Collection of controls associated with the attribute.
         */
        controls: Collection<OptionSetControl<T>>;

        /**
         * Returns a value that represents the value set for an OptionSet or Boolean attribute when the form opened.
         */
        getInitialValue(): T | null;

        /**
         * Returns a string value of the text for the currently selected option for an optionset attribute.
         */
        getText(): string;

        /**
         * Returns an option object with the value matching the argument passed to the method.
         */
        getOption(value: string): Option<T> | null;

        /**
         * Returns an option object with the value matching the argument passed to the method.
         */
        getOption(value: T): Option<T> | null;

        /**
         * Returns an array of option objects representing the valid options for an option-set attribute.
         */
        getOptions(): Option<T>[];

        /**
         * Returns the option object that is selected in an optionset attribute.
         */
        getSelectedOption(): Option<T> | null;
    }


    type ControlType =
        "standard" | "iframe" | "lookup" | "optionset" | "subgrid"
        | "webresource" | "notes" | "timercontrol" | "kbsearch";

    /**
     * Interface for a standard form control.
     */
    interface BaseControl {
        /**
         * Get information about the type of control.
         */
        getControlType(): ControlType;

        /**
         * Sets the focus on the control.
         */
        setFocus(): void;

        /**
         * Get the section object that the control is in.
         */
        getParent(): PageSection;

        /**
         * Get the name of the control.
         */
        getName(): string;

        /**
         * Returns the label for the control.
         */
        getLabel(): string;

        /**
         * Sets the label for the control.
         *
         * @param label The new label for the control.
         */
        setLabel(label: string): void;

        /**
         * Returns a value that indicates whether the control is currently visible.
         */
        getVisible(): boolean;

        /**
         * Sets a value that indicates whether the control is visible.
         * 
         * @param visible True if the control should be visible; otherwise, false.
         */
        setVisible(visible: boolean): void;

        /**
         * Display a message near the control to indicate that data isn?t valid. When this method is used on Microsoft Dynamics CRM for tablets a red "X" icon appears next to the control. Tapping on the icon will display the message.
         *
         * @param message The message to display.
         * @param uniqueId The ID to use to clear just this message when using clearNotification.
         */
        setNotification(message: string, uniqueId?: string): boolean;

        /**
         * Remove a message already displayed for a control.
         *
         * @param uniqueId The ID to use to clear a specific message set using setNotification.
         */
        clearNotification(uniqueId?: string | null): boolean;
    }

    interface Control<T extends Xrm.Attribute<any>> extends BaseControl {
        /**
         * Get the attribute this control is bound to.
         */
        getAttribute(): T;

        /**
        * Returns whether the control is disabled.
        */
        getDisabled(): boolean;

        /**
        * Sets whether the control is disabled.
        *
        * @param disable True if the control should be disabled, otherwise false.
        */
        setDisabled(disable: boolean): void;
    }

    /**
     * Interface for an OptionSet form control.
     */
    interface OptionSetControl<T> extends Control<OptionSetAttribute<T>> {
        /**
         * Adds an option to an option set control.
         *
         * @param option An option object to add to the OptionSet.
         * @param index The index position to place the new option in. If not provided, the option will be added to the end.
         */
        addOption(option: Option<T>, index?: number): void;

        /**
         * Clears all options from an option set control.
         */
        clearOptions(): void;

        /**
         * Removes an option from an option set control.
         *
         * @param number The value of the option you want to remove.
         */
        removeOption(number: number): void;

        /**
         * Returns an array of option objects representing the valid options for an option-set control.
         */
        getOptions(): Option<T>[];
    }


    /**
     * Interface for an external form control.
     */
    interface ExternalControl extends BaseControl {
        /**
         * Returns the object in the form that represents an IFRAME or WebResource.
         */
        getObject(): any;

        /**
         * Returns the current URL being displayed in an IFRAME or WebResource.
         */
        getSrc(): string;

        /**
         * Sets the URL to be displayed in an IFRAME or WebResource.
         *
         * @param url The URL.
         */
        setSrc(url?: string): void;
    }


    /**
     * Interface for a WebResource form control.
     */
    interface WebResourceControl extends ExternalControl {
        /**
         * Returns the value of the data query string parameter passed to a web resource.
         */
        getData(): string;

        /**
         * Sets the value of the data query string parameter passed to a web resource.
         *
         * @param dataQuery The data value to pass to the web resource.
         */
        setData(dataQuery?: string): void;
    }


    /**
     * Interface for an IFrame form control.
     */
    interface IFrameControl extends ExternalControl {
        /**
         * Returns the default URL that an IFRAME control is configured to display. This method is not available for web resources.
         */
        getInitialUrl(): string;
    }


    /**
     * Interface for a DateTime form control.
     */
    interface DateControl extends Control<Attribute<Date>> {
        /**
         * Get whether a date control shows the time portion of the date.
         */
        getShowTime(): boolean;

        /**
         * Specify whether a date control should show the time portion of the date.
         */
        setShowTime(doShow: boolean): void;
    }


    /**
     * Interface for a Lookup form control.
     */
    interface LookupControl extends Control<LookupAttribute> {
        /**
         * Use to add filters to the results displayed in the lookup. Each filter will be combined with any previously added filters as an 'AND' condition.
         * 
         * @param fetchXml The fetchXml filter element to apply.
         * @param entityType If this is set, the filter only applies to that entity type. Otherwise, it applies to all types of entities returned.
         */
        addCustomFilter(fetchXml: string, entityType?: string): void;

        /**
         * Adds a new view for the lookup dialog box.
         *
         * @param viewId The string representation of a GUID for a view.
         * @param entityName The name of the entity.
         * @param viewDisplayName The name of the view.
         * @param fetchXml The fetchXml query for the view.
         * @param layoutXml The XML that defines the layout of the view.
         * @param isDefault Whether the view should be the default view.
         */
        addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;

        /**
         * Returns the ID value of the default lookup dialog view.
         */
        getDefaultView(): string;

        /**
         * Sets the default view for the lookup control dialog box.
         */
        setDefaultView(guid: string): void;

        /**
         * Use this method to apply changes to lookups based on values current just as the user is about to view results for the lookup.
         */
        addPreSearch(handler: Function): void;

        /**
         * Use this method to remove event handler functions that have previously been set for the PreSearch event.
         */
        removePreSearch(handler: Function): void;
    }


    /**
     * Interface for a SubGrid form control.
     */
    interface SubGridControl extends BaseControl {
        /**
         * Refreshes the data displayed in a subgrid.
         */
        refresh(): void;

        /**
         * Use this method to get the logical name of the relationship used for the data displayed in the grid.
         */
        getRelationshipName(): string
    }

    /**
     * Type to be be used for iterating over a list of controls and being able to interact with all of them with precursory checks for undefined
     */
    type AnyControl = BaseControl & Partial<Control<any> & WebResourceControl & IFrameControl & LookupControl & SubGridControl & DateControl & OptionSetControl<any>>


    /**
     * Remarks:
     * If the subgrid control is not configured to display the view selector, calling this method on the ViewSelector returned by the GridControl.getViewSelector will throw an error.
     */
    interface ViewSelector {
        /**
         * Use this method to get a reference to the current view.
         */
        getCurrentView(): Xrm.EntityReference;

        /**
         * Use this method to determine whether the view selector is visible.
         */
        isVisible(): boolean;

        /**
         * Use this method to set the current view.
         */
        setCurrentView(reference: Xrm.EntityReference): void;
    }

    /**
     * Interface for a string form control.
     */
    interface StringControl extends Control<Attribute<string>> {
    }

    /**
     * Interface for a number form control.
     */
    interface NumberControl extends Control<NumberAttribute> {
    }


    /**
     * Interface for the entity on a form.
     */
    interface PageEntity<T extends AttributeCollectionBase> {
        /**
         * The collection of attributes for the entity.
         */
        attributes: T;

        /**
         * Adds a function to be called when the record is saved.
         *
         * @param functionRef Reference to a function. It will be added to the bottom of the event handler pipeline.
         *                  The execution context is automatically set to be passed as the first parameter passed to event handlers set using this method.
         */
        addOnSave(functionRef: (context?: ExecutionContext<this>) => any): void;

        /**
         * Removes a function to be called when the record is saved.
         *
         * @param functionRef Reference to a function that was added to the OnSave event.
         */
        removeOnSave(functionRef: Function): void;

        /**
         * Gets a string for the value of the primary attribute of the entity.
         */
        getPrimaryAttributeValue(): string;

        /**
         * Returns a string representing the GUID id value for the record.
         */
        getId(): string;

        /**
         * Returns a string representing the xml that will be sent to the server when the record is saved.
         */
        getDataXml(): string;

        /**
         * Returns a string representing the logical name of the entity for the record.
         */
        getEntityName(): string;

        /**
         * Returns a Boolean value that indicates if any fields in the form have been modified.
         */
        getIsDirty(): boolean;

        /**
         * Saves the record synchronously with the options to close the form or open a new form after the save is completed.
         */
        save(): boolean;

        /**
         * This is the equivalent of using the "Save and Close" command.
         */
        save(type: "saveandclose"): boolean;

        /**
         * This is the equivalent of using the "Save and New" command.
         */
        save(type: "saveandnew"): boolean;

        /**
         * Saves the record synchronously and performs the command according to the type given.
         */
        save(type: string): boolean;
    }


    interface ExecutionContext<T> {
        /**
         * Method that returns the Client-side context object
         */
        getContext(): context;

        /**
         * Method that returns a value that indicates the order in which this handler is executed.
         */
        getDepth(): number;

        /** 
         * Method that returns an object with methods to manage the Save event.
         */
        getEventArgs(): SaveEventArgs;

        /**
         * Method that returns a reference to the object that the event occurred on.
         */
        getEventSource(): T;

        /**
         * Sets the value of a variable to be used by a handler after the current handler completes.
         *
         * @param key Key for the value
         * @param value The value to be stored
         */
        setSharedVariable(key: string, value: any): void;

        /**
         * Retrieves a variable set using setSharedVariable.
         *
         * @param key Key for the desired value
         */
        getSharedVariable(key: string): any;
    }

    interface SaveEventArgs {
        /**
         * Returns a value indicating how the save event was initiated by the user.
         */
        getSaveMode(): SaveMode;

        /**
         * Returns a value indicating whether the save event has been canceled because the preventDefault method was used in this event hander or a previous event handler.
         */
        isDefaultPrevented(): boolean;

        /**
         * Cancels the save operation, but all remaining handlers for the event will still be executed.
         */
        preventDefault(): void;
    }


    /**
     * Supported values returned to detect different ways entity records may be saved by the user.
     */
    const enum SaveMode {
        Save = 1,
        SaveAndClose = 2,
        SaveAndNew = 59,
        AutoSave = 70,
        SaveAsCompleted = 58,
        Deactivate = 5,
        Reactivate = 6,
        Assign = 47,
        Send = 7,
        Qualify = 16,
        Disqualify = 15
    }


    /**
     * Interface for the data of a form.
     */
    interface DataModule<T extends AttributeCollectionBase> {
        /**
         * Contains information about the entity of the page.
         */
        entity: PageEntity<T>;

        /**
         * Access various functionality for a business process flow.
         */
        process: ProcessModule;

        /**
         * Asynchronously refreshes and optionally saves all the data of the form without reloading the page.
         * 
         * @param save true if the data should be saved after it is refreshed, otherwise false.
         */
        refresh(save?: boolean): Then;

        /**
         * Saves the record asynchronously with the option to set callback functions to be executed after the save operation is completed.
         *
         * @param saveOptions This option is only applicable when used with appointment, recurring appointment, or service activity records.
         */
        save(saveOptions?: SaveOptions): Then;
    }

    type ProcessStageMoveAnswer = "success" | "crossEntity" | "end" | "invalid" | "dirtyForm";
    type ProcessStageSetAnswer = "crossEntity" | "unreachable" | "dirtyForm" | "invalid";

    /**
     * Interface for the business process flow on a form.
     */
    interface ProcessModule {
        /**
         * Returns a Process object representing the active process.
         */
        getActiveProcess(): Process;

        /**
         * Set a Process as the active process.
         *
         * @param processId The Id of the process to make the active process.
         * @param callback A function to call when the operation is complete. This callback function is passed one of the following string 
              values to indicate whether the operation succeeded. Is "success" or "invalid".
         */
        setActiveProcess(processId: string, callback: (successOrInvalid: string) => any): void;

        /**
         * Returns a Stage object representing the active stage.
         */
        getActiveStage(): Stage;

        /**
         * Set a completed stage as the active stage.
         * This method can only be used when the selected stage and the active stage are the same.
         *
         * @param stageId The ID of the completed stage for the entity to make the active stage.
         * @param callback The callback function will be passed a string value of “success” if the operation completes successfully.
              If the stageId represents a stage that isn't valid, the stage won't be made active and the callback function will be passed a string value indicating the reason. 
              "crossEntity": The stage must be one for the current entity.
              "unreachable": The stage exists on a different path.
              "dirtyForm": This value will be returned if the data in the page is not saved.
              "invalid":  
                - The stageId parameter is a non-existent stage ID value
                              OR
                - The active stage isn’t the selected stage.
                              OR
                - The record hasn’t been saved yet.
         */
        setActiveStage(stageId: string, callback?: (stringVal: ProcessStageSetAnswer) => any): void;

        /**
         * Use this method to get a collection of stages currently in the active path with methods to interact with the stages displayed in the business process flow control.
         * The active path represents stages currently rendered in the process control based on the branching rules and current data in the record.
         */
        getActivePath(): Collection<Stage>;

        /**
         * Use this method to asynchronously retrieve the enabled business process flows that the user can switch to for an entity.
         *
         * @param callback The callback function must accept a parameter that contains an object with dictionary properties where the name of the property is the Id of the 
                business process flow and the value of the property is the name of the business process flow.
                The enabled processes are filtered according to the user’s privileges. The list of enabled processes is the same ones a user can see in the UI 
                if they want to change the process manually.
         */
        getEnabledProcesses(callback: (enabledProcesses: ProcessContainer) => any): void;

        /**
         * Use this method to get the currently selected stage.
         */
        getSelectedStage(): Stage;

        /**
         * Use this to add a function as an event handler for the OnStageChange event so that it will be called when the business process flow stage changes.
         * You should use a reference to a named function rather than an anonymous function if you may later want to remove the event handler.
         *
         * @param handler The function will be added to the bottom of the event handler pipeline.
         */
        addOnStageChange(handler: (context?: ExecutionContext<this>) => any): void;

        /**
         * Use this to remove a function as an event handler for the OnStageChange event.
         *
         * @param handler If an anonymous function is set using the addOnStageChange method it cannot be removed using this method.
         */
        removeOnStageChange(handler: (context?: ExecutionContext<this>) => any): void;

        /**
         * Use this to add a function as an event handler for the OnStageSelected event so that it will be called when a business process flow stage is selected.
         * You should use a reference to a named function rather than an anonymous function if you may later want to remove the event handler.
         *
         * @param handler The function will be added to the bottom of the event handler pipeline.
         */
        addOnStageSelected(handler: (context?: ExecutionContext<this>) => any): void;

        /**
         * Use this to remove a function as an event handler for the OnStageSelected event.
         *
         * @param handler If an anonymous function is set using the addOnStageSelected method it cannot be removed using this method.
         */
        removeOnStageSelected(handler: (context?: ExecutionContext<this>) => any): void;

        /**
         * Progresses to the next stage.
         * Will cause the OnStageChange event to occur.
         * This method can only be used when the selected stage and the active stage are the same.
         *
         * @param callback An optional function to call when the operation is complete. This callback function is passed one of the following string values to indicate whether the operation succeeded:
                "success": The operation succeeded.
                "crossEntity": The next stage is for a different entity.
                "end": The active stage is the last stage of the active path.
                "invalid": The operation failed because the selected stage isn’t the same as the active stage.
                "dirtyForm": This value will be returned if the data in the page is not saved.
         */
        moveNext(callback?: (stringVal: ProcessStageMoveAnswer) => any): void;

        /**
         * Moves to the previous stage.
         * Will cause the OnStageChange event to occur.
         * This method can only be used when the selected stage and the active stage are the same.
         *
         * @param callback An optional function to call when the operation is complete. This callback function is passed one of the following string values to indicate whether the operation succeeded:
                "success": The operation succeeded.
                "crossEntity": The previous stage is for a different entity.
                "end": The active stage is the last stage of the active path.
                "invalid": The operation failed because the selected stage isn’t the same as the active stage.
                "dirtyForm": This value will be returned if the data in the page is not saved.
         */
        movePrevious(callback?: (stringVal: ProcessStageMoveAnswer) => any): void;
    }


    interface ProcessContainer {
        [id: string]: string;
    }


    interface Process {
        /**
         * Returns the unique identifier of the process.
         */
        getId(): string;

        /**
         * Returns the name of the process.
         */
        getName(): string;

        /**
         * Returns an collection of stages in the process.
         */
        getStages(): Collection<Stage>;

        /**
         * Returns true if the process is rendered, false if not.
         */
        isRendered(): boolean;
    }

    type StageStatus = "active" | "inactive"

    interface Stage {
        /**
         * Returns an object with a getValue method which will return the integer value of the business process flow category.
         */
        getCategory(): IStageCategory;

        /**
         * Returns the logical name of the entity associated with the stage.
         */
        getEntityName(): string;

        /**
         * Returns the unique identifier of the stage.
         */
        getId(): string;

        /**
         * Returns the name of the stage.
         */
        getName(): string;

        /**
         * Returns the status of the stage.
         */
        getStatus(): StageStatus;

        /**
         * Returns a collection of steps in the stage.
         */
        getSteps(): StageStep[];
    }


    const enum StageCategory {
        Qualify = 0,
        Develop = 1,
        Propose = 2,
        Close = 3,
        Identify = 4,
        Research = 5,
        Resolve = 6,
    }

    interface IStageCategory {
        /**
         * Returns the stage category.
         */
        getValue(): StageCategory;
    }

    interface StageStep {
        /**
         * Returns the logical name of the attribute associated to the step.
         */
        getAttribute(): string;

        /**
         * Returns the name of the step.
         */
        getName(): string;

        /**
         * Returns whether the step is required in the business process flow.
         */
        isRequired(): boolean;
    }

    interface SaveOptions {
        /**
         * Indicates whether to use the "Book" or "Reschedule" messages, rather than the "Create" or "Update" messages.
         */
        UseSchedulingEngine: boolean;
    }

    interface Then {
        /**
         * A function which can add callback handlers after it has finished.
         *
         * @param successCallback A function to call when the operation succeeds.
         * @param errorCallback A function to call when the operation fails.
         */
        then(successCallback?: Function, errorCallback?: ErrorCallback): void;
    }

    interface ErrorCallback {
        /**
         * A function to call when the operation fails.
         *
         * @param messageObject Object containing information about the error.
         */
        (messageObject: ErrorCallbackObject): void;

        /**
         * A function to call when the operation fails.
         *
         * @param errorCode The error code.
         * @param message A localized error message.
         */
        (errorCode: number, message: string): void;
    }

    interface ErrorCallbackObject {
        errorCode: number;
        message: string;
    }


    /**
     * Interface for a section on a form.
     */
    interface PageSection {
        /**
         * A collection of controls in the section.
         */
        controls: Collection<AnyControl>;

        /**
         * Method to return the name of the section.
         */
        getName(): string;

        /**
         * Method to return the tab containing the section.
         */
        getParent(): PageTab<Collection<PageSection>>;

        /**
         * Returns the label for the section.
         */
        getLabel(): string;

        /**
         * Sets the label for the section.
         *
         * @param label The label text to set.
         */
        setLabel(label: string): void;

        /**
         * Sets a value to show or hide the section.
         */
        setVisible(visibility: boolean): void;

        /**
         * Returns true if the section is visible, otherwise returns false.
         */
        getVisible(): boolean;
    }

    type CollapsableDisplayState = "expanded" | "collapsed";

    /**
     * Interface for a tab on a form.
     */
    interface PageTab<T extends SectionCollectionBase> {
        /**
         * Collection of sections within this tab.
         */
        sections: T;

        /**
         * Method to get the name of the tab.
         */
        getName(): string;

        /**
         * Returns a value that indicates whether the tab is collapsed or expanded.
         */
        getDisplayState(): CollapsableDisplayState;

        /**
         * Sets the tab to be collapsed or expanded.
         */
        setDisplayState(state: CollapsableDisplayState): void;

        /**
         * Returns the Xrm.Page.ui object.
         */
        getParent(): UiModule<Collection<PageTab<Collection<PageSection>>>, Collection<BaseControl>>;

        /**
         * Returns the tab label.
         */
        getLabel(): string;

        /**
         * Sets the label for the tab.
         *
         * @param label The new label for the tab.
         */
        setLabel(label: string): void;

        /**
         * Sets the focus on the tab.
         */
        setFocus(): void;

        /**
         * Sets a value that indicates whether the control is visible.
         */
        setVisible(visibility: boolean): void;

        /**
         * Returns a value that indicates whether the tab is visible.
         */
        getVisible(): boolean;
    }

    type NotificationLevel = "INFO" | "WARNING" | "ERROR";

    /**
     * Interface for the ui of a form.
     */
    interface UiModule<T extends TabCollectionBase, U extends ControlCollectionBase> {
        /**
         * Collection of tabs on the page.
         */
        tabs: T;

        /**
         * Collection of controls on the page.
         */
        controls: U;

        /**
         * Navigation for the page.
         */
        navigation: Navigation;

        /**
         * Method to get the form context for the record. 
         * Matches the values found in the Xrm.FormType enum.
         */
        getFormType(): FormType;

        /**
         * Method to close the form.
         */
        close(): void;

        /**
         * Use the formSelector.getCurrentItem method to retrieve information about the form currently in use and the formSelector.items 
         * collection containing information about all the forms available for the user.
         */
        formSelector: FormSelector;

        /**
         * Method to get the control object that currently has focus on the form. Web Resource and IFRAME controls are not returned by this method.
         * This method was deprecated in Microsoft Dynamics CRM 2013 Update Rollup 2.
         */
        getCurrentControl(): AnyControl;

        /**
         * Use this method to remove form level notifications.
         *
         * @param uniqueId Id of the notification to remove.
         */
        clearFormNotification(uniqueId: string): boolean;

        /**
         * Use this method to display form level notifications. You can display any number of notifications and they will be displayed until 
         * they are removed using clearFormNotification. The height of the notification area is limited so each new message will be added to the top. 
         * Users can scroll down to view older messages that have not yet been removed.
         *
         * @param message The text of the message.
         * @param level The level of the message.
         * @param uniqueId A unique identifier for the message used with clearFormNotification to remove the notification.
         */
        setFormNotification(message: string, level: NotificationLevel, uniqueId: string): boolean;

        /**
         * Method to cause the ribbon to re-evaluate data that controls what is displayed in it.
         */
        refreshRibbon(): void;

        /**
         * Method to get the height of the viewport in pixels.
         */
        getViewPortHeight(): number;

        /**
         * Method to get the width of the viewport in pixels.
         */
        getViewPortWidth(): number;

        /**
         * Access UI controls for the business process flow on the form.
         */
        process: UiProcessModule;
    }

    interface UiProcessModule {
        /**
         * Use this method to retrieve the display state for the business process control.
         */
        getDisplayState(): CollapsableDisplayState;

        /**
         * Use this method to expand or collapse the business process flow control.
         */
        setDisplayState(val: CollapsableDisplayState): void;

        /**
         * Use getVisible to retrieve whether the business process control is visible.
         */
        getVisible(): boolean;

        /**
         * Use setVisible to show or hide the business process control.
         */
        setVisible(visible: boolean): void;
    }

    interface FormSelector {
        /**
         * Method to return a reference to the form currently being shown.
         */
        getCurrentItem(): FormItem;

        /**
         * Method to return a reference to the form currently being shown.
         */
        items: Collection<FormItem>;
    }

    interface FormItem {
        /**
         * Returns the GUID ID of the form.
         */
        getId(): string;

        /**
         * Returns the label for the form.
         */
        getLabel(): string;

        /**
         * Opens the specified form.
         */
        navigate(): void;
    }

    interface Navigation {
        /**
         * Navigation items for the page.
         */
        items: Collection<NavigationItem>;
    }

    interface NavigationItem {
        /**
         * Returns the name of the item.
         */
        getId(): string;

        /**
         * Returns the label for the item.
         */
        getLabel(): string;

        /**
         * Sets the label for the item.
         */
        setLabel(label: string): void;

        /**
         * Sets the focus on the item.
         */
        setFocus(): string;

        /**
         * Returns a value that indicates whether the item is currently visible.
         */
        getVisible(): boolean;

        /**
         * Sets a value that indicates whether the item is visible.
         */
        setVisible(visible: boolean): void;
    }

    /**
     * Interface for the context of a form.
     */
    interface context {
        /**
         * Provides access to the getClient and getClientState methods you can use to determine which client is being used and whether the client is connected to the server.
         */
        client: client;

        /**
         * Returns the base URL that was used to access the application.
         */
        getClientUrl(): string;

        /**
         * Returns a string representing the current Microsoft Office Outlook theme chosen by the user.
         */
        getCurrentTheme(): string;

        /**
         * Returns whether Autosave is enabled for the organization.
         */
        getIsAutoSaveEnabled(): boolean;

        /**
         * Returns the language code identifier (LCID) value that represents the base language for the organization.
         */
        getOrgLcid(): number;

        /**
         * Returns the unique text value of the organization?s name.
         */
        getOrgUniqueName(): string;

        /**
         * Returns a dictionary object of key value pairs that represent the query string arguments that were passed to the page.
         */
        getQueryStringParameters(): any;

        /** 
         * Returns the difference between the local time and Coordinated Universal Time (UTC).
         */
        getTimeZoneOffsetMinutes(): number;

        /**
         * Returns the GUID of the SystemUser.Id value for the current user.
         */
        getUserId(): string;

        /**
         * Returns the LCID value that represents the provisioned language that the user selected as their preferred language.
         */
        getUserLcid(): number;

        /**
         * Returns the name of the current user.
         */
        getUserName(): string;

        /**
         * Returns an array of strings that represent the GUID values of each of the security roles that the user is associated with or any teams that the user is associated with.
         */
        getUserRoles(): string[];

        /**
         * Prepends the organization name to the specified path.
         */
        prependOrgName(sPath: string): string;
    }

    type ClientType = "Web" | "Outlook" | "Mobile";
    type ClientState = "Online" | "Offline";

    interface client {
        /**
         * Returns a value to indicate which client the script is executing in.
         */
        getClient(): ClientType;

        /**
         * Use this instead of the removed isOutlookOnline method.
         */
        getClientState(): ClientState;
    }

    /**
     * Interface for the base of an Xrm.Page
     */
    interface PageBase<T extends AttributeCollectionBase, U extends TabCollectionBase, V extends ControlCollectionBase> {
        /**
         * Data on the page.
         */
        data: Xrm.DataModule<T>;

        /**
         * UI of the page.
         */
        ui: Xrm.UiModule<U, V>;

        /**
         * The context of the page.
         */
        context: Xrm.context;
    }

    /**
     * Interface for a generic Xrm.Page
     */
    interface BasicPage extends PageBase<AttributeCollection, TabCollection, ControlCollection> {
    }
}


type BaseXrm = typeof Xrm;
/**
 * Client-side xRM object model.
 */
interface Xrm<T extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>> extends BaseXrm {
    /**
     * The Xrm.Page object model, which contains data about the current page.
     */
    Page: T;

    /**
     * Various utility functions can be found here.
     */
    Utility: Xrm.Utility;
}


declare namespace Xrm {
    var Utility: Utility;

    /**
     * Interface for a Lookup which is used by some Xrm.Utility functions.
     */
    interface Lookup {
        /**
         * Entity type (logical name) of the lookup.
         */
        entityType: string;

        /**
         * GUID of the lookup.
         */
        id: string;

        /**
         * Record name of the lookup.
         */
        name?: string;
    }

    /**
     * Interface for a WindowOption object.
     */
    interface WindowOptions {
        /**
         * Specifies if it should open in a new window.
         */
        openInNewWindow: boolean;
    }

    /**
     * Interface for the Xrm.Utility functionality.
     */
    interface Utility {
        /**
         * Displays a dialog box containing an application-defined message.
         *
         * @param message The text of the message to display in the dialog.
         * @param onCloseCallback A function to execute when the OK button is clicked.
         */
        alertDialog(message: string, onCloseCallback?: Function): void;

        /**
         * Displays a confirmation dialog box that contains an optional message as well as OK and Cancel buttons.
         *
         * @param message The text of the message to display in the dialog.
         * @param yesCloseCallback A function to execute when the OK button is clicked.
         * @param noCloseCallback A function to execute when the Cancel button is clicked.
         */
        confirmDialog(message: string, yesCloseCallback?: Function, noCloseCallback?: Function): void;

        /**
         * Determine if an entity is an activity entity.
         *
         * @param entityName The logical name of an entity.
         */
        isActivityType(entityName: string): boolean;

        /**
         * Opens an entity form for a new or existing entity record using the options you set as parameters.
         *
         * @param name The logical name of the entity.
         * @param id The string representation of a unique identifier or the record to open in the form. If not set, a form to create a new record is opened.
         * @param parameters A dictionary object that passes extra query string parameters to the form. Invalid query string parameters will cause an error.
         * @param windowOptions You can choose to open a form in a new window by passing a dictionary object with a boolean openInNewWindow property set to true.
         */
        openEntityForm(name: string, id?: string, parameters?: any, windowOptions?: WindowOptions): void;

        /**
         * Opens a quick create form.
         * 
         * @param callback The function that will be called when a record is created. This function is passed a lookup object as a parameter.
         * @param entityLogicalName The logical name of the entity to create.
         * @param createFromEntity Designates a record that will provide default values based on mapped attribute values.
         * @param parameters A dictionary object that passes extra query string parameters to the form. Invalid query string parameters will cause an error.
         */
        openQuickCreate(callback: (lookup: Lookup) => any, entityLogicalName: string, createFromEntity?: Lookup, parameters?: any): void;

        /**
         * Opens an HTML web resource.
         * 
         * @param webResourceName The name of the HTML web resource to open.
         * @param webResourceData Data to be passed into the data parameter.
         * @param width The width of the window to open in pixels.
         * @param height The height of the window to open in pixels.
         */
        openWebResource(webResourceName: string, webResourceData?: string, width?: number, height?: number): Window;
    }
}
declare namespace Xrm {
    interface SubGridControl extends BaseControl {
        /**
         * Add event handlers to this event to run every time the subgrid refreshes. 
         * This includes when users sort the values by clicking the column headings. 
         */
        addOnLoad(functionRef: (context?: ExecutionContext<this>) => any): void;

        /**
         * Use this method to get the logical name of the entity data displayed in the grid.
         */
        getEntityName(): string

        /**
         * Use this method to get access to the Grid available in the GridControl.
         */
        getGrid(): Grid;

        /**
         * Use this method to get access to the ViewSelector available for the GridControl.
         */
        getViewSelector(): ViewSelector;

        /**
         * Use this method to remove event handlers from the GridControl.OnLoad event.
         */
        removeOnLoad(reference: Function): void;
    }

    interface Grid {
        /**
         * Returns a collection of every GridRow in the Grid.
         */
        getRows(): Collection<GridRow>;

        /**
         * Returns a collection of every selected GridRow in the Grid.
         */
        getSelectedRows(): Collection<GridRow>;

        /**
         * In the web application or the Dynamics CRM for Outlook client while connected to the server, this method returns the total number of records that match the filter criteria of the view, not limited by the number visible in a single page.
         * When the Dynamics CRM for Outlook client isn’t connected to the server, this number is limited to those records that the user has selected to take offline.
         * For Microsoft Dynamics CRM for tablets and Microsoft Dynamics CRM for phones this method will return the number of records in the subgrid.
         */
        getTotalRecordCount(): number;
    }

    interface GridRow {
        /**
         * Returns the GridRowData for the GridRow.
         */
        getData(): GridRowData;
    }

    interface GridRowData {
        /**
         * Returns the GridEntity for the GridRowData.
         */
        getEntity(): GridEntity;
    }

    interface GridEntity {
        /**
         * Returns the logical name for the record in the row.
         */
        getEntityName(): string;

        /**
         * Returns an entity reference for the record in the row.
         */
        getEntityReference(): Xrm.EntityReference;

        /**
         * Returns the id for the record in the row.
         */
        getId(): string;

        /**
         * Returns the primary attribute value for the record in the row.
         */
        getPrimaryAttributeValue(): string;
    }

}
declare namespace Xrm {
    interface PageTab<T extends SectionCollectionBase> {
        /**
         * Add an event handler on tab state change.
         *
         * @param reference Event handler for tab state change.
         */
        addTabStateChange(reference: Function): void;
    }

    interface GridEntity {
        /**
         * Returns a collection of the attributes on this record.
         */
        getAttributes(): GridCollection<GridEntityAttribute>;
    }

    interface GridCollection<T> {
        /**
         * Returns a list of all attributes on this record.
         */
        getAll(): T[];
        /**
         * Returns a list of all attributes on this record which matches the filter.
         */
        getByFilter(filter: (a: T) => boolean): T[];
        /**
         * Returns the first attribute on this record which matches the filter.
         */
        getFirst(filter: (a: T) => boolean): T | null;
        /**
         * Returns the attribute on this record with the given name, if any.
         */
        getByName(name: string): T | null;
        /**
         * Returns the attribute on this record with the given index, if any.
         */
        getByIndex(idx: number): T | undefined;
        /**
         * Returns the amount of attributes in this entity grid.
         */
        getLength(): number;
        /**
         * Iterator function for the attributes.
         */
        forEach(delegate: ForEach<T>): void;
    }

    interface GridEntityAttribute {
        /**
         * Returns the logical name of the attribute.
         */
        getKey(): string;
        /**
         * Returns the logical name of the attribute.
         */
        getName(): string;
        /**
         * Returns the value of the attribute on this record.
         */
        getValue(): string | null;
        /**
         * Returns the parent entity of this attribute.
         */
        getParent(): GridEntity;
    }
}
