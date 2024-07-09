export interface DescribeDedicatedHostTypesRequest {
    /**
     * 专有宿主机所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 专有宿主机规格。更多详情，请参见[宿主机规格](~~68564~~)。
     * @example `ddh.sn1ne`
     */
    "DedicatedHostType"?: string;
    /**
     * 专有宿主机规格支持的ECS实例规格族。
     * @example `ecs.sn1ne`
     */
    "SupportedInstanceTypeFamily"?: string;
}
