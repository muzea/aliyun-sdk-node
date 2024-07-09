export interface GetFileRequest {
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
     * @example `ha-cn-pl32rf0****@ha-cn-pl32rf0****_test_api@bj_vpc_domain_1@point_cloud_3d@index_config_edit`
     */
    "versionName": string;
    /**
     * 文件全路径名称
     * @example `/schemas/automobile_vector_schema.json`
     */
    "fileName": string;
}
