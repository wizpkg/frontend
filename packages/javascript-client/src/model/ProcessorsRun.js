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
    define(['ApiClient', 'model/ProcessorsConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProcessorsConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.WizProcessorApi) {
      root.WizProcessorApi = {};
    }
    root.WizProcessorApi.ProcessorsRun = factory(root.WizProcessorApi.ApiClient, root.WizProcessorApi.ProcessorsConfiguration);
  }
}(this, function(ApiClient, ProcessorsConfiguration) {
  'use strict';

  /**
   * The ProcessorsRun model module.
   * @module model/ProcessorsRun
   * @version 1.0
   */

  /**
   * Constructs a new <code>ProcessorsRun</code>.
   * @alias module:model/ProcessorsRun
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ProcessorsRun</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessorsRun} obj Optional instance to populate.
   * @return {module:model/ProcessorsRun} The populated <code>ProcessorsRun</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Configuration'))
        obj.configuration = ProcessorsConfiguration.constructFromObject(data['Configuration']);
      if (data.hasOwnProperty('CurrentState'))
        obj.currentState = ApiClient.convertToType(data['CurrentState'], 'Number');
      if (data.hasOwnProperty('RunID'))
        obj.runID = ApiClient.convertToType(data['RunID'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/ProcessorsConfiguration} configuration
   */
  exports.prototype.configuration = undefined;

  /**
   * Note: Embedding structs will automatically promote the child struct's functions, and since our State type is an enum that overrides the default Marshal and Unmarshal functions, it overwrites it for the parent type as well. Remember, the CurrentState must be updated from the RunProcessor state to be fresh. TODO: think about these guarantees
   * @member {Number} currentState
   */
  exports.prototype.currentState = undefined;

  /**
   * @member {String} runID
   */
  exports.prototype.runID = undefined;

  return exports;

}));