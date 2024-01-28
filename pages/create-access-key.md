---
title: Create AWS Access Key
description: Create AWS Access Key
---

# {% $markdoc.frontmatter.title %}



1. Log in two the AWS Console.
2. Search for 'Users' using the main search bar and select the __Users__ IAM feature.
3. Click __Create User__.
4. Provide a user name, eg. *stationopsuser*.
5. Click *Next*.
6. Select the __Attach policies directly__ radio.
7. Click __Create Policy__, this will open and new web page.
8. Click the __JSON__ button.
9. Copy and paste the JSON below into the Policy Editor.
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
                    "codestar-connections:ListConnections"
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
                    "acm:*"
                ],
                "Resource": "*"
            }
        ]
    }
    ````
10. Click __Next__
11. Provide a *Policy Name*, eg. *stationopspolicy*.
12. Scroll to the end and click __Create Policy__.
13. Open the previous *Create User* web page and click the refresh button next to the *Create Policy* button.
14. Search and select for your policy using the policy name name you provided.
15. Click __Next__.
16. Click __Create User__, this will bring you to the *Users* page.
17. Click user you just created.
18. Click __Security Credentials__.
19. Scroll to *Access Keys* and click *Create Access Key*.
20. Select *Third Party Access*.
21. Click the confirmation check box and then click __Next__.
22. Click __Create Access Key__.
23. Click __Download .csv file__.
24. Your *Access Key ID* and *Secret Access Key* are available in this CSV file.
25. You can find *Account ID* by clicking your username in the top right. This opens a menu which displays your *Account ID*.


## Next steps

- [Create Project](/create-project)
