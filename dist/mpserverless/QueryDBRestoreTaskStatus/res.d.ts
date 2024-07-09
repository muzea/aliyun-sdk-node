export interface QueryDBRestoreTaskStatusResponse {
    /**
     * 回档任务状态。可选值如下：
     * - NEW：新创建，导出任务不可能出现此状态。
     * - WAITING：排队中，任务较多时可能会出现。
     * - RUNNING：执行中。
     * - SUCCESS：成功。
     * - FAILED：失败。
     * > 注意任务状态变成**SUCCESS**或者**FAILED**都应该中止轮询。
     * @example `SUCCESS`
     */
    Status: string;
    /**
     * 回档失败的数据库记录数量。
     * @example `1`
     */
    FailedCount: number;
    /**
     * 唯一请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 任务失败时的错误信息。
     * @example `SERVER_BUSY`
     */
    DetailMessage: string;
    /**
     * 成功回档的数据库记录数量。
     * @example `1`
     */
    SuccessCount: number;
}
