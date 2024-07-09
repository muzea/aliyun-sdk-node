export interface DeleteIndexVersionRequest {
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
     * 版本名称
     * @example `ha-cn-pl32rf0****@ha-cn-pl32rf0****_shenzhen_test_01@sz_vpc_domain_1@api_test@index_config_v1`
     */
    "versionName": string;
}
