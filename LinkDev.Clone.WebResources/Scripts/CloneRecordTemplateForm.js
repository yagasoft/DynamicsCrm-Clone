var Ldv = window.Ldv || {};

Ldv.CloneRecordTemplateForm_OnLoad = function()
{
	try
	{
		SetupEntityNameAutoComplete(Sdk.CloneRecordTemplate.TargetEntity, null, Ldv.Entities_OnChange);
	}
	catch (e)
	{
		console.error('CloneRecordTemplateForm_OnLoad');
		console.error(e);
	}
};

Ldv.Entities_OnChange = function()
{
	try
	{
		setTimeout(
			function()
				{
					Ldv.LoadFields(GetFieldValue(Sdk.CloneRecordTemplate.TargetEntity));
				}, 200);
	}
	catch (e)
	{
		console.error('Entities_OnChange');
		console.error(e);
	}
};

Ldv.IsDefault_OnChange = function()
{
	try
	{
		Ldv.SetRecordDefault(GetFieldValue(Sdk.CloneRecordTemplate.Default) || false);
	}
	catch (e)
	{
		console.error('IsDefault_OnChange');
		console.error(e);
	}
};

Ldv.LoadFields = function(entityName)
{
	try
	{
		if (!entityName)
		{
			return;
		}

		RetrieveEntityFields(entityName,
			function(fields)
				{
					try
					{
						LoadMultiSelect(Sdk.CloneRecordTemplate.Fields, fields, 'Fields to Copy', 200);
						LoadMultiSelect(Sdk.CloneRecordTemplate.CloneFlagField, fields, 'Clone Flag Field', 200, null, true);
					}
					catch (e)
					{
						console.error('LoadFields => GetEntityFields');
						console.error(e);
					}
				},
			function(message)
				{
					SetFormNotification(message, message, NotificationLevel.ERROR);
				});
	}
	catch (e)
	{
		console.error('LoadFields');
		console.error(e);
	}
};

Ldv.SetRecordDefault = function(isDefault)
{
	try
	{
		if (isDefault)
		{
			ShowBusyIndicator('Setting as default ... ', 'cloneRecordByTemplateDefault');

			var recordId = GetRecordId(true);

			$.ajax({
				type: "GET",
				contentType: "application/json; charset=utf-8",
				datatype: "json",
				url: Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ldv_clonerecordtemplates"
					+ "?$select=ldv_clonerecordtemplateid"
					+ "&$filter=ldv_isdefault eq true"
					+ (recordId ? (" and ldv_clonerecordtemplateid ne " + recordId) : '')
					+ " and  ldv_targetentity eq '" + GetFieldValue(Sdk.CloneRecordTemplate.TargetEntity) + "'",
				beforeSend: function(xmlHttpRequest)
				{
					xmlHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
					xmlHttpRequest.setRequestHeader("OData-Version", "4.0");
					xmlHttpRequest.setRequestHeader("Accept", "application/json");
				},
				async: true,
				success: function(data, textStatus, xhr)
				{
					var results = data.value;

					var entity = {};
					entity.ldv_isdefault = false;

					for (var i = 0; i < results.length; i++)
					{
						var id = results[i]["ldv_clonerecordtemplateid"];

						$.ajax({
							type: "PATCH",
							contentType: "application/json; charset=utf-8",
							datatype: "json",
							url: Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ldv_clonerecordtemplates(" + id + ")",
							data: JSON.stringify(entity),
							beforeSend: function(xmlHttpRequest)
							{
								xmlHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
								xmlHttpRequest.setRequestHeader("OData-Version", "4.0");
								xmlHttpRequest.setRequestHeader("Accept", "application/json");
							},
							async: true,
							success: function(data, textStatus, xhr)
							{
								HideBusyIndicator('cloneRecordByTemplateDefault');
							},
							error: function(xhr, textStatus, errorThrown)
							{
								HideBusyIndicator('cloneRecordByTemplateDefault');
								console.error('SetRecordDefault => fetch defaults => remove default');
								console.error(textStatus);
								console.error(errorThrown);
								console.error(xhr);
							}
						});
					}

					if (!results.length)
					{
						HideBusyIndicator('cloneRecordByTemplateDefault');
					}
				},
				error: function(xhr, textStatus, errorThrown)
				{
					console.error('SetRecordDefault => fetch defaults');
					console.error(textStatus);
					console.error(errorThrown);
					console.error(xhr);
				}
			});
		}
	}
	catch (e)
	{
		console.error('SetRecordDefault');
		console.error(e);
	}
};
