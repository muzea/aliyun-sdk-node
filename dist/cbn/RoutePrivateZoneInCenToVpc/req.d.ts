export interface RoutePrivateZoneInCenToVpcRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "CenId": string;
    /**
     * 访问PrivateZone服务的地域ID。
     * 访问所在地是指访问PrivateZone服务的地域。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "AccessRegionId": string;
    /**
     * PrivateZone服务所在的地域ID。
     * @example `cn-hangzhou`
     */
    "HostRegionId": string;
    /**
     * PrivateZone服务关联的VPC实例ID。
     * @example `vpc-bp1h8vbrbcgohcju5****`
     */
    "HostVpcId": string;
}
