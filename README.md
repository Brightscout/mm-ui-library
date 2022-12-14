# Mattermost UI Library

React and react-bootstrap based UI library for mattermost plugins

# How to use

## 1. Use the correct node version

Once you've moved into the folder where you've cloned the repo, run the following command to check the node version (you need to [install nvm](https://github.com/nvm-sh/nvm/tree/v0.39.1#installing-and-updating) before proceeding further)

```sh
$ nvm which
```

> If you see the output something like `N/A: version "v14.18.1" is not yet installed` then run the following command

```sh
$ nvm install v14.18.1
```

Now run the following command to start using the above node version

```sh
$ nvm use
```

## 2. Installation

Run the following command to install the library

```sh
$ npm install mattermost-ui-library
```

The library has the following peer dependencies
```
"bootstrap": "~5.2.0",
"font-awesome": "~4.7.0",
"react": "~16.13.1",
"react-dom": "~16.10.2",
"typescript": "~3.9.10"
```

## 3. Import the styles from the library

```
@import "mattermost-ui-library/build/styles/main.scss";
```

## 3. Available Components

~~~
 1. AutoSuggest
 2. Buttons
    1. MenuButtons
 3. Card
    1. BaseCard
    2. SubscriptionCard
    3. Card
 4. Checkbox
 5. ConfirmationDialog
 6. ConfirmationPanel
 7. Dropdown
 8. EmptyState
 9. Icons
 10. InputField
 11. Loader
    1. Circular
    2. Linear
    3. Skeleton
 12. Modal
    1. subComponents
       1. ModalBody
       2. ModalFooter
       3. ModalHeader
       4. ModalLoader
       5. ModalSubtitleAndError
     2. CustomModal
 13. Popover
 14. ResultPanel
 15. SvgWrapper
 16. Tabs
 17. ToggleSwitch
 18. Tooltip
~~~

## 4. Importing the components
~~~
import {ModalSubtitleAndError, ModalFooter, AutoSuggest} from 'mattermost-ui-library';
import {SkeletonLoader, EditIcon, DeleteIcon, UnlinkIcon, Modal} from 'mattermost-ui-library';
~~~

## 4. Folder Structure

```
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── mattermost.png
│   └── robots.txt
├── src
│   ├── components
│   │   └── *
│   ├── styles
│   │   ├── abstract
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   ├── base
│   │   │   └── _utils.scss
│   │   ├── components
│   │   │   └──*
│   │   └── main.scss
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── .browserslistrc
├── .editorconfig
├── .eslintignore
├── .gitignore
├── .nvmrc
├── .prettierignore
├── .prettierrc
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## 5. Local Development

To use package locally, follow the following steps:

  - Run the following commands in the root directory of the library:

  ```
  npm run build
  npm link
  ```

  - In any plugin, where you want to use the library, first cd into the webapp folder of the plugin and run the following command:

  ```
  npm link mattermost-ui-library
  ```

  - Now, after making any changes in the components of the UI Library, run the `npm run build` command again to create the new build for the library.


---

Made with &#9829; by [Brightscout](https://www.brightscout.com)
