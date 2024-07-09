export interface ListDelegatedServicesForAccountResponse {
    /**
     * 请求ID。
     * @example `D9C03B94-9396-4794-A74B-13DC437556A6`
     */
    RequestId: string;
    DelegatedServices: {
        /**
         * 可信服务列表。
         * > 如果返回为空，则表示查询的成员不是委派管理员账号。
         */
        DelegatedService: {
            /**
             * 设置为委派管理员账号的时间戳。
             * @example `1616652684164`
             */
            DelegationEnabledTime: string;
            /**
             * 可信服务的标识。
             * @example `cloudfw.aliyuncs.com`
             */
            ServicePrincipal: string;
            /**
             * 可信服务的启用状态。取值：
             * - ENABLED：已启用。
             * - DISABLED：未启用。
             * @example `ENABLED`
             */
            Status: string;
        }[];
    };
}
