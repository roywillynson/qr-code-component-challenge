// FIX: Module cannot found in ts files
declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent;

  export default component;
}

/// <reference types="vite/client" />
