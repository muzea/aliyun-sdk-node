export interface DescribeBgpGroupsRequest {
    /**
     * BGP组关联的VBR的ID。
     * @example `vbr-bp1ctxy813985gkuk****`
     */
    "RouterId"?: string;
    /**
     * BGP组的ID。
     * @example `bgpg-bp1k25cyp26cllath****`
     */
    "BgpGroupId"?: string;
    /**
     * VBR所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 是否为默认BGP组。取值：
     * - **false**：不是默认BGP组。
     * - **true**：是默认BGP组。
     * @example `false`
     */
    "IsDefault"?: boolean;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
