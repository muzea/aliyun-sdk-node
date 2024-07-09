export interface DescribeSlowQueryRequest {
    /**
     * 开始时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2021-02-02T08:30:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2021-02-02T09:30:00Z`
     */
    "EndTime"?: string;
    /**
     * 最短的查询耗时。最小值为**1000**，默认值为**1000**。单位：毫秒。返回参数将返回超过该耗时的查询。
     * @example `1000`
     */
    "QueryDurationMs"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 计算组ID。您可以通过调用[ListVirtualWareHouses](~~419058~~)接口查询目标地域下所有的计算组信息，包括计算组ID。
     * @example `vw-uf62965t8lt50****`
     */
    "VirtualWareHouseId": string;
    /**
     * 集群ID。您可以通过调用[ListClusters](~~419072~~)接口查询目标地域下所有的集群信息，包括集群ID。
     * @example `cc-bp1qx68m06981****`
     */
    "DBClusterId"?: string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
