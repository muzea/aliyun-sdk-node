export interface GetHomePageGuidanceResponse {
    /**
     * Id of the request
     * @example `xxxxxx`
     */
    requestId: string;
    /**
     * 首页引导配置信息
     */
    data: {
        /**
         * 服务配置状态
         * @example `true`
         */
        serviceStatus: boolean;
        /**
         * 用户配置状态
         * @example `true`
         */
        usersStatus: boolean;
        /**
         * 服务组配置状态
         * @example `true`
         */
        serviceGroupStatus: boolean;
        /**
         * 通知订阅配置状态
         * @example `true`
         */
        notifySubscriptionStatus: boolean;
    };
}
