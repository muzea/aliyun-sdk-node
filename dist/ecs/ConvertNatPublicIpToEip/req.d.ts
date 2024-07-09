export interface ConvertNatPublicIpToEipRequest {
    /**
     * 需要转化公网IP的实例ID。
     * @example `i-bp171jr36ge2ulvk****`
     */
    "InstanceId": string;
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
