export interface ChangeAccountPasswordRequest {
    /**
     * DRDS实例ID。
     * @example `drds********`
     */
    "DrdsInstanceId": string;
    /**
     * 账号名称。
     * @example `test`
     */
    "AccountName": string;
    /**
     * 更新后的密码。
     * @example `test`
     */
    "Password": string;
}
