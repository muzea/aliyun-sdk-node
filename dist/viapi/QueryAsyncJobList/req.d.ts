export interface QueryAsyncJobListRequest {
    /**
     * 开始时间。
     * @example `2023-01-04 00:00:00`
     */
    "StartTime"?: string;
    /**
     * 结束时间。
     * @example `2023-01-04 23:00:00`
     */
    "EndTime"?: string;
    /**
     * 异步接口返回的RequestId。
     * @example `E75FE679-0303-4DD1-8252-1143B4FA8A27	`
     */
    "JobId"?: string;
    /**
     * 类目英文名，详情可参考[能力开通](~~465341~~)中的类目英文名。
     * @example `ocr`
     */
    "PopProduct"?: string;
    /**
     * 能力接口名，详情可参考[能力开通](~~465341~~)中的能力接口名。
     * @example `RecognizeIdentityCard	`
     */
    "PopApiName"?: string;
    /**
     * 异步任务状态。包括：
     * - QUEUING：任务排队中
     * - PROCESSING：异步处理中
     * - PROCESS_SUCCESS：处理成功
     * - PROCESS_FAILED：处理失败
     * - TIMEOUT_FAILED：任务超时未处理完成
     * - LIMIT_RETRY_FAILED：超过最大重试次数
     * - JOB_CANCELED：任务取消
     * @example `PROCESS_SUCCESS`
     */
    "Status"?: string;
    /**
     * 起始页。
     * @example `1`
     */
    "PageNum"?: string;
    /**
     * 每页查询条数，最大500条。
     * @example `20`
     */
    "PageSize"?: string;
}
