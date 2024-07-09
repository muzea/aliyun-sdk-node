export interface GetFabricTopologyRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏网段ID
     * @example `vpd-aof7****`
     */
    "VpdId"?: string;
    "VpcId"?: string;
    "ClusterId"?: string;
    /**
     * 节点ID列表
     */
    "NodeIds"?: string[];
    /**
     * 灵骏网卡ID列表
     */
    "LniIds"?: string[];
}
