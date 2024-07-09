export interface ModifySQLCollectorPolicyRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 开启或关闭SQL洞察（SQL审计），取值：
     * - **Enable**
     * - **Disabled**
     * @example `Enable`
     */
    "SQLCollectorStatus": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmx****`
     */
    "ResourceGroupId"?: string;
}
