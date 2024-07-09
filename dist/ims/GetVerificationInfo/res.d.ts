export interface GetVerificationInfoResponse {
    /**
     * 请求ID。
     * @example `B182C041-8C64-5F2F-A07B-FC67FAF89CF9`
     */
    RequestId: string;
    /**
     * 安全手机信息。
     */
    SecurityPhoneDevice: {
        /**
         * 区号。
         * @example `86`
         */
        AreaCode: string;
        /**
         * 手机号码。
         * @example `13900001234`
         */
        PhoneNumber: string;
        /**
         * 安全手机的状态。取值：
         * - active：已激活。
         * - pending：待激活。
         * @example `active`
         */
        Status: string;
    };
    /**
     * 安全邮箱信息。
     */
    SecurityEmailDevice: {
        /**
         * 安全邮箱地址。
         * @example `username@example.com`
         */
        Email: string;
        /**
         * 安全邮箱的状态。取值：
         * - active：已激活。
         * - pending：待激活。
         * @example `active`
         */
        Status: string;
    };
}
