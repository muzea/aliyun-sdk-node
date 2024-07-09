export interface ListPoliciesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `b66ad557-9c00-4064-9c8d-b621c3263308`
     */
    RequestId: string;
    /**
     * 分页查询时，当前页面的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时，每页包含权限策略的数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 权限策略的总数量。
     * @example `1`
     */
    TotalCount: number;
    Policies: {
        /**
         * 权限策略列表。
         */
        Policy: {
            /**
             * 权限策略名称。
             * @example `policy_test`
             */
            Name: string;
        }[];
    };
}
