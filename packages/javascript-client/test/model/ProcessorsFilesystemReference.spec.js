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
    describe('ProcessorsFilesystemReference', function() {
      beforeEach(function() {
        instance = new WizProcessorApi.ProcessorsFilesystemReference();
      });

      it('should create an instance of ProcessorsFilesystemReference', function() {
        // TODO: update the code to test ProcessorsFilesystemReference
        expect(instance).to.be.a(WizProcessorApi.ProcessorsFilesystemReference);
      });

      it('should have the property driver (base name: "Driver")', function() {
        // TODO: update the code to test the property driver
        expect(instance).to.have.property('driver');
        // expect(instance.driver).to.be(expectedValueLiteral);
      });

      it('should have the property location (base name: "Location")', function() {
        // TODO: update the code to test the property location
        expect(instance).to.have.property('location');
        // expect(instance.location).to.be(expectedValueLiteral);
      });

    });
  });

}));