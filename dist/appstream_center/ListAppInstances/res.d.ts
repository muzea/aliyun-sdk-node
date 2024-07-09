export interface ListAppInstancesResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 查询结果的总数。
     * @example `18`
     */
    TotalCount: number;
    /**
     * 每页的查询结果数量，不可超过`100`。建议填写该参数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 需展示的查询结果页码。建议填写该参数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询的应用实例列表。
     */
    AppInstanceModels: {
        /**
         * 应用实例ID。
         * @example `ai-8dl7dzchklmka****`
         */
        AppInstanceId: string;
        /**
         * 交付组ID。
         * @example `aig-dk8p95irqfst9****`
         */
        AppInstanceGroupId: string;
        /**
         * 应用实例状态。
         * @example `BOUND`
         */
        Status: string;
        /**
         * 主网卡公网IP。交付组网络策略（`StrategyType`）为混合模式（`Mixed`）时才返回该值，否则为空。
         * @example `10.13.13.211`
         */
        MainEthPublicIp: string;
        /**
         * 创建时间。
         * @example `2023-03-07T20:29:19.000+08:00`
         */
        GmtCreate: string;
        /**
         * 更新时间。
         * @example `2023-03-07T20:29:19.000+08:00`
         */
        GmtModified: string;
        /**
         * 会话连接状态。实例状态为应用运行中（`RUNNING`）时才返回该值，否则为空。
         * @example `connect`
         */
        SessionStatus: string;
        /**
         * 实例与用户绑定相关信息。
         */
        BindInfo: {
            /**
             * 实例绑定的最终用户ID。
             * @example `app.test`
             */
            EndUserId: string;
            /**
             * 实例使用时长。单位：秒。
             * @example `2000`
             */
            UsageDuration: number;
        };
    }[];
}
