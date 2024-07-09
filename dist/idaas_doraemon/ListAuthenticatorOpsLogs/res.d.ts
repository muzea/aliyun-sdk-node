export interface ListAuthenticatorOpsLogsResponse {
    /**
     * 请求ID
     * @example `39FF2C8B-73E7-5BA5-AC25-20EEAC37BAB0`
     */
    RequestId: string;
    /**
     * 日志内容集合
     */
    AuthenticationLogContent: {
        /**
         * 租户Id
         * @example `ed0222867189ad2bacfa746843d4b9692mlWC9sU3zl`
         */
        TenantId: string;
        /**
         * 阿里云账号id
         * @example `1218758215717204`
         */
        AliUid: string;
        /**
         * 应用UUid
         * @example `2bba0564edce2ff90c544dc623d1c1f5iPpCGAqTioA`
         */
        ApplicationUuid: string;
        /**
         * 应用外部Id
         * @example `webauth_demo`
         */
        ApplicationExternalId: string;
        /**
         * 用户标志
         * @example `3b323`
         */
        UserId: string;
        /**
         * 认证器uuid
         * @example `0fcd5fce3fdc42052633a65eb242f10aZ8nzoQMpV3m`
         */
        AuthenticatorUuid: string;
        /**
         * 认证器名字
         * @example `TOTP-DefaultName`
         */
        AuthenticatorName: string;
        /**
         * 身份认证ID
         * @example `scimcred-00t3zfhiy2ylzvm2i287`
         */
        CredentialId: string;
        /**
         * 认证器类型
         * @example `TOTP`
         */
        AuthenticatorType: string;
        /**
         * 操作动作
         * @example `ListTagResources`
         */
        OperationAction: string;
        /**
         * 防重放挑战码
         * @example `exfa`
         */
        ChallengeBase64: string;
        /**
         * 操作时间戳
         * @example `1647309893086`
         */
        OperationTime: number;
        /**
         * 用户代理
         * @example `10.13.1.56`
         */
        UserAgent: string;
        /**
         * 用户源IP
         * @example `10.13.1.56`
         */
        UserSourceIp: string;
        /**
         * 原始日志文本
         * @example `登录成功`
         */
        RawContext: string;
        /**
         * 操作是否成功
         * @example `True`
         */
        OperationResult: boolean;
        /**
         * 错误码
         * @example `Failed`
         */
        ErrorCode: string;
        /**
         * 错误信息
         * @example `user not exist, alipayId=2088022534411015`
         */
        ErrorMessage: string;
        /**
         * 日志参数
         * @example `1`
         */
        LogParams: string;
    }[];
    /**
     * 返回列表长度
     * @example `3`
     */
    TotalCount: number;
    /**
     * 当前页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页面记录数
     * @example `10`
     */
    PageSize: number;
}
