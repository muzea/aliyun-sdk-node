export interface GetAsyncTaskRequest {
    /**
     * 企业网盘ID。
     * @example `cn-shanghai+cds-135515****`
     */
    "CdsId": string;
    /**
     * 异步任务ID。调用[CopyCdsFile](~~2247626~~)接口复制文件夹时，因为是后台异步复制，所以会返回该字段。调用本接口并传入该异步任务ID即可获取任务详细信息。
     * @example `81a8a07a-aec4-4dd5-80da-ae69e482****`
     */
    "AsyncTaskId": string;
}
