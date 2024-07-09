export interface PublishIndexVersionRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 索引名称
     * @example `test_api`
     */
    "indexName": string;
    /**
     * 请求体
     * @example `{
        "dataSource": "ha-cn-pl32rf0****_test_api",
        "desc": "备注信息"
    }`
     */
    "body"?: any;
}
