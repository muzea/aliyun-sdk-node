export interface GetJobLogResponse {
    /**
     * 任务ID。
     * @example `B745C159-3155-4B94-95D0-4B73D4D2****`
     */
    RequestId: string;
    /**
     * 本次请求查询的作业ID。
     * @example `1.scheduler****`
     */
    JobId: string;
    /**
     * 作业结果日志，是以Base64编码的文本内容。
     * @example `c2xlZXAgMzA=`
     */
    OutputLog: string;
    /**
     * 作业错误日志，是以Base64编码的文本内容。
     * @example `c2xlZXAgMzA=`
     */
    ErrorLog: string;
}
