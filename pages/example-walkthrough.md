---
title: Example Walkthrough
description: Example Walkthrough
---

# {% $markdoc.frontmatter.title %}


This guide is a walkthrough of setting up an example project containing a frontend and backend service
with two environments, `test` and `prod`.


## Create Environments

1. Navigate to your project's dashboard and click __Settings__.
2. Click __Environments__ in the side navigation.
3. Click __Create Environment__.
4. Provide `test` as the environment name and then click __Create__.
5. Do the same to create the `prod` environment. {% .mb-6 %}

![Environments](/images/example-walkthrough/environments.png){% .rounded-image  %}



## Create Services

1. Click __Services__ in the side navigation.
2. Provide `frontend` as the service name and then click __Create__.
3. Do the same to create the `backend` environment. {% .mb-6 %}

![Environments](/images/example-walkthrough/services.png) {% .rounded-image  %}




## Create Repository Connection

{% callout type="info" %}
The [guestbook-frontend](https://github.com/stationops/guestbook-frontend) and [guestbook-backend](https://github.com/stationops/guestbook-backend) repositories
used in this guide are public can be cloned to follow along with this guide.
{% /callout %}

We will now create a connection to out git repository through the AWS console.

1. Click __Infrastructure__ in the top navigation.
2. Click __Connections__ in the left navigation.
3. Click the __Create Connection__ button.
4. You will be brought to your AWS console, provide a *Connection name* and follow the rest of the wizard allowing access to the `guestbook-frontend` and `guestbook-backend` repositories.

   ![Create Configuration](/images/example-walkthrough/aws-configuration.png) {% .rounded-image %}
5. Return to Station Ops and you will now see your connection listed.

   ![Connections](/images/example-walkthrough/connections.png) {% .rounded-image .max-w-3xl .mx-auto %}


## Create Infrastructure Configuration

1. Click __Infrastructure__ in the top navigation.
2. Click __Configuration__ in the left navigation.
3. Click the __Create Configuration__ button. 

   ![Create Configuration](/images/example-walkthrough/configuration-description.png)  {% .rounded-image .max-w-3xl .mx-auto %}
4. Provide a description, eg. *Initial Launch*.


## Configure frontend

1. Scroll down to the `frontend` configuration and fill out as follows:
   - Framework: *Vue*
   - Environment Version: *Node 16.14.0*
   - Connection: *stationopsconnection* (created in previous step)
   - Account: *[your frontend git account name]*
   - Repository: *guestbook-frontend*
   - Branch: *master*

     ![Configure Frontend](/images/example-walkthrough/configure-frontend.png) {%  .rounded-image .max-w-3xl .mx-auto %}
2. Leave the environment settings as default.

   ![Configure Frontend](/images/example-walkthrough/environment-frontend.png) {%  .rounded-image .max-w-3xl .mx-auto %}

## Configure backend

1. Scroll down to the `backend` configuration and fill out as follows:
   - Framework: *Spring Boot*
   - Environment Version: *Java 17*
   - Connection: *stationopsconnection* (created in previous step)
   - Account: *[your backend git account name]*
   - Repository: *guestbook-backend*
   - Branch: *master*

     ![Configure Backend](/images/example-walkthrough/configure-backend.png) {%  .rounded-image .max-w-3xl .mx-auto %}
2. Leave the environment settings as default.

## Configure Database

1. Scroll down to *Datastores*
2. Click *New Datastore*
3. Provide details as follows:
   - Name: *guestbookdb*
   - Type: *MySql*
   - Version: *8.0*
   - Choose a username, password and DB size for both environments
   
        ![Configure Backend](/images/example-walkthrough/configure-db.png) {%  .rounded-image .max-w-3xl .mx-auto %}


## Configure Environment Variables

We will not configure the environment variables so that `frontend` can connect to the `backend` API
and  `backend` can connect to `guestbookdb`.

1. Scroll down to *Variables*
2. In the `frontend` section, click *Add Variable* and provide details as follows:
   - Name: *VUE_APP_API_HOST*
   - Type: *Derived*
   - Value: *Host (Backend)*
   
        ![Configure Backend](/images/example-walkthrough/variable-frontend.png) {%  .rounded-image .max-w-3xl .mx-auto %}
3. In the `backend` section, create three variables and provide details as follows:

      - Name: *DB_HOST*
      - Type: *Derived*
      - Value: *Host (guestbookdb)*
   
      - Name: *DB_PORT*
      - Type: *Derived*
      - Value: *Port (guestbookdb)*

      - Name: *DB_USERNAME* {%  .mt-6 %}
      - Type: *Derived*
      - Value: *Username (guestbookdb)*

      - Name: *DB_PASSWORD* {%  .mt-6 %}
      - Type: *Derived*
      - Value: *Password (guestbookdb)* {%  .mb-6 %}

      ![backend variables](/images/example-walkthrough/variable-backend.png) {%  .rounded-image .max-w-3xl .mx-auto %}
4. Click *Create*, you will redirected to *Infrastructure Configuration* details page.
   
   ![backend variables](/images/example-walkthrough/config-unlaunched.png) {%  .rounded-image .max-w-3xl .mx-auto %}


## Launch Configuration to test

1. Click *Launch to test*, you will be redirected to the *Infrastructure Configuration Launch* details page. 
   As this is the first launch, it can take up to 30 minutes to complete.


   ![backend variables](/images/example-walkthrough/initial-launch.png) {%  .rounded-image .max-w-3xl .mx-auto %}
3. This will 

## Deploy Services to test

1. Click *Services* in the top navigation.
2. Click `frontend` from the main grid.
3. Click *Packages* in the side navigation.

   ![Service Packages](/images/example-walkthrough/initial-packages.png) {%  .rounded-image .max-w-3xl .mx-auto %}
4. Click on the first package listed.

   ![Service Packages](/images/example-walkthrough/initial-package.png) {%  .rounded-image .max-w-3xl .mx-auto %}
5. Click the *Create Release* button.
6. Provide a release name, eg. *2023.39.1*
7. Click *Create*.

   ![Service Packages](/images/example-walkthrough/initial-release.png) {%  .rounded-image .max-w-3xl .mx-auto %}
8. Click *Deploy to test*

   ![Service Packages](/images/example-walkthrough/initial-deploy.png) {%  .rounded-image .max-w-3xl .mx-auto %}
9. Wait for `frontend` deployment to complete and then preform the same actions for `backend`.
10. Click *Manage* in the top navigation and the click the `frontend` node.
   
    ![Service Packages](/images/example-walkthrough/initial-manage.png) {%  .rounded-image  %}
11. Click *Open* in the side navigation. You will be brought the `frontend` application using the generated Station Ops url. To use a custom domain follow these steps.
   
    ![Service Packages](/images/example-walkthrough/initial-app.png) {%  .rounded-image  %}


## Deploying to prod

1. Click *Infrastructure* in the top navigation.
2. Click *Promote* in the main grid to launch your infrastructure to `prod`

   ![Service Packages](/images/example-walkthrough/infra-promote.png) {%  .rounded-image .max-w-3xl .mx-auto  %}
3. Wait for the infrastructure to deploy and then click *Services* in the top navigation.

   ![Service Packages](/images/example-walkthrough/services-promote.png) {%  .rounded-image  .max-w-3xl .mx-auto %}
4. Click __Promote__ to deploy `frontend` and `backend` to prod.
5. Use the *Manage* screen as before to open the `prod` frontend.

   ![prod frontend](/images/example-walkthrough/prod-app.png) {%  .rounded-image  .max-w-3xl .mx-auto %}



## Tearing down infrastructure

1. Click *Infrastructure* in the top navigation.
2. In the main grid click `test`.
3. Click the *Tear Down* button and wait for tear down to complete.
4. Preform the same actions for `prod`.







## Next steps

- [Example Walkthrough](/example-walkthrough)
