export interface DeleteIndexRequest {
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
     * 数据源
     * @example `ha-cn-pl32rf0****_ test_api`
     */
    "dataSource": string;
    /**
     * 是否删除数据源
     * @example `true`
     */
    "deleteDataSource"?: boolean;
}
