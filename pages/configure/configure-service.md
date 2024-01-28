---
title: Configure Service
description: Configure Service
---

# {% $markdoc.frontmatter.title %}



1. Create a new configuration.
2. Scroll down to your service configuration and fill out as follows:
   - **Framework**: Select a framework or *docker* to use a custom dockerfile from your application root directory.
   - **Environment Version**: *[environment version for your framework to run]*
   - **Connection**: *[your connection]*, see here for more details
   - **Account**: *[your git account name]*
   - **Repository**: *[your git repository name]*
   - **Branch**: *[your git branch name]*
   - **Pre-Deployment Script**:

     This script is executed in the root directory of the application code directory, just once before each deployment.

     Useful for tasks like database migrations. For example:

     ````php artisan migrate --force````

   - **Application Build Script**:

     Bash commands executed at the root of the application code directory to build the application before the docker build.

   - **Use file-based environment configuration**

     This option creates environment scoped environment files in your root directory.

     Useful for instance in frontend services, where the build process outputs static files meaning direct environment configuration is not possible.

     File names are in format

     ````.env.[environment name]````

   - **Create image per environment**

     This option creates a unique image for each environment rather than using a single image for all environments.

     Useful for instance in frontend services where the build process outputs static files and cannot directly access environment variables.

     The environment name is provided to Docker as an argument using the variable: :

     ````STATION_OPS_ENV````

     ![Configure Frontend](/images/example-walkthrough/configure-frontend.png) {%  .rounded-image .max-w-3xl .mx-auto %}
3. Scroll down and click **Create**.




## Next steps

- [Example Walkthrough](/example-walkthrough)
