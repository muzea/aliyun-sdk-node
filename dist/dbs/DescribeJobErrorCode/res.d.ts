export interface DescribeJobErrorCodeResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID.
     * @example `1FC2F86D-AFF4-4ED9-BB25-ADDE196CB2B5`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `The specified parameter %s value is not valid.     `
     */
    ErrMessage: string;
    /**
     * 错误码信息。
     */
    Item: {
        /**
         * 任务状态。
         * @example `init`
         */
        JobState: string;
        /**
         * 标准化错误信息。
         * @example `Describe preCheck progress failed.`
         */
        ErrorMessage: string;
        /**
         * 错误码。
         * @example `failed`
         */
        ErrorCode: string;
        /**
         * 全量备份或者恢复任务ID。
         * @example `r1iv62ud****`
         */
        JobId: string;
        /**
         * DBS内部任务类型id。
         * @example `testId`
         */
        JobType: string;
        /**
         * 错误信息语言。
         * @example `en`
         */
        Language: string;
    };
}
