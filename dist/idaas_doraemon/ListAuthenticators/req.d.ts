export interface ListAuthenticatorsRequest {
    /**
     * 应用外部Id
     * @example `11122223333`
     */
    "ApplicationExternalId": string;
    /**
     * 用户id
     * @example `user-11122223333`
     */
    "UserId": string;
    /**
     * 认证器类型
     * @example `TOTP`
     */
    "AuthenticatorType"?: string;
    /**
     * 当前开始读取的位置，不设置时默认为1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 本次读取的最大数据记录数量，不指定时使用默认值
     * @example `5`
     */
    "PageSize"?: number;
}
