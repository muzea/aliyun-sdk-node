export interface DescribeNetworksRequest {
    /**
     * 网络ID。
     * @example `n-5***`
     */
    "NetworkId"?: string;
    /**
     * ENS节点ID。
     * @example `cn-beijing-telecom`
     */
    "EnsRegionId"?: string;
    /**
     * 网络名称。
     * @example `example`
     */
    "NetworkName"?: string;
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
