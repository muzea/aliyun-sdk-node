export interface GetInstanceTwoFactorResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 双因子认证的配置信息。
     */
    Config: {
        /**
         * 是否开启了双因子。取值：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        EnableTwoFactor: boolean;
        /**
         * 已配置的双因子认证方式列表。
         */
        TwoFactorMethods: string[];
        /**
         * 双因子认证成功后，后续登录堡垒机时跳过双因子认证的时间。取值范围为`[0,168]`，单位为小时。
         * > 0表示不跳过，即每次登录堡垒机都需要双因子认证。
         * @example `1`
         */
        SkipTwoFactorTime: number;
    };
}
