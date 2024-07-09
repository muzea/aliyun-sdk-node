export interface GetAsyncJobResultResponse {
    /**
     * 请求ID。
     * @example `0E448D84-1736-1BCD-BEA5-866C413515A1`
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
         * - LIMIT_RETRY_FAILED：超过最大重试次数（如返回该状态，请稍后重新调用算法接口，然后调用查询异步任务结果接口GetAsyncJobResult）
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
         * @example `"{\"jsonUrl\":\"http://vibktprfx-prod-prod-damo-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/eas-video-quality-assessment/2023-01-11-16/01%3A52-crxCR763VXTeY0bP.json?Expires=1673425915&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=iW07EIZaqaiMNoF3RJZwsLVxOx****\",\"pdfUrl\":\"http://vibktprfx-prod-prod-damo-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/eas-video-quality-assessment/2023-01-11-16/01%3A52-crxCR763VXTeY0bP.pdf?Expires=1673425916&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=BvZ3ayeTTxaR65ZvQ2%2FoE8W8Lr****\"}"`
         */
        Result: string;
        /**
         * 异步任务错误码。
         * @example `InvalidParameter`
         */
        ErrorCode: string;
        /**
         * 异步任务ID。
         * @example `A421D5F0-4F73-19F5-8D92-D509FAD281D2`
         */
        JobId: string;
    };
}
