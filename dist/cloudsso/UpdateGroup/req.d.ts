export interface UpdateGroupRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 用户组的ID。
     * @example `g-00jqzghi2n3o5hkh****`
     */
    "GroupId": string;
    /**
     * 新的用户组名称。
     * @example `NewTestGroup`
     */
    "NewGroupName"?: string;
    /**
     * 新的用户组描述。
     * @example `This is a group.`
     */
    "NewDescription"?: string;
}
