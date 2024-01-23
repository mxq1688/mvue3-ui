import * as components from './src/index';
import type { App, Plugin } from 'vue';

export * from './src/index';

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use(components[c]);
    }
  }
};
