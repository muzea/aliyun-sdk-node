export interface UpdateHoneypotNodeRequest {
    /**
     * 管理节点名称。
     * @example `HoneypotNodeTest`
     */
    "NodeName": string;
    /**
     * 管理节点ID。
     * >调用[ListHoneypotNode](~~ListHoneypotNode~~)接口可以获取该参数。
     * @example `67ab3f4c-3db5-4fc3-b51f-00f8bfabfa08`
     */
    "NodeId": string;
    /**
     * 放行网段集合。
     */
    "SecurityGroupProbeIpList"?: string[];
    /**
     * 可用探针数量。
     * @example `20`
     */
    "AvailableProbeNum": number;
}
