export interface DescribeIpControlsRequest {
    /**
     * IP访问控制的ID，代表了唯一的IP控制策略
     * @example `7ea91319a34d48a09b5c9c871d9768b1`
     */
    "IpControlId"?: string;
    /**
     * 访问控制名称
     * @example `访问控制test`
     */
    "IpControlName"?: string;
    /**
     * IP访问控制类型：
     * - **ALLOW**：IP访问控制为白名单类型
     * - **REFUSE**：IP访问控制为黑名单类型
     * @example `ALLOW`
     */
    "IpControlType"?: string;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
}
