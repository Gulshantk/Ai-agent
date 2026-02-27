export { EventEmitter } from 'eventemitter3';

// OAF Client initialization function
export function initOAFInstance(config: any) {
  return {
    setSize: async (options: any) => {},
    navigate: async (path: string) => {},
    openForm: async (formConfig: any) => {},
    closeForm: async () => {},
    submitForm: async (formData: any) => {},
    on: (event: string, callback: Function) => {},
    off: (event: string, callback: Function) => {},
    emit: (event: string, data: any) => {},
  };
}
