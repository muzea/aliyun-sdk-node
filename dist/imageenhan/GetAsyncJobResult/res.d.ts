export interface GetAsyncJobResultResponse {
    /**
     * 请求ID。
     * @example `6B4B827E-1CAA-43CD-BBDF-BB572E035976`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
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
         * @example `http://viapi-cn-shanghai-dha-filter.oss-cn-shanghai.aliyuncs.com/upload/recoloring-hd-2020-06-22-19-39-25-798c9cb57f-v6pj4/2020-6-23/invi_filter_015928997797691000043_tIPX7W.jpg?Expires=1592901579&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=qelgcQJBnzRogPybEPDDrDIjHd****`
         */
        Result: string;
        /**
         * 异步任务错误码。
         * @example `InvalidParameter`
         */
        ErrorCode: string;
        /**
         * 异步任务ID。
         * @example `7435839A-5B92-4AA1-B2DE-5B6C98C04DDE`
         */
        JobId: string;
    };
}
