export interface GetAsyncJobResultResponse {
    /**
     * 请求ID。
     * @example `87FC80D2-2571-4BBD-BD61-AFF7912C556D`
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
         * @example `{\"inputFile\":\"oss://public-vigen-video/guotian.xgt/test_images/test_video\",\"width\":1280,\"height\":720,\"frames\":[{\"time\":6124533574,\"elements\":[{\"type\":\"PERSON\",\"score\":0.7812,\"x\":289,\"y\":271,\"width\":100,\"height\":156},{\"type\":\"PERSON\",\"score\":0.4377,\"x\":917,\"y\":267,\"width\":34,\"height\":51}]}]}]}"}`
         */
        Result: string;
        /**
         * 异步任务错误码。
         * @example `InvalidParameter`
         */
        ErrorCode: string;
        /**
         * 异步任务ID。
         * @example `35B11E1B-800C-4598-B5AA-577E3BDBD917`
         */
        JobId: string;
    };
}
