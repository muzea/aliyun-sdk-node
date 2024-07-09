export interface DescribeCenPrivateZoneRoutesRequest {
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
     * @example `cen-7qthudw0ll6jmc****	`
     */
    "CenId": string;
    /**
     * 访问PrivateZone服务的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "AccessRegionId"?: string;
    /**
     * PrivateZone服务所在的地域ID。
     * @example `cn-hangzhou`
     */
    "HostRegionId"?: string;
}
