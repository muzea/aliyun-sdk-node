export interface DescribeRouteServicesInCenRequest {
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
    "CenId": string;
    /**
     * 云服务的服务地址。
     * 支持输入域名、IP地址或IP地址段。
     * @example `100.118.28.0/24`
     */
    "Host"?: string;
    /**
     * 云服务所在的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "HostRegionId"?: string;
    /**
     * 访问云服务的地域ID。
     * @example `cn-hangzhou`
     */
    "AccessRegionId"?: string;
    /**
     * 云服务关联的VPC实例ID。
     * @example `vpc-bp1h8vbrbcgohcju5****`
     */
    "HostVpcId"?: string;
}
