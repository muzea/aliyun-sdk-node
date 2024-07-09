export interface GetAsyncJobResultResponse {
    /**
     * 请求ID。
     * @example `572974F0-1014-5C60-97EE-DBFFC0FF7616`
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
         * @example `{\"tags\":[{\"confidence\":-1,\"value\":\"{\\\"tagInfo\\\": {\\\"humanInfo\\\": [[{\\\"category\\\": \\\"human-real-normal\\\", \\\"score\\\": 0.9690580798778683, \\\"bbox\\\": [77, 280, 431, 569], \\\"cloth_category\\\": \\\"modern\\\", \\\"cloth_category_score\\\": 0.7393399477005005}]], \\\"sceneInfo\\\": [[{\\\"category\\\": \\\"gamescreen-gameeffect\\\", \\\"score\\\": 0.44200169294841274}]], \\\"objectInfo\\\": [null]}}\"}]}`
         */
        Result: string;
        /**
         * 异步任务错误码。
         * @example `InvalidParameter`
         */
        ErrorCode: string;
        /**
         * 异步任务ID。
         * @example `72CFDC08-3FEF-56AA-91E5-B14DE31C09C2`
         */
        JobId: string;
    };
}
