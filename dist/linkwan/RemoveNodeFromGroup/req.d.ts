export interface RemoveNodeFromGroupRequest {
    /**
     * 要移除的节点的DevEUI。
     * @example `0000000000000000`
     */
    "DevEui": string;
    /**
     * 节点分组ID。
     * @example `123`
     */
    "NodeGroupId": string;
}
