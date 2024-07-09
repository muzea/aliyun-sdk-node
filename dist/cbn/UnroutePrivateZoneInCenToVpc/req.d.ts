export interface UnroutePrivateZoneInCenToVpcRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "CenId": string;
    /**
     * 访问PrivateZone服务的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "AccessRegionId": string;
}
