export interface QueryDBExportTaskStatusResponse {
    /**
     * 导出记录数，仅当任务状态为SUCCESS时返回。
     * @example `2`
     */
    ExportedCount: string;
    /**
     * 任务状态，有以下几种类型：
     * - WAITING：排队中，当前任务还未开始执行。
     * - RUNNING：执行中。
     * - SUCCESS：成功。
     * - FAILED：失败。
     * @example `SUCCESS`
     */
    Status: string;
    /**
     * 唯一请求ID。
     * @example `58881468-E779-4203-B933-BD53FDC60D6F`
     */
    RequestId: string;
    /**
     * 下载链接，仅当任务状态为SUCCESS时返回。
     * @example `https://mps-zjk-share.oss-cn-zhangjiakou.aliyuncs.com/mongo/export/0e16bb12-14af-4635-b24c-5ac1a9a7bb9f/20200720104406_0150006d-ab93-4920-a63e-c011dea1e089.csv?Expires=1595215206&OSSAccessKeyId=LTAIupaslTlU****&Signature=CKxpKX3Wj%2BLVtZ****%2FTbe%2BX9sc%3D`
     */
    DownloadUrl: string;
    /**
     * 任务失败时的错误信息。
     * @example ` SERVER_BUSY`
     */
    DetailMessage: string;
}
