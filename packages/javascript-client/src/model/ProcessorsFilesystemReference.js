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
    root.WizProcessorApi.ProcessorsFilesystemReference = factory(root.WizProcessorApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProcessorsFilesystemReference model module.
   * @module model/ProcessorsFilesystemReference
   * @version 1.0
   */

  /**
   * Constructs a new <code>ProcessorsFilesystemReference</code>.
   * @alias module:model/ProcessorsFilesystemReference
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ProcessorsFilesystemReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessorsFilesystemReference} obj Optional instance to populate.
   * @return {module:model/ProcessorsFilesystemReference} The populated <code>ProcessorsFilesystemReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Driver'))
        obj.driver = ApiClient.convertToType(data['Driver'], 'String');
      if (data.hasOwnProperty('Location'))
        obj.location = ApiClient.convertToType(data['Location'], 'String');
    }
    return obj;
  }

  /**
   * the filesystem driver (e.g. NFS, local, ZFS, etc)
   * @member {String} driver
   */
  exports.prototype.driver = undefined;

  /**
   * the actual file path location
   * @member {String} location
   */
  exports.prototype.location = undefined;

  return exports;

}));
