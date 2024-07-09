export interface ListNodeInfosForPodRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 可用区ID
     * @example `cn-wulanchabu-b`
     */
    "ZoneId"?: string;
    /**
     * 集群ID
     * @example `cluster-***`
     */
    "ClusterId"?: string;
    /**
     * 本次操作的节点ID
     * @example `node-be70****`
     */
    "NodeId"?: string;
}
