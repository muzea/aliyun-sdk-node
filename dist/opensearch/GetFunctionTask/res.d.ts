export interface GetFunctionTaskResponse {
    /**
     * 请求状态
     * @example `OK`
     */
    Status: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 请求ID
     * @example `A4D487A9-A456-5AA5-A9C6-B7BF2889CF74`
     */
    RequestId: string;
    /**
     * 返回的错误信息
     * @example `operation success`
     */
    Message: string;
    /**
     * 返回的错误码
     * @example `Task.NotExist`
     */
    Code: string;
    /**
     * 返回结果
     */
    Result: {
        /**
         * 任务结束时间（单位ms）
         * @example `1647213406267`
         */
        EndTime: number;
        /**
         * 扩展信息（json string）
         * @example `{\"recall\":91,\"errors\":[]}`
         */
        ExtendInfo: string;
        /**
         * 功能名称
         * @example `ctr`
         */
        FunctionName: string;
        /**
         * 迭代次数
         * @example `1`
         */
        Generation: string;
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
         * 任务开始时间（单位ms）
         * @example `1647212220000`
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
    };
    /**
     * 请求耗时（单位ms）
     * @example `123`
     */
    Latency: number;
}
