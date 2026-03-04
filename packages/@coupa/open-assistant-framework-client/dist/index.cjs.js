'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var eventemitter3 = require('eventemitter3');

// OAF Client initialization function
function initOAFInstance(config) {
  return {
    setSize: async options => {
    },
    navigate: async path => {
    },
    openForm: async formConfig => {
    },
    closeForm: async () => {},
    submitForm: async formData => {
    },
    on: (event, callback) => {
    },
    off: (event, callback) => {
    },
    emit: (event, data) => {
    }
  };
}

Object.defineProperty(exports, 'EventEmitter', {
  enumerable: true,
  get: function () { return eventemitter3.EventEmitter; }
});
exports.initOAFInstance = initOAFInstance;
