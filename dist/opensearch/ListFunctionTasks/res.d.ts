export interface ListFunctionTasksResponse {
    /**
     * 状态码
     * @example `200`
     */
    Status: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: number;
    /**
     * 符合要求的总记录数
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求id
     * @example `1638157479281`
     */
    RequestId: string;
    /**
     * 请求返回信息
     * @example `fail`
     */
    Message: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    Code: string;
    /**
     * 返回结果。
     * @example `[         {             "functionName": "ctr",             "progress": 100,             "status": "success",             "startTime": 100010,             "endTime": 200020,             "extendInfo": "{\"recall\":91,\"errors\":[]}",             "runId": "trigger__2021-03-05T12:18:41"         }     ]`
     */
    Result: {
        /**
         * 结束时间，单位毫秒，0表示未结束
         * @example `100010`
         */
        EndTime: number;
        /**
         * json string，包含模型评价信息、训练错误信息等。
         * @example `{\"recall\":91,\"errors\":[]}`
         */
        ExtendInfo: string;
        /**
         * 功能名称
         * @example `ctr`
         */
        FunctionName: string;
        /**
         * 进度，90表示90%
         * @example `90`
         */
        Progress: number;
        /**
         * 任务ID
         * @example `trigger__2021-03-05T12:18:41`
         */
        RunId: string;
        /**
         * 起始时间，单位毫秒
         * @example `100010`
         */
        StartTime: number;
        /**
         * 任务状态
         * - success
         * - failed
         * - running
         * @example `success`
         */
        Status: string;
        /**
         * 第几次迭代
         * @example `2`
         */
        Generation: string;
    }[];
    /**
     * 请求耗时（单位毫秒）
     * @example `123`
     */
    Latency: number;
}
