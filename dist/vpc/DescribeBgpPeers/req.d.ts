export interface DescribeBgpPeersRequest {
    /**
     * 要查询的BGP邻居关联的VBR ID。
     * @example `vbr-2zecmmvg5gvu8i4te****`
     */
    "RouterId"?: string;
    /**
     * 要查询的BGP邻居的ID。
     * @example `bgp-2ze3un0ft1jd1xd****`
     */
    "BgpPeerId"?: string;
    /**
     * 要查询的BGP邻居所在BGP组的ID。
     * @example `bgpg-2zev8h2wo414sfh****`
     */
    "BgpGroupId"?: string;
    /**
     * 要查询的BGP邻居所在BGP组的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 是否是默认BGP组。取值：
     * - **true**：是默认BGP组。
     * - **false**：不是默认BGP组。
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
