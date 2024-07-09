export interface DescribeJobDataParsingTaskProgressResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 进度
     * @example `{}`
     */
    Progress: {
        /**
         * 失败错误码
         * @example `Permission.JobStatus`
         */
        FailErrorCode: string;
        /**
         * 作业状态
         * @example `Pending`
         */
        Status: string;
        /**
         * 处理处理中作业数量
         * @example `2`
         */
        HandledJobCount: number;
        /**
         * 总计作业数量
         * @example `3`
         */
        TotalJobCount: number;
        /**
         * 失败原因
         * @example `CreateCorpus`
         */
        FailReason: string;
        FeedbackUrl: string;
    };
}
