export interface DescribeCustomRoutingEndPointTrafficPolicyRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待查询的流量通行目标ID。
     * @example `ply-bptest2****`
     */
    "PolicyId": string;
    /**
     * 待查询流量通行目标的终端节点ID。
     * @example `ep-bp1d2utp8qqe2a44t****`
     */
    "EndpointId"?: string;
}
