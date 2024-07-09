export interface GetNodeConfigRequest {
    /**
     * 实例 ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 节点类型
     * - qrs：查询节点
     * - search：数据节点
     * - index：索引节点
     * - cluster：集群
     * @example `index`
     */
    "type"?: string;
    /**
     * 节点名称
     * @example `ha-cn-30174dhoz53_qrs`
     */
    "name"?: string;
    /**
     * 集群名称
     * @example `vpc_sh_domain_2`
     */
    "clusterName"?: string;
}
