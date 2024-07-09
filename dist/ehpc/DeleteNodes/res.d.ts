export interface DeleteNodesResponse {
    /**
     * 任务ID。
     * - 当Sync取值为true，该接口为同步接口。TaskId为Not Available。
     * - 当Sync取值为false，该接口为异步接口。您可以调用[ListTasks](~~268225~~)查询任务运行结果。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    TaskId: string;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
}
