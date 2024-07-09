export interface UnbindJoinPermissionFromNodeGroupRequest {
    /**
     * 要接触关联的节点分组ID。
     * @example `123`
     */
    "NodeGroupId": string;
    /**
     * 参与关联的入网凭证ID。
     * @example `123456`
     */
    "JoinPermissionId": string;
}
