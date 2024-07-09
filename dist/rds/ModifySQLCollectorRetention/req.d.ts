export interface ModifySQLCollectorRetentionRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * SQL洞察日志保存时长，取值：
     * - 30：30天
     * - 180：180天
     * - 365：1年
     * - 1095：3年
     * - 1825：5年
     * @example `365`
     */
    "ConfigValue": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
