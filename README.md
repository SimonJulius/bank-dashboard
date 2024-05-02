# bank-dashboard

This Project is implemented with Vue 3 and typescript. It has the components for a data visualisation dashboard.
The styling is done with tailwind css.

## Requirements

Make sure you are using Node 18.3 or higher.

## Start the project
* clone the project.
* Run `npm install` to install all dependencies.
* Run `npm run dev` to start the local development.

## Project structure
* The root of the project contains all the configurations including tsconfig, tsconfig.app (Which is where you will want to add typescript configuration for the app), tailwind.config to add and extend tailwind styling configuration, postcss.config etc.
* The src folder is where the main code lives. For this project, it contains the main.ts(as the entry point), App.vue and 6 folders with each serving it purpose and they are assets, components, constants, layouts, lib and pages.
* The assets: contains all assets used in the project including global styling definitions and icons.
* The component: This contains the icons folder for reusable icon components, shared for components that are generic to the application and can be used anywhere, and ui containing shadcn components.
* The constants: For easy to change constant values that are used everywhere so we can have a single source of truth.
* The layouts: For page layouts so different pages can easily share a layout.
* The lib: This is where utility(reusable) functions are kept to help us take care of function sharing between components and pages.
* The pages: The place that houses each page



