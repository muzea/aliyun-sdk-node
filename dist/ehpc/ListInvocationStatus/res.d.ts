export interface ListInvocationStatusResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    /**
     * 命令ID。
     * @example `c-hz01v8x80o3****`
     */
    CommandId: string;
    /**
     * 总体执行状态。可能值：
     * - Finished：已结束
     * - Running：运行中
     * - Failed：运行失败
     * - Stopped：已停止
     * @example `Finished`
     */
    InvokeStatus: string;
    InvokeInstances: {
        /**
         * 执行状态列表，每个节点一条记录。
         */
        InvokeInstance: {
            /**
             * 节点运行状态。可能值：
             * - Finished：已结束
             * - Running：运行中
             * - Failed：运行失败
             * - Stopped：已停止
             * @example `Finished`
             */
            InstanceInvokeStatus: string;
            /**
             * 节点实例ID。
             * @example `i-uf6abz34m2714bp4****`
             */
            InstanceId: string;
        }[];
    };
}
