export interface ListTenantConfigResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 用户配置信息。
     */
    TenantConfigModel: {
        /**
         * 是否开启资源到期提醒。
         * @example `true`
         */
        AppInstanceGroupExpireRemind: boolean;
    };
}
