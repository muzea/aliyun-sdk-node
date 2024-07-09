export interface CreateNodeGroupRequest {
    /**
     * 节点分组的名称。
     * @example `group1`
     */
    "NodeGroupName": string;
    /**
     * 与节点分组关联的入网凭证ID。
     * @example `123`
     */
    "JoinPermissionId"?: string;
}
