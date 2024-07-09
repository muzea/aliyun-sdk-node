export interface ListAuthenticatorOpsLogsRequest {
    /**
     * 应用外部Id
     * @example `webauth_demo`
     */
    "ApplicationExternalId": string;
    /**
     * 用户标志
     * @example `wsnidfr`
     */
    "UserId"?: string;
    /**
     * 认证器唯一标识
     * @example `c810731ad3af06e45171395abf19cf9cb00E7i97PhE`
     */
    "AuthenticatorUuid"?: string;
    /**
     * 认证器类型
     * @example `webauthn`
     */
    "AuthenticatorType"?: string;
    /**
     * 创建开始时间
     * @example `1647232996712`
     */
    "FromTime"?: number;
    /**
     * 创建结束时间
     * @example `1647232996812`
     */
    "ToTime"?: number;
    /**
     * 页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录条数
     * @example `10`
     */
    "PageSize"?: number;
}
