export interface QueryChatappPhoneNumbersResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A94866411B2O`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~196974~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 信息。
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 号码列表。
     */
    PhoneNumbers: {
        /**
         * 上行消息通知Queue。
         * @example `Alicom-Queue-****-ChatAppInbound`
         */
        UpQueue: string;
        /**
         * 号码。
         * @example `861380000****`
         */
        PhoneNumber: string;
        /**
         * 状态报告通知Queue。
         * @example `Alicom-Queue-****-ChatAppStatus`
         */
        StatusQueue: string;
        /**
         * 申请名称。
         * @example `Alibaba`
         */
        VerifiedName: string;
        /**
         * 状态报告通知URL。
         * @example `https://ali.com/status`
         */
        StatusCallbackUrl: string;
        /**
         * 上行消息通知URL。
         * @example `https://ali.com/inbound`
         */
        UpCallbackUrl: string;
        /**
         * 号码质量。
         * @example `GREEN`
         */
        QualityRating: string;
        /**
         * 号码状态。
         * @example `CONNECTED`
         */
        Status: string;
        /**
         * 号码校验状态。
         * @example `VERIFIED`
         */
        CodeVerificationStatus: string;
        /**
         * 名称状态。
         * @example `Approval`
         */
        NameStatus: string;
        /**
         * 号码发送量。
         * @example `TIER_10K`
         */
        MessagingLimitTier: string;
        /**
         * 新名称审核状态。
         * @example `Approval`
         */
        NewNameStatus: string;
    }[];
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
