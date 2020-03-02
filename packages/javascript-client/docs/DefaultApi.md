# WizProcessorApi.DefaultApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addData**](DefaultApi.md#addData) | **POST** /processors/{procID}/runs/{runID}/data | Adds data from the run
[**configure**](DefaultApi.md#configure) | **POST** /processors/{procID}/runs/{runID}/config | Sets a single run's configuration
[**getAllProcessors**](DefaultApi.md#getAllProcessors) | **GET** /processors | Retrieves all processors
[**getAllRuns**](DefaultApi.md#getAllRuns) | **GET** /processors/{procID}/runs | Retrieves all runs
[**getConfig**](DefaultApi.md#getConfig) | **GET** /processors/{procID}/runs/{runID}/config | Retrieves a single run's configuration
[**getData**](DefaultApi.md#getData) | **GET** /processors/{procID}/runs/{runID}/data | Gets data to the run
[**getProcessor**](DefaultApi.md#getProcessor) | **GET** /processors/{id} | Retrieves a single processor
[**getRun**](DefaultApi.md#getRun) | **GET** /processors/{procID}/runs/{runID} | Retrieves a single run


<a name="addData"></a>
# **addData**
> 'Boolean' addData(procID, runID, data)

Adds data from the run

### Example
```javascript
var WizProcessorApi = require('wiz_processor_api');

var apiInstance = new WizProcessorApi.DefaultApi();

var procID = "procID_example"; // String | Processor ID

var runID = "runID_example"; // String | Run ID

var data = new WizProcessorApi.ProcessorsData(); // ProcessorsData | Data to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addData(procID, runID, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **procID** | **String**| Processor ID | 
 **runID** | **String**| Run ID | 
 **data** | [**ProcessorsData**](ProcessorsData.md)| Data to add | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configure"></a>
# **configure**
> 'Boolean' configure(procID, runID, configuration)

Sets a single run's configuration

### Example
```javascript
var WizProcessorApi = require('wiz_processor_api');

var apiInstance = new WizProcessorApi.DefaultApi();

var procID = "procID_example"; // String | Processor ID

var runID = "runID_example"; // String | Run ID

var configuration = new WizProcessorApi.ProcessorsConfiguration(); // ProcessorsConfiguration | Configuration to set


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configure(procID, runID, configuration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **procID** | **String**| Processor ID | 
 **runID** | **String**| Run ID | 
 **configuration** | [**ProcessorsConfiguration**](ProcessorsConfiguration.md)| Configuration to set | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllProcessors"></a>
# **getAllProcessors**
> ProcessorsProcessors getAllProcessors()

Retrieves all processors

### Example
```javascript
var WizProcessorApi = require('wiz_processor_api');

var apiInstance = new WizProcessorApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllProcessors(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProcessorsProcessors**](ProcessorsProcessors.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllRuns"></a>
# **getAllRuns**
> ProcessorsRuns getAllRuns(procID)

Retrieves all runs

### Example
```javascript
var WizProcessorApi = require('wiz_processor_api');

var apiInstance = new WizProcessorApi.DefaultApi();

var procID = "procID_example"; // String | Processor ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllRuns(procID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **procID** | **String**| Processor ID | 

### Return type

[**ProcessorsRuns**](ProcessorsRuns.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getConfig"></a>
# **getConfig**
> ProcessorsConfiguration getConfig(procID, runID)

Retrieves a single run's configuration

### Example
```javascript
var WizProcessorApi = require('wiz_processor_api');

var apiInstance = new WizProcessorApi.DefaultApi();

var procID = "procID_example"; // String | Processor ID

var runID = "runID_example"; // String | Run ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConfig(procID, runID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **procID** | **String**| Processor ID | 
 **runID** | **String**| Run ID | 

### Return type

[**ProcessorsConfiguration**](ProcessorsConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getData"></a>
# **getData**
> ProcessorsDataSpec getData(procID, runID)

Gets data to the run

### Example
```javascript
var WizProcessorApi = require('wiz_processor_api');

var apiInstance = new WizProcessorApi.DefaultApi();

var procID = "procID_example"; // String | Processor ID

var runID = "runID_example"; // String | Run ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getData(procID, runID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **procID** | **String**| Processor ID | 
 **runID** | **String**| Run ID | 

### Return type

[**ProcessorsDataSpec**](ProcessorsDataSpec.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessor"></a>
# **getProcessor**
> ProcessorsProcessor getProcessor(id)

Retrieves a single processor

### Example
```javascript
var WizProcessorApi = require('wiz_processor_api');

var apiInstance = new WizProcessorApi.DefaultApi();

var id = "id_example"; // String | Processor ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessor(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Processor ID | 

### Return type

[**ProcessorsProcessor**](ProcessorsProcessor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRun"></a>
# **getRun**
> ProcessorsRun getRun(procID, runID)

Retrieves a single run

### Example
```javascript
var WizProcessorApi = require('wiz_processor_api');

var apiInstance = new WizProcessorApi.DefaultApi();

var procID = "procID_example"; // String | Processor ID

var runID = "runID_example"; // String | Run ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRun(procID, runID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **procID** | **String**| Processor ID | 
 **runID** | **String**| Run ID | 

### Return type

[**ProcessorsRun**](ProcessorsRun.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

