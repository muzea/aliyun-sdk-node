export interface DescribeWebAccessLogDispatchStatusRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 分页查询时，设置当前页面的页面。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时，设置每页包含域名的数量。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
