# WizProcessorApi.ProcessorsExecutorConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downstreamLocations** | [**[ProcessorsDownstreamDataLocation]**](ProcessorsDownstreamDataLocation.md) | TODO: make API URL templating agnostic, refactor into server package e.g. Server.GetProc(procID, runID) will return /processors/procID/runs/runID this could be used both for generating endpoints and here, for passing outputs downstream | [optional] 
**maxWorkers** | **Number** |  | [optional] 
**sendDownstream** | **Boolean** |  | [optional] 


