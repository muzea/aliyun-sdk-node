export interface ListAdvanceConfigsRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 高级配置类型：
     *     - online
     *     - offline（默认）
     * @example `online`
     */
    "type"?: string;
    /**
     * 数据源名称。
     * @example `ha-cn-pl32rf0****_test_api
    `
     */
    "dataSourceName"?: string;
    /**
     * 索引名称
     * @example `test_api`
     */
    "indexName"?: string;
    /**
     * 是否为新版本控制台页面
     * @example `true`
     */
    "newMode"?: boolean;
}
