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
    describe('ProcessorsConfiguration', function() {
      beforeEach(function() {
        instance = new WizProcessorApi.ProcessorsConfiguration();
      });

      it('should create an instance of ProcessorsConfiguration', function() {
        // TODO: update the code to test ProcessorsConfiguration
        expect(instance).to.be.a(WizProcessorApi.ProcessorsConfiguration);
      });

      it('should have the property executorConfig (base name: "ExecutorConfig")', function() {
        // TODO: update the code to test the property executorConfig
        expect(instance).to.have.property('executorConfig');
        // expect(instance.executorConfig).to.be(expectedValueLiteral);
      });

      it('should have the property expectedData (base name: "ExpectedData")', function() {
        // TODO: update the code to test the property expectedData
        expect(instance).to.have.property('expectedData');
        // expect(instance.expectedData).to.be(expectedValueLiteral);
      });

      it('should have the property processor (base name: "Processor")', function() {
        // TODO: update the code to test the property processor
        expect(instance).to.have.property('processor');
        // expect(instance.processor).to.be(expectedValueLiteral);
      });

    });
  });

}));