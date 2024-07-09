export interface ListAuthenticationLogsRequest {
    /**
     * 应用外部Id
     * @example `webauth_demo`
     */
    "ApplicationExternalId": string;
    /**
     * 用户标志
     * @example `10e8c224`
     */
    "UserId"?: string;
    /**
     * 认证器唯一标识
     * @example `0fcd5fce3fdc42052633a65eb242f10aZ8nzoQMpV3m`
     */
    "AuthenticatorUuid"?: string;
    /**
     * 认证器类型
     * @example `TOTP`
     */
    "AuthenticatorType"?: string;
    /**
     * 认证使用的凭据Id
     * @example `scimcred-003o4e2wqxlaxjmjyz96`
     */
    "CredentialId"?: string;
    /**
     * 日志的标签
     * @example `login`
     */
    "LogTag"?: string;
    /**
     * 认证时间起始值
     * @example `1640144294`
     */
    "FromTime"?: number;
    /**
     * 认证时间结束值
     * @example `1640144694`
     */
    "ToTime"?: number;
    /**
     * 当前页数
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页展示时，每页显示的条数
     * @example `10`
     */
    "PageSize"?: number;
}
