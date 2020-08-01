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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WizProcessorApi) {
      root.WizProcessorApi = {};
    }
    root.WizProcessorApi.ProcessorsExpectedData = factory(root.WizProcessorApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProcessorsExpectedData model module.
   * @module model/ProcessorsExpectedData
   * @version 1.0
   */

  /**
   * Constructs a new <code>ProcessorsExpectedData</code>.
   * @alias module:model/ProcessorsExpectedData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ProcessorsExpectedData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessorsExpectedData} obj Optional instance to populate.
   * @return {module:model/ProcessorsExpectedData} The populated <code>ProcessorsExpectedData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('NumChunks'))
        obj.numChunks = ApiClient.convertToType(data['NumChunks'], 'Number');
    }
    return obj;
  }

  /**
   * a counter value
   * @member {Number} numChunks
   */
  exports.prototype.numChunks = undefined;

  return exports;

}));