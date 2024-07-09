export interface GetInstanceStatusCountResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 实例的状态统计。
     */
    StatusCount: {
        /**
         * 失败实例的数量。
         * @example `1`
         */
        FailureCount: number;
        /**
         * 满足条件开始等待运行的实例数量。
         * @example `1`
         */
        WaitTimeCount: number;
        /**
         * 运行中实例的数量。
         * @example `1`
         */
        RunningCount: number;
        /**
         * 成功实例的数量。
         * @example `1`
         */
        SuccessCount: number;
        /**
         * 实例的总数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 未运行实例的数量。
         * @example `1`
         */
        NotRunCount: number;
        /**
         * 等待资源实例的数量。
         * @example `1`
         */
        WaitResCount: number;
    };
}
