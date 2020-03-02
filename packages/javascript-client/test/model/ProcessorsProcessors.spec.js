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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WizProcessorApi);
  }
}(this, function(expect, WizProcessorApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ProcessorsProcessors', function() {
      beforeEach(function() {
        instance = new WizProcessorApi.ProcessorsProcessors();
      });

      it('should create an instance of ProcessorsProcessors', function() {
        // TODO: update the code to test ProcessorsProcessors
        expect(instance).to.be.a(WizProcessorApi.ProcessorsProcessors);
      });

    });
  });

}));
