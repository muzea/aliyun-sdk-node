export interface GetAsyncJobResultResponse {
    /**
     * 请求ID。
     * @example `7CB9B663-3EF8-4C9C-A464-FDA2B5F1E3A4`
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
         * @example `{\"NewProbability\":\"4.062644e-06\",\"NormalProbability\":\"0.7230905\",\"OtherProbability\":\"0.27690542\",\"LesionRatio\":\"0.9387283236994219\",\"Mask\":\"http://algo-app-aic-med-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/covid19-dcm/unspecified/2020032702/1b1e1018-6fcf-11ea-8fa1-d20b34387541.nii.gz?Expires=1585276394&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=%2F1LNGWJUqvY0VRYGgg8Ldtb3BF****\"}`
         */
        Result: string;
        /**
         * 异步任务错误码。
         * @example `InvalidParameter`
         */
        ErrorCode: string;
        /**
         * 异步任务ID。
         * @example `CCCAAAFB-5628-40DD-A12C-6F52326C1B03`
         */
        JobId: string;
    };
}
