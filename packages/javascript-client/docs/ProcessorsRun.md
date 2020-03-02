# WizProcessorApi.ProcessorsRun

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**ProcessorsConfiguration**](ProcessorsConfiguration.md) |  | [optional] 
**currentState** | **Number** | Note: Embedding structs will automatically promote the child struct's functions, and since our State type is an enum that overrides the default Marshal and Unmarshal functions, it overwrites it for the parent type as well. Remember, the CurrentState must be updated from the RunProcessor state to be fresh. TODO: think about these guarantees | [optional] 
**runID** | **String** |  | [optional] 


