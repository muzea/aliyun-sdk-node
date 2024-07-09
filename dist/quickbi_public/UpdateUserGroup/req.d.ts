export interface UpdateUserGroupRequest {
    /**
     * 用户组ID。
     * @example `f5eeb52e-d9c2-4a8b-80e3-47ab55c2****`
     */
    "UserGroupId": string;
    /**
     * 用户组名称。
     * - 格式校验：最大长度255
     * - 特殊格式校验：中英文数字 _ \ / | () ] \[
     * @example `pop0001`
     */
    "UserGroupName"?: string;
    /**
     * 用户组描述。
     * - 格式校验：最大长度255
     * - 特殊格式校验：中英文数字 _ \ / | () ] \[
     * @example `描述信息`
     */
    "UserGroupDescription"?: string;
}
