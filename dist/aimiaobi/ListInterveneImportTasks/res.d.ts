export interface ListInterveneImportTasksResponse {
    /**
     * 请求唯一标识
     * @example `3f7045e099474ba28ceca1b4eb6d6e21`
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
     * @example `success`
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
         * 总页数
         * @example `0`
         */
        TotalSize: number;
        /**
         * 页号
         * @example `1`
         */
        PageIndex: number;
        /**
         * 页尺寸
         * @example `10`
         */
        PageSize: number;
        /**
         * 任务状态信息
         */
        StatusList: {
            /**
             * 任务Id
             * @example `4854`
             */
            TaskId: string;
            /**
             * 任务名字
             * @example `12344454`
             */
            TaskName: string;
            /**
             * 任务信息
             * @example `Success`
             */
            Msg: string;
            /**
             * 任务状态
             * @example `Success`
             */
            Status: number;
            /**
             * 完成百分比
             * @example `5`
             */
            Percentage: number;
        }[];
    };
}
