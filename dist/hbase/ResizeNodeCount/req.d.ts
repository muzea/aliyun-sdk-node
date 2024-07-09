export interface ResizeNodeCountRequest {
    /**
     * 实例id
     * @example `hb-bp16o0pd52e3y****`
     */
    "ClusterId": string;
    /**
     * 集群Core节点数量。
     * 单次最多添加50个，整体最高可调整至250个。如有更多需求，请提交工单。
     * @example `5`
     */
    "NodeCount": number;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-f`
     */
    "ZoneId"?: string;
    /**
     * 虚拟交换机Id。
     * @example `vsw-bp191otqj1ssyl****`
     */
    "VSwitchId"?: string;
}
