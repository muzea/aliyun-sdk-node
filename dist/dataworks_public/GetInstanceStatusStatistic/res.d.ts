export interface GetInstanceStatusStatisticResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 实例状态的数量统计。
     */
    StatusCount: {
        /**
         * 运行失败的实例数量。
         * @example `1`
         */
        FailureCount: number;
        /**
         * 等待运行的实例数量。
         * @example `1`
         */
        WaitTimeCount: number;
        /**
         * 运行中的实例数量。
         * @example `1`
         */
        RunningCount: number;
        /**
         * 运行成功的实例数量。
         * @example `1`
         */
        SuccessCount: number;
        /**
         * 实例的总数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 未运行的实例数量。
         * @example `1`
         */
        NotRunCount: number;
        /**
         * 等待资源的实例数量。
         * @example `1`
         */
        WaitResCount: number;
    };
}
