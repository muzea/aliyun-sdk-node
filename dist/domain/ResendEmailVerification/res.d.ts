export interface ResendEmailVerificationResponse {
    /**
     * 请求ID。
     * @example `0EA54E99-DB48-4CE3-A099-6ED8E451B8AC`
     */
    RequestId: string;
    /**
     * 验证邮件发送成功列表。
     */
    SuccessList: {
        /**
         * 验证邮箱。
         * @example `test2@aliyun.com`
         */
        Email: string;
        /**
         * 返回code。
         * @example `Success`
         */
        Code: string;
        /**
         * 返回信息。
         * @example `Success`
         */
        Message: string;
    }[];
    /**
     * 验证邮件发送失败列表。
     */
    FailList: {
        /**
         * 验证邮箱。
         * @example `test1@aliyun.com`
         */
        Email: string;
        /**
         * 返回code。
         * @example `SendTokenQuotaExceeded`
         */
        Code: string;
        /**
         * 返回信息。
         * @example `The maximum number of attempts allowed to send the email verification link is exceeded.`
         */
        Message: string;
    }[];
}
