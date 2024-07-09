export interface ListAuthenticationLogsResponse {
    /**
     * 请求ID
     * @example `F620E712-F325-520D-BE1A-E2421B062F57`
     */
    RequestId: string;
    /**
     * 日志内容
     */
    AuthenticationLogContent: {
        /**
         * 租户ID
         * @example `8cefc5fe5d10dffffdcff011a6b34a863hHmgm0SIrh`
         */
        TenantId: string;
        /**
         * 阿里云账号id
         * @example `1588301417442737`
         */
        AliUid: string;
        /**
         * 应用uuid
         * @example `0b6ba5da7bd4cef233ae7b48b5e5dcc1yx9aipQp0hD`
         */
        ApplicationUuid: string;
        /**
         * 应用外部Id
         * @example `sms_auth`
         */
        ApplicationExternalId: string;
        /**
         * 用户标志
         * @example `xhtseqml`
         */
        UserId: string;
        /**
         * 认证器uuid
         * @example `c810731ad3af06e45171395abf19cf9cb00E7i97PhE`
         */
        AuthenticatorUuid: string;
        /**
         * 认证器名字
         * @example `TOTP-DefaultName`
         */
        AuthenticatorName: string;
        /**
         * 凭据标识
         * @example `scimcred-00w9gcvpwueg7geg1a87`
         */
        CredentialId: string;
        /**
         * 认证器类型
         * @example `TOTP`
         */
        AuthenticatorType: string;
        /**
         * 认证器操作
         * @example `send`
         */
        AuthenticationAction: string;
        /**
         * 防重放挑战码
         * @example `3519`
         */
        ChallengeBase64: string;
        /**
         * 认证时间
         * @example `1647233491138`
         */
        AuthenticationTime: number;
        /**
         * 用户代理
         * @example `aoxis`
         */
        UserAgent: string;
        /**
         * 用户源IP
         * @example `10.23.11.56`
         */
        UserSourceIp: string;
        /**
         * 认证上下文参数
         * @example `{"name":"lili"}`
         */
        RawAuthenticationContext: string;
        /**
         * 认证结果
         * @example `true`
         */
        VerifyResult: boolean;
        /**
         * 错误码
         * @example `200`
         */
        ErrorCode: string;
        /**
         * 错误信息
         * @example `Request was denied due to business check permission`
         */
        ErrorMessage: string;
        /**
         * 日志标签
         * @example `login`
         */
        LogTag: string;
        /**
         * 日志参数
         * @example `khj`
         */
        LogParams: string;
    }[];
    /**
     * 返回列表长度
     * @example `3`
     */
    TotalCount: number;
    /**
     * 当前页数
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页数量
     * @example `10`
     */
    PageSize: number;
}
