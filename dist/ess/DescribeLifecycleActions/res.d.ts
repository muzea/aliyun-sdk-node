export interface DescribeLifecycleActionsResponse {
    /**
     * 本次调用返回的查询凭证。
     * @example `AAAAAcSz4VTb1Nq****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `42A742EB-FCF3-459E-9C62-E107048C17E3`
     */
    RequestId: string;
    /**
     * 本次查询到的生命周期操作的总数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 单页查询的最大条目数。
     * @example `3`
     */
    MaxResults: number;
    /**
     * 各个生命周期挂钩对应的生命周期操作列表。
     */
    LifecycleActions: {
        /**
         * 生命周期挂钩的ID。
         * @example `ash-bp18uoft0deax0f7****`
         */
        LifecycleHookId: string;
        /**
         * 生命周期操作的标识符。
         * @example `9C2E9DA7-F794-449A-ACF6-CEE24444****`
         */
        LifecycleActionToken: string;
        /**
         * 生命周期操作的状态。
         * @example `Pending`
         */
        LifecycleActionStatus: string;
        /**
         * 该生命周期挂钩触发的生命周期操作结束后的下一步动作。取值范围：
         * - CONTINUE：继续响应弹性扩张活动，将ECS实例添加至伸缩组；继续响应弹性收缩活动，将ECS实例从伸缩组移除。
         * - ABANDON：终止弹性扩张活动，直接释放创建出来的ECS实例；继续响应弹性收缩活动，将ECS实例从伸缩组移除。
         * @example `CONTINUE`
         */
        LifecycleActionResult: string;
        /**
         * 该生命周期挂钩挂起的ECS实例的ID列表。
         */
        InstanceIds: string[];
    }[];
}
