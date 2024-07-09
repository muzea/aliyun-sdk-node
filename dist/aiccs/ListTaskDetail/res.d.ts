export interface ListTaskDetailResponse {
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 任务详细信息。
     */
    Data: {
        /**
         * 每页个数。
         * @example `20`
         */
        PageNo: number;
        /**
         * 当前页码。
         * @example `1`
         */
        PageSize: number;
        /**
         * 任务总数。
         * @example `50`
         */
        Total: number;
        /**
         * 任务信息。
         */
        Record: {
            /**
             * 明细状态。
             * @example `SUCCESS`
             */
            Status: string;
            /**
             * 当前重试次数。
             * @example `1`
             */
            RetryCurTimes: number;
            /**
             * 被叫号码。
             * @example `186****0000`
             */
            Called: string;
            /**
             * 主叫号码。
             * @example `136****0000`
             */
            Caller: string;
            /**
             * 通话时长。单位：秒。
             * @example `30`
             */
            Duration: number;
            /**
             * 明细ID。
             * @example `12****`
             */
            Id: number;
            /**
             * 呼叫状态码。
             * @example `00001`
             */
            StatusCode: string;
            /**
             * 呼叫状态码描述。
             * @example `呼叫成功`
             */
            StatusCodeDesc: string;
            /**
             * 重试次数。
             * @example `1`
             */
            RetryTimes: number;
            /**
             * 开始时间。
             * @example `2021-05-20 00:00:00`
             */
            StartTime: string;
            /**
             * 结束时间。
             * @example `2021-05-20 00:03:00`
             */
            EndTime: string;
            /**
             * 挂断方向。取值：
             * - **用户**。
             * - **机器**。
             * @example `用户`
             */
            Direction: string;
            /**
             * 标签。
             * @example `标签`
             */
            Tags: string;
        }[];
    };
    /**
     * 请求状态码。返回OK代表请求成功。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `Ok`
     */
    Message: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
}
