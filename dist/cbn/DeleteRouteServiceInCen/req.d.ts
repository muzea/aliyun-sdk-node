export interface DeleteRouteServiceInCenRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "CenId": string;
    /**
     * 云服务IP地址或地址段。
     * @example `100.118.28.0/24`
     */
    "Host": string;
    /**
     * 云服务所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "HostRegionId": string;
    /**
     * 访问云服务的地域ID。
     * @example `cn-hangzhou`
     */
    "AccessRegionId": string;
    /**
     * 云服务关联的VPC实例ID。
     * @example `vpc-bp1t36rn9l53iwbsf****`
     */
    "HostVpcId"?: string;
}
