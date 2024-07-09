export interface DescribeCenInterRegionBandwidthLimitsRequest {
    /**
     * 查询页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。默认值为**10**，取值范围：**1**~**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 云企业网实例ID。
     * @example `cen-pfa6ugf3xl0qsd****`
     */
    "CenId"?: string;
    /**
     * 转发路由器的地域ID。
     * 您可以调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID对应的地域信息。
     * @example `ccn-cn-shanghai`
     */
    "TrRegionId"?: string;
}
