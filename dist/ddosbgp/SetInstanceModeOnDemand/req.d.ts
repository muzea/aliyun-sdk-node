export interface SetInstanceModeOnDemandRequest {
    /**
     * 设置代播实例的调度模式。取值：
     * - **manual**：表示手动调度。
     * - **netflow-auto**：表示自动调度。
     * @example `netflow-auto`
     */
    "Mode": string;
    /**
     * 代播实例的地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域信息。
     * @example `cn-zhangjiakou`
     */
    "RegionId"?: string;
    /**
     * 要操作的代播实例的ID列表。
     * > 您可以调用[DescribeOnDemandInstance](~~152120~~)查询所有代播实例的ID。
     * @example `ddosbgp-cn-z2q1qzxb****`
     */
    "InstanceIdList": string[];
}
