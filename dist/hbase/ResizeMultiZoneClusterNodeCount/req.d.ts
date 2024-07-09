export interface ResizeMultiZoneClusterNodeCountRequest {
    /**
     * 多可用区集群Id。
     * @example `ld-f5d8d6s4s2a1****`
     */
    "ClusterId": string;
    /**
     * 主可用区实例的虚拟交换机Id。
     * @example `vsw-hangxzhouxe*****`
     */
    "PrimaryVSwitchId"?: string;
    /**
     * 备可用区实例的虚拟交换机Id。
     * @example `vsw-hangxzhouxf****`
     */
    "StandbyVSwitchId"?: string;
    /**
     * 仲裁虚拟交换机Id。
     * @example `vsw-hangxzhouxb*****`
     */
    "ArbiterVSwitchId"?: string;
    /**
     * core节点个数，4节点起，且增量为2的倍数。
     * @example `6`
     */
    "CoreNodeCount"?: number;
    /**
     * 主可用区实例的core节点个数，4节点起，且增量为2的倍数。
     * @example `6`
     */
    "PrimaryCoreNodeCount"?: number;
    /**
     * 备可用区实例的core节点个数，4节点起，且增量为2的倍数。
     * @example `6`
     */
    "StandbyCoreNodeCount"?: number;
    /**
     * log节点数量，4节点起，且为4的倍数。
     * @example `8`
     */
    "LogNodeCount"?: number;
}
