/*
 * Wiz Processor API
 * This is the HTTP + JSON + REST version of the Wiz Processor API.
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.11
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ProcessorsDownstreamDataLocation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProcessorsDownstreamDataLocation'));
  } else {
    // Browser globals (root is window)
    if (!root.WizProcessorApi) {
      root.WizProcessorApi = {};
    }
    root.WizProcessorApi.ProcessorsExecutorConfig = factory(root.WizProcessorApi.ApiClient, root.WizProcessorApi.ProcessorsDownstreamDataLocation);
  }
}(this, function(ApiClient, ProcessorsDownstreamDataLocation) {
  'use strict';

  /**
   * The ProcessorsExecutorConfig model module.
   * @module model/ProcessorsExecutorConfig
   * @version 1.0
   */

  /**
   * Constructs a new <code>ProcessorsExecutorConfig</code>.
   * @alias module:model/ProcessorsExecutorConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ProcessorsExecutorConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessorsExecutorConfig} obj Optional instance to populate.
   * @return {module:model/ProcessorsExecutorConfig} The populated <code>ProcessorsExecutorConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('DownstreamLocations'))
        obj.downstreamLocations = ApiClient.convertToType(data['DownstreamLocations'], [ProcessorsDownstreamDataLocation]);
      if (data.hasOwnProperty('MaxWorkers'))
        obj.maxWorkers = ApiClient.convertToType(data['MaxWorkers'], 'Number');
      if (data.hasOwnProperty('SendDownstream'))
        obj.sendDownstream = ApiClient.convertToType(data['SendDownstream'], 'Boolean');
    }
    return obj;
  }

  /**
   * TODO: make API URL templating agnostic, refactor into server package e.g. Server.GetProc(procID, runID) will return /processors/procID/runs/runID this could be used both for generating endpoints and here, for passing outputs downstream
   * @member {Array.<module:model/ProcessorsDownstreamDataLocation>} downstreamLocations
   */
  exports.prototype.downstreamLocations = undefined;

  /**
   * @member {Number} maxWorkers
   */
  exports.prototype.maxWorkers = undefined;

  /**
   * @member {Boolean} sendDownstream
   */
  exports.prototype.sendDownstream = undefined;

  return exports;

}));
