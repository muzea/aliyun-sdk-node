export interface ResetUserPasswordRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID。
     * @example `agent@ccc-test`
     */
    "UserId": string;
    /**
     * 新的密码。
     * @example `password`
     */
    "Password": string;
}
