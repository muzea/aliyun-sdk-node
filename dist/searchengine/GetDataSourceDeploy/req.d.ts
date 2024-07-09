export interface GetDataSourceDeployRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 机房
     * @example `vpc_hz_domain_1`
     */
    "deployName": string;
    /**
     * 数据源的名称
     * @example `ha-cn-pl32rf0****_test_api`
     */
    "dataSourceName": string;
}
