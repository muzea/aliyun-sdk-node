export interface GrantOperatorPermissionRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 权限过期时间。<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-03-27T16:00:00Z`
     */
    "ExpiredTime": string;
    /**
     * 授权类型。取值：
     * - **Control**：配置权限。支持查看、修改实例配置。
     * - **Data**：数据权限。支持查看表结构、索引和SQL。
     * @example `Control`
     */
    "Privileges": string;
}
