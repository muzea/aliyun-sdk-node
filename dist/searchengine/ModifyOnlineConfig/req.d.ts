export interface ModifyOnlineConfigRequest {
    /**
     * 边缘实例id。
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 节点名称。
     * @example `general`
     */
    "nodeName": string;
    /**
     * 索引名称
     * @example `test_api`
     */
    "indexName": string;
    /**
     * 请求体
     */
    "body"?: any;
}
