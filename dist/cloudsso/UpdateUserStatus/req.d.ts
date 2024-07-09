export interface UpdateUserStatusRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 用户ID。
     * @example `u-00q8wbq42wiltcrk****`
     */
    "UserId": string;
    /**
     * 用户的状态。取值：
     * - Enabled：启用。
     * - Disabled：禁用。
     * @example `Disabled`
     */
    "NewStatus"?: string;
}
