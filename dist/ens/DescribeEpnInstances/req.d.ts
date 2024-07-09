export interface DescribeEpnInstancesRequest {
    /**
     * 版本号。
     * @example `2017-11-10`
     */
    "EPNInstanceId"?: string;
    /**
     * 边边网络实例名称。
     * @example `testEPNInstanceName`
     */
    "EPNInstanceName"?: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
