export { EventEmitter } from 'eventemitter3';

// OAF Client initialization function
export function initOAFInstance(config: any) {
  // avoid unused-variable errors by referencing parameters
  void config;
  return {
    setSize: async (options: any) => { void options; },
    navigate: async (path: string) => { void path; },
    openForm: async (formConfig: any) => { void formConfig; },
    closeForm: async () => {},
    submitForm: async (formData: any) => { void formData; },
    on: (event: string, callback: Function) => { void event; void callback; },
    off: (event: string, callback: Function) => { void event; void callback; },
    emit: (event: string, data: any) => { void event; void data; },
  };
}
