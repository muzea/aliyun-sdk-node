export interface GetAsyncJobResultResponse {
    /**
     * 请求ID。
     * @example `6BD843FB-E7B9-45B6-ADE1-9AB1FF450148`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 异步任务状态。包括：
         * - QUEUING：任务排队中
         * - PROCESSING：异步处理中
         * - PROCESS_SUCCESS：处理成功
         * - PROCESS_FAILED：处理失败
         * - TIMEOUT_FAILED：任务超时未处理完成
         * - LIMIT_RETRY_FAILED：超过最大重试次数
         * @example `PROCESS_SUCCESS`
         */
        Status: string;
        /**
         * 异步任务错误码信息。
         * @example `paramsIllegal`
         */
        ErrorMessage: string;
        /**
         * 异步任务返回的真实请求结果。
         * @example `{\"VideoUrl\":\"http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/film-summary/49E2CC28-ED1D-4CC5-854D-7D0AE2B20976_rf8mv0.mp4?Expires=1585111875&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=7uE0ppt6uwkdwAFz73PPZN4KG7****\"}`
         */
        Result: string;
        /**
         * 异步任务错误码。
         * @example `InvalidParameter`
         */
        ErrorCode: string;
        /**
         * 异步任务ID。
         * @example `49E2CC28-ED1D-4CC5-854D-7D0AE2B20976`
         */
        JobId: string;
    };
}
