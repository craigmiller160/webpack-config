# webpack-config

This is the core Webpack configuration, covering basic JavaScript, CSS, HTML, and resource files (images, fonts, etc).

## Environment Variables

This configuration can be customized using environment variables. Please create a `webpack.env` file in the root of your project to setup any of these you want to use. Here are the variables:

| Env Variable Name          | Default Value       | Description                                                                                                          |
|----------------------------|---------------------|----------------------------------------------------------------------------------------------------------------------|
| WEBPACK_PUBLIC_PATH        | /                   | Set the public path for the Webpack application.                                                                     |
| WEBPACK_HTML_TITLE         | Webpack Application | Sets the title for the HTML page                                                                                     |
| WEBPACK_HTML_TEMPLATE_PATH | {Internal Path }    | Sets the path to the HTML template file. This library provides one already, only use this if a custom one is needed. |
| WEBPACK_ANALYZE            | false               | If true, it will run the bundle analyzer                                                                             |

## NODE_ENV

NODE_ENV is a special environment variable that controls mode-specific behavior. It should be set as part of the Webpack run command.

`NODE_ENV=development` = Lightweight build for development tasks.

`NODE_ENV=production` = Heavy build that produces a highly optimized production bundle.

## Additional Dev Server Configuration

Several key Webpack Dev Server properties are omitted from this config and should be added by the consuming project. Here is what they look like:

```javascript
const devServerConfig = {
    port: 3000, // The port the devServer will run on
    https: true, // Whether or not to use https. Defaults to false
    proxy: {
        // Any devServer proxy configuration
    }
};
```

## How to Use

Install this library with `yarn add --dev @craigmiller160/webpack-config`. Then create a `webpack.config.js` file in the root of your project and set it up like this:

```javascript
// webpack-merge is provided with this library. It is only necessary when combining additional configurations
const { merge } = require('webpack-merge');
const config = require('@craigmiller160/webpack-config');

module.exports = merge([config, otherConfig1, otherConfig2]);
```

## How to Run

The NPM commands `craig-webpack` (for running production build) and `craig-webpack-dev` (for running dev server) are provided by this library.
