export interface UpdatePackageRequest {
    /**
     * MaxCompute项目名称
     * @example `projectA`
     */
    "projectName": string;
    /**
     * package名称。
     * @example `packageA`
     */
    "packageName": string;
    /**
     * 请求体参数
     * @example `{
        "add": {
            "allowedProjectList": [
                {
                    "label": "2",
                    "project": "project_name"
                }
            ],
            "resourceList": {
                "table": [
                    {
                        "name": "table_name",
                        "actions": [
                            "Describe",
                            "Select"
                        ]
                    },
                    {
                        "name": "table_name",
                        "actions": [
                            "Describe",
                            "Select"
                        ]
                    }
                ],
                "resource": [
                    {
                        "name": "",
                        "actions": []
                    },
                    {
                        "name": "",
                        "actions": []
                    }
                ],
                "function": [
                    {
                        "name": "",
                        "actions": []
                    },
                    {
                        "name": "",
                        "actions": []
                    }
                ]
            }
        },
        "remove": {
            "allowedProjectList": [
                {
                    "project": "project_name"
                },
                {
                    "project": "project_2"
                }
            ],
            "resourceList": {
                "table": [
                    {
                        "name": "table_name"
                    },
                    {
                        "name": "table_name"
                    }
                ],
                "resource": [
                    {
                        "name": ""
                    },
                    {
                        "name": ""
                    }
                ],
                "function": [
                    {
                        "name": ""
                    },
                    {
                        "name": ""
                    }
                ]
            }
        }
    }`
     */
    "body"?: string;
}
