export interface GenerateImageTaskResponse {
    /**
     * 请求唯一标识
     * @example `F2F366D6-E9FE-1006-BB70-2C650896AAB5`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `successful`
     */
    Code: string;
    /**
     * 错误说明
     * @example `successful`
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
         * 段落任务信息，根据输入的段落ID进行关联
         */
        TaskList: {
            /**
             * 段落ID
             * @example `1`
             */
            Id: number;
            /**
             * 段落内容
             * @example `一直忧伤的猫`
             */
            Content: string;
            /**
             * 任务ID 任务唯一标识
             * @example `e1be065b-adc3-435e-bd01-1c18c5ed75d3`
             */
            TaskId: string;
            /**
             * 当前任务状态 SUCCESSED=任务执行成功 ，FAILED=任务执行失败 ，CANCELED=任务被取消 ，PENDIN=任务排队中 ，SUSPENDE=任务挂起 RUNNIN=任务处理中
             * @example `SUCCESSED`
             */
            TaskStatus: string;
        }[];
    };
}
