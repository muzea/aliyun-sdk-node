export interface DescribeFabricPeerLogsRequest {
    /**
     * 组织ID
     * @example `peers-test11-tzwny25vqicq`
     */
    "OrganizationId": string;
    /**
     * Peer节点名称
     * @example `peer1`
     */
    "PeerName": string;
    /**
     * 显示行数
     * @example `50`
     */
    "Lines"?: string;
}
