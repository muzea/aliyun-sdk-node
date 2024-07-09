export interface SubmitEmailVerificationResponse {
    /**
     * 请求ID。
     * @example `E2A8A5EF-DF8A-4C48-8FD4-9F6BD71AB26D`
     */
    RequestId: string;
    /**
     * 验证邮件已经存在列表。
     */
    ExistList: {
        /**
         * 验证邮箱。
         * @example `username@example.com`
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
    /**
     * 验证邮件发送成功列表。
     */
    SuccessList: {
        /**
         * 验证邮箱。
         * @example `username@example.com`
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
         * @example `username@example.com`
         */
        Email: string;
        /**
         * 返回code。
         * @example `SendTokenQuotaExceeded`
         */
        Code: string;
        /**
         * 返回信息。
         * @example `The maximum number of attempts allowed to send the email verification link is exceeded`
         */
        Message: string;
    }[];
}
