export interface GetLatestDataDiagnoseTaskStatusResponse {
    /**
     * 当前请求的RequestID
     * @example `8B90B646-1678-41A3-B23F-EAC6587B0E48`
     */
    requestId: string;
    /**
     * 创建的任务状态
     * 任务状态：
     * - RUNNING 运行中
     * - FAILURE  失败
     * - SUCCESS 成功
     * - NOTASK 没有任务
     * @example `RUNNING`
     */
    result: any;
}
