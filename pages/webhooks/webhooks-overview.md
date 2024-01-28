---
title: Webhooks Overview
description: Webhooks Overview
---

# {% $markdoc.frontmatter.title %}


To receive webhooks, enable in *Settings* and define a base URL. Webhooks will be sent as POST requests to paths extending from this base URL.


## Webhooks type
| Type                     | Path                     | JSON Body                                              |
|--------------------------|--------------------------|--------------------------------------------------------|
| Service Deploy Completed | /servicedeploy/completed | projectName, environmentName, serviceName, releaseName |


## Enabling Webhooks
1. In your project dashboard, click **Settings**.
1. In the side navigation, click  **Webhooks**.
1. Click *Enable Webhooks*, add a *Base Url* and **Save**.



## Viewing Webhook Result
1. From a resource with configured webhook, eg. *Service Deploy*, in the top right click **View Webhook Result**.

   ![Service Packages](/images/webhooks/open-webhook.png) {%  .rounded-image .max-w-sm .mx-auto  %}
2. Detail abouts the webhook HTTP request will be displayed.
   
   ![Service Packages](/images/webhooks/webhook-result.png) {%  .rounded-image .mx-auto %}

