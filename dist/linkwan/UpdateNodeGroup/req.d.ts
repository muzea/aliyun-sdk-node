export interface UpdateNodeGroupRequest {
    /**
     * 节点分组ID。
     * @example `123456`
     */
    "NodeGroupId": string;
    /**
     * 节点分组的名称。
     * @example `group1`
     */
    "NodeGroupName"?: string;
}
