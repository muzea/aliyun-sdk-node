export interface DescribeRecoveryPlansResponse {
    /**
     * 请求ID。
     * @example `F2812CD7-03E7-5774-9EE5-827D8398A670`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 接口返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页查询时的每页行数，最大值：100默认值：10
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页查询的当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 恢复计划数量。
     * @example `1`
     */
    TotalCount: number;
    RecoveryPlans: {
        /**
         * 恢复计划列表。
         */
        recoveryPlan: {
            /**
             * 恢复计划状态。其中，
             * - **creating**：创建中
             * - **updating**：更新中
             * - **deleting**：删除中
             * - **failed**：失败
             * - **init**：已初始化
             * - **running**：执行中
             * @example `init`
             */
            Status: string;
            /**
             * 恢复计划的方向，支持**forward**。
             * @example `forward`
             */
            Direction: string;
            /**
             * 恢复计划名称。
             * @example `test-1`
             */
            Name: string;
            /**
             * 恢复计划ID。
             * @example `rp-xxxxxxxxxxxxxxxxxx`
             */
            RecoveryPlanId: string;
        }[];
    };
}
