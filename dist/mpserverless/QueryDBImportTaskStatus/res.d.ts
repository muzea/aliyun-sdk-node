export interface QueryDBImportTaskStatusResponse {
    /**
     * 任务执行状态。可选值为：
     * - NEW： 新创建，创建了任务但是未上传文件，或者文件未上传完成。
     * - WAITING：排队中，当前任务还未开始执行。
     * - RUNNING：执行中。
     * - SUCCESS：成功。
     * - FAILED：失败。
     * @example `SUCCESS`
     */
    Status: string;
    /**
     * 失败记录数。
     * @example `0`
     */
    FailedCount: string;
    /**
     * 唯一请求ID。
     * @example `692DCFEF-46DD-4EBB-B1DB-338E687DC260`
     */
    RequestId: string;
    /**
     * 任务失败时的错误信息。
     * @example `SERVER_BUSY`
     */
    DetailMessage: string;
    /**
     * 成功记录数。
     * @example `6`
     */
    SuccessCount: string;
}
