export interface AddUserToGroupRequest {
    /**
     * 用户组ID。
     * @example `g-00jqzghi2n3o5hkh****`
     */
    "GroupId": string;
    /**
     * 用户ID。
     * @example `u-00q8wbq42wiltcrk****`
     */
    "UserId": string;
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
}
