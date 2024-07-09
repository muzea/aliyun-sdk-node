export interface DeleteSchedruleOnDemandRequest {
    /**
     * 要操作的代播实例的ID。
     * > 您可以调用[DescribeOnDemandInstance](~~152120~~)查询所有代播实例的ID。
     * @example `ddosbgp-cn-z2q1qzxb****`
     */
    "InstanceId": string;
    /**
     * 要删除的调度规则的名称。
     * @example `testrule`
     */
    "RuleName": string;
    /**
     * 代播实例的地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域信息。
     * @example `cn-zhangjiakou`
     */
    "RegionId"?: string;
}
