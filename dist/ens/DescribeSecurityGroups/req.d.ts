export interface DescribeSecurityGroupsRequest {
    /**
     * 安全组ID。
     * @example `sg-bp67acfmxazb4ph***`
     */
    "SecurityGroupId"?: string;
    /**
     * 安全组列表的页码。
     * - 起始值：1。
     * - 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * - 最大值：50。
     * - 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 安全组名称。
     * @example `DocTest`
     */
    "SecurityGroupName"?: string;
}
