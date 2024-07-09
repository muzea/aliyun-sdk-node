export interface DescribeGtmInstanceAddressPoolsRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * GTM实例ID。
     * @example `gtmtest`
     */
    "InstanceId": string;
    /**
     * 当前页码，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    "PageSize"?: number;
}
