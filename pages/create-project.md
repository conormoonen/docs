---
title: Create Project
description: Create Project
---

# {% $markdoc.frontmatter.title %}


## Create Organisation

1. In the StationOps dashboard click on __Create Organisation__.
2. Provide your organisation name and click __Create__.

You will be brought to your new organisation's dashboard.


## Create Project

1. In your new organisation's dashboard click on __Create Project__.
2. Provide your project name and click __Create__.

You will be brought to your new project's dashboard.


## Configure AWS Access

Before configuring AWS access in StationOps, create an Access Key in the AWS
console with for a user with the permissions below, follow this [guide](/create-access-key) for more details.
````
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "sts:AssumeRole",
                "iam:CreateRole",
                "iam:PassRole",
                "iam:ListRoles",
                "codestar-connections:ListConnections",
				"codecommit:GitPull",
				"codepipeline:GetPipelineState",
				"codestar-connections:UseConnection"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "cloudformation:*",
                "ecr:*",
                "logs:*",
                "ecs:*",
                "ec2:*",
                "elasticloadbalancing:*",
                "s3:*",
                "sqs:*",
                "rds:*",
                "codepipeline:*",
                "ssm:GetParameter",
                "ssm:GetParameters",
                "iam:GetRole",
                "iam:DetachRolePolicy",
                "iam:DeleteRole",
                "ssm:PutParameter",
                "iam:AttachRolePolicy",
                "iam:TagRole",
                "iam:DeleteRolePolicy",
                "iam:GetRolePolicy",
                "iam:PutRolePolicy",
                "ecr:PutLifecyclePolicy",
                "ssm:DeleteParameter",
                "iam:ListRoleTags",
                "route53:*",
                "acm:*",
                "cloudwatch:GetMetricStatistics"
            ],
            "Resource": "*"
        }
    ]
}
````

1. In your new project's dashboard click on __Settings__ top navigation item.
2. In the side navigation click __AWS__.
3. Click on __Update__
4. Provide your AWS access details.
5. Click __Save__

## Next steps

- [Example Walkthrough](/example-walkthrough)
