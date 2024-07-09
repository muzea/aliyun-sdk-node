export interface GetAccountSecurityPracticeReportResponse {
    /**
     * 请求ID。
     * @example `ABA822EE-85C2-4418-9577-A1831FC8466D`
     */
    RequestId: string;
    /**
     * 阿里云账号安全报告信息。
     */
    AccountSecurityPracticeInfo: {
        /**
         * 阿里云账号安全报告信息。
         */
        AccountSecurityPracticeUserInfo: {
            /**
             * 阿里云账号中未使用的访问密钥的个数。
             * @example `0`
             */
            UnusedAkNum: number;
            /**
             * 拥有未使用访问密钥的RAM用户的个数。
             * @example `0`
             */
            SubUserWithUnusedAccessKey: number;
            /**
             * 阿里云账号访问密钥（AccessKey）的个数。
             * @example `1`
             */
            RootWithAccessKey: number;
            /**
             * 阿里云账号中RAM用户的个数。
             * @example `9`
             */
            SubUser: number;
            /**
             * 是否已开启多因素认证。取值：
             * - true：已开启。
             * - false：未开启。
             * @example `false`
             */
            BindMfa: boolean;
            /**
             * 阿里云账号中旧访问密钥的个数。
             * @example `0`
             */
            OldAkNum: number;
            /**
             * RAM用户密码强度的等级。取值：
             * - low
             * - mid
             * - high
             * @example `low`
             */
            SubUserPwdLevel: string;
            /**
             * 使用旧访问密钥的RAM用户的个数。
             * @example `0`
             */
            SubUserWithOldAccessKey: number;
            /**
             * 绑定了多因素认证设备的RAM用户的个数。
             * @example `0`
             */
            SubUserBindMfa: number;
        };
        /**
         * 阿里云账号安全最终得分。
         * @example `63`
         */
        Score: number;
    };
}
