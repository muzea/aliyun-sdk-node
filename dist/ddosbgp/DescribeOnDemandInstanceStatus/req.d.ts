export interface DescribeOnDemandInstanceStatusRequest {
    /**
     * 代播实例的地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域信息。
     * @example `cn-zhangjiakou`
     */
    "RegionId"?: string;
    /**
     * 要查询的代播实例的ID列表。
     * > 您可以调用[DescribeOnDemandInstance](~~152120~~)查询所有代播实例的ID。
     * @example `ddosbgp-cn-z2q1qzxb****`
     */
    "InstanceIdList": string[];
}
