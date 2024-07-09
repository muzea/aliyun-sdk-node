export interface CheckCertificateResponse {
    /**
     * 请求ID。
     * @example `9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC`
     */
    RequestId: string;
    /**
     * 判断AppKey代表的是否是Android app：
     * - true
     * - false
     * @example `false`
     */
    Android: boolean;
    /**
     * 判断AppKey代表的是否是iOS app：
     * - true
     * - false
     * @example `true`
     */
    IOS: boolean;
    /**
     * 访问生产环境的证书信息。
     */
    ProductionCertInfo: {
        /**
         * 证书状态，取值：
         * - **EXPIRED**：已过期
         * - **NOT_CONFIGURED**：未配置
         * - **NO_PASSWORD**：未配置密码
         * - **OK**：正常
         * - **REVOKED**：已撤销
         * @example `OK`
         */
        Status: string;
        /**
         * 证书过期时间。
         * @example `1764561600000`
         */
        ExipreTime: number;
    };
    /**
     * 访问开发环境/沙箱环境的证书信息。
     */
    DevelopmentCertInfo: {
        /**
         * 证书状态，取值：
         * - **EXPIRED**：已过期
         * - **NOT_CONFIGURED**：未配置
         * - **NO_PASSWORD**：未配置密码
         * - **OK**：正常
         * - **REVOKED**：已撤销
         * @example `EXPIRED`
         */
        Status: string;
        /**
         * 证书过期时间。
         * @example `1470024000000`
         */
        ExipreTime: number;
    };
}
