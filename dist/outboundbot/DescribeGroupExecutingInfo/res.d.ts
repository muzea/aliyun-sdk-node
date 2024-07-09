export interface DescribeGroupExecutingInfoResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 执行组id
     * @example `b24d321a-2a74-4dd1-a0ba-4ab09cef6652`
     */
    GroupId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 实例id
     * @example `c46001bc-3ead-4bfd-9a69-4b5b66a4a3f4`
     */
    InstanceId: string;
    /**
     * 执行信息
     * @example `{}`
     */
    ExecutingInfo: {
        /**
         * 结束时间
         * @example `1640087774563`
         */
        EndTime: number;
        /**
         * 开始时间
         * @example `1640087774563`
         */
        StartTime: number;
        /**
         * 客户主动挂断次数
         * @example `5`
         */
        HangUpByClientNum: number;
        /**
         * 创建者名字
         * @example `xxx`
         */
        CreatorName: string;
        /**
         * 无应答
         * @example `5`
         */
        TransferByNoAnswer: number;
        /**
         * 已执行完成的个数
         * @example `5`
         */
        FinishedNum: number;
        /**
         * 意图识别
         * @example `5`
         */
        TransferByIntentNum: number;
        /**
         * 外呼量
         * @example `5`
         */
        CallNum: number;
        /**
         * 呼叫失败次数
         * @example `5`
         */
        CallFailedNum: number;
        /**
         * 执行进度
         * @example `{}`
         */
        JobsProgress: {
            /**
             * 调度中的任务数
             * @example `5`
             */
            SchedulingNum: number;
            /**
             * 总计完成的数量
             * @example `5`
             */
            TotalCompletedNum: number;
            /**
             * 失败个数
             * @example `5`
             */
            FailedNum: number;
            /**
             * 暂停的次数
             * @example `5`
             */
            PausedNum: number;
            /**
             * 取消的个数
             * @example `5`
             */
            CancelledNum: number;
            /**
             * 总计作业数量
             * @example `5`
             */
            TotalJobs: number;
            /**
             * 无应答的数量
             * @example `5`
             */
            TotalNotAnsweredNum: number;
            /**
             * 执行中的作业数量
             * @example `5`
             */
            ExecutingNum: number;
        };
    };
}
