export interface UpdateRoamingJoinPermissionEnablingStateRequest {
    /**
     * 泛在凭证id。
     * @example `1234`
     */
    "JoinPermissionId": string;
    /**
     * 泛在凭证启用状态。
     * @example `true`
     */
    "Enabled": boolean;
}
