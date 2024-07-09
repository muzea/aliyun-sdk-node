export interface GetInterveneImportTaskInfoResponse {
    /**
     * 请求唯一标识
     * @example `1813ceee-7fe5-41b4-87e5-982a4d18cca5`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `0`
     */
    Code: string;
    /**
     * 错误说明
     * @example `Success`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 任务状态信息
         */
        Status: {
            /**
             * 任务Id
             * @example `41405255`
             */
            TaskId: string;
            /**
             * 任务名字
             * @example `ft-task-20190101m8rnK`
             */
            TaskName: string;
            /**
             * 任务信息
             * @example `success`
             */
            Msg: string;
            /**
             * 任务状态
             * @example `0`
             */
            Status: number;
            /**
             * 完成百分比
             * @example `80`
             */
            Percentage: number;
        };
    };
}
