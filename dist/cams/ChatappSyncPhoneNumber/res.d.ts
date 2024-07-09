export interface ChatappSyncPhoneNumberResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 号码列表。
     */
    PhoneNumbers: {
        /**
         * 号码名称。
         * @example `Alibaba`
         */
        VerifiedName: string;
        /**
         * 号码状态。
         * @example `PENDING`
         */
        Status: string;
        /**
         * 号码质量。
         * @example `GREEN`
         */
        QualityRating: string;
        /**
         * 校验状态。
         * @example `VERIFIED`
         */
        CodeVerificationStatus: string;
        /**
         * 新名称审核状态。
         * @example `Approval`
         */
        NewNameStatus: string;
        /**
         * 手机号码。
         * @example `861380000****`
         */
        PhoneNumber: string;
        /**
         * 状态报告队列。
         * @example `alicom-0939****-queue`
         */
        StatusQueue: string;
        /**
         * 上行消息队列。
         * @example `alicom-0939****-queue`
         */
        UpQueue: string;
        /**
         * 名称审核状态。
         * @example `Approval`
         */
        NameStatus: string;
        /**
         * 上行消息通知URL。
         * @example `https://www.alibaba.com/inbound
        `
         */
        UpCallbackUrl: string;
        /**
         * 号码发送量。
         * @example `TIER_10K`
         */
        MessagingLimitTier: string;
        /**
         * 状态报告通知URL。
         * @example `https://www.alibaba.com/status`
         */
        StatusCallbackUrl: string;
    }[];
    /**
     * 错误提示信息。
     * @example `无`
     */
    Message: string;
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
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
