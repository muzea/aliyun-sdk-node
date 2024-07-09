export interface DescribeCenVbrHealthCheckRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-6hpdgj7ni6pz1k****`
     */
    "CenId"?: string;
    /**
     * VBR实例所在的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "VbrInstanceRegionId": string;
    /**
     * VBR实例ID。
     * @example `vbr-bp1kznorjeembsuhl****`
     */
    "VbrInstanceId"?: string;
    /**
     * VBR实例所属的阿里云账号（主账号）ID。
     * @example `1250123456123456`
     */
    "VbrInstanceOwnerId"?: number;
    /**
     * 查询页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。取值范围：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
