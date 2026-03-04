export { EventEmitter } from 'eventemitter3';
export declare function initOAFInstance(config: any): {
    setSize: (options: any) => Promise<void>;
    navigate: (path: string) => Promise<void>;
    openForm: (formConfig: any) => Promise<void>;
    closeForm: () => Promise<void>;
    submitForm: (formData: any) => Promise<void>;
    on: (event: string, callback: Function) => void;
    off: (event: string, callback: Function) => void;
    emit: (event: string, data: any) => void;
};
