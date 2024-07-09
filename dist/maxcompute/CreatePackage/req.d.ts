export interface CreatePackageRequest {
    /**
     * MaxCompute项目名称
     * @example `projectA
    `
     */
    "projectName": string;
    /**
     * 是否安装
     * @example `false`
     */
    "isInstall"?: boolean;
    /**
     * 请求体参数
     * @example `{
    "name": "test_packege",
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
    }`
     */
    "body"?: string;
}
