---
title: Architecture
description: Architecture
---


# {% $markdoc.frontmatter.title %}


After deploying your infrastructure, the **Manage** page will display an architecture diagram
of your deployed services and components where you can preform operations, such as restarts and rolling backs


## Using the Manage page
1. To perform an action on a node click on the appropriate node in the project management dashboard.
2. In the **overview** panel you will see thhe performative actions *Open*, *Rollback*, *Restart* and *Build* for node.
3. You can also see collected metrics and the service deployment timeline.
4. In the **configuration** panel you can view and make changes to the nodes configuration.
5. In the **AWS Resources** panel you can click on __ECS Service__ to be brought to your AWS ECS cluster page.
6. In the **Runtime Logs** panel you can view currently recorded logs for the node.


![Management Page](/images/manage/Management.png) {%  .rounded-image .max-w-3xl .mx-auto %}

- [StationOps Wizard](/wizard.md)
