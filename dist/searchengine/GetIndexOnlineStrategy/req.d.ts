export interface GetIndexOnlineStrategyRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 数据源名称。
     * @example `ha-cn-pl32rf0****_api_test`
     */
    "dataSourceName": string;
    /**
     * 机房
     * @example `vpc_hz_domain_1`
     */
    "deployName": string;
    /**
     * 索引名称
     * @example `test_api`
     */
    "indexName": string;
}
