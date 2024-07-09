export interface DescribeTenantEncryptionRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID。
     * @example `t4louaeei****`
     */
    "TenantId"?: string;
    /**
     * 租户名称。
     * 长度为 2~20 个字符，支持英文字母、数字和下划线，区分大小写，必须以字母或下划线开头。 不可设置为 sys。
     * @example `forMySQLTenant`
     */
    "TenantName"?: string;
    /**
     * 分页查询的页码。
     * -  起始值：1
     * - 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示条数，默认为 10。
     * @example `10`
     */
    "PageSize"?: number;
}
