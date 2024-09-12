---
title: StationOps Wizard Guide
description: StationOps Wizard Guide
---


# {% $markdoc.frontmatter.title %}




## Create Organisation


1. In the organisation creation dashboard click on __Create Organisation__.
2. Provide your organisation name and click __Create__.

![Rollback](/images/example-walkthrough/wizCreateOrg.png) {%  .rounded-image .max-w-3xl .mx-auto %}


You will be brought to your new organisation's dashboard.




## Create Project


1. In your new organisation's dashboard click on __Create Project__.
2. Provide your project name and click __Create__.

![Rollback](/images/example-walkthrough/wizProjectCreate.png) {%  .rounded-image .max-w-3xl .mx-auto %}


## Configure AWS Access


1. In the project creation wizard click on __Add account__.
2. Give the AWS account a name and click __Authorize with AWS__.
3. On the AWS login page enter your AWS credentials and click __Sign in__.
4. Within the CloudFormation stack console read and check the ackowladgement then click __Create stack__.
5. Return to StationOps and click __Done__.
6. Choose an appropriate AWS region and click __Next__.

![Rollback](/images/example-walkthrough/wizCreateStack.png) {%  .rounded-image .max-w-3xl .mx-auto %}


## Connect Git Repositories


1. Click on __Connect Git Account__.
2. In github select the appropriate repository and click __install__.
3. Click __Next__.

![Rollback](/images/example-walkthrough/wizGitConnect.png) {%  .rounded-image .max-w-3xl .mx-auto %}


## Configure project environment


1. Input your environment names and click __Next__.

    ![Rollback](/images/example-walkthrough/wizCreateEnvironment.png) {%  .rounded-image .max-w-3xl .mx-auto %}

2. Select the service you require, give it a name,choose the appropriate repository and click __Next__.

    ![Rollback](/images/example-walkthrough/wizServiceCreate.png) {%  .rounded-image .max-w-3xl .mx-auto %}

3. Configure any necessary options for the service or add any additional components and click __Next__.

    ![Rollback](/images/example-walkthrough/wizAddComponent.png) {%  .rounded-image .max-w-3xl .mx-auto %}

4. To deploy to the project environment click __Deploy to [env]__.