export interface GetAiOutboundTaskProgressResponse {
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `ok`
     */
    Message: string;
    /**
     * 状态码。
     * @example `ok`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务进展。
     */
    Data: {
        /**
         * 任务ID。
         * @example `123456`
         */
        TaskId: number;
        /**
         * 任务类型。取值：
         * - **2**：预测式。
         * - **3**：自动。
         * @example `2`
         */
        Type: number;
        /**
         * 任务维度进展。
         */
        TaskProgress: {
            /**
             * 总任务数。
             * @example `10`
             */
            TotalCount: number;
            /**
             * 任务完成数。
             * @example `2`
             */
            FinishCount: number;
            /**
             * 待呼叫任务数。
             * @example `2`
             */
            WaitingCallCount: number;
            /**
             * 呼叫中任务数。
             * @example `2`
             */
            CallingCount: number;
            /**
             * 待重呼任务数。
             * @example `2`
             */
            WaitingRecallCount: number;
            /**
             * 已终止任务数。
             * @example `2`
             */
            TerminateCount: number;
            /**
             * 任务完成率。
             * @example `0.20`
             */
            FinishRate: number;
            /**
             * 坐席接通数。
             * > 预测式外呼特有参数。
             * @example `2`
             */
            ServicerPickupCount: number;
            /**
             * 客户接起数。
             * > 预测式外呼特有参数。
             * @example `2`
             */
            UserPickupCount: number;
            /**
             * 坐席接通率。
             * > 预测式外呼特有参数。
             * @example `0.2`
             */
            ServicerPickupRate: number;
            /**
             * 客户接起率。
             * > 预测式外呼特有参数。
             * @example `0.2`
             */
            UserPickupRate: number;
            /**
             * 任务接通量。
             * > 自动外呼特有参数。
             * @example `2`
             */
            ConnectCount: number;
            /**
             * 任务接通率。
             * > 自动外呼特有参数。
             * @example `0.2`
             */
            ConnectRate: number;
        };
        /**
         * 外呼维度进展。
         */
        CalloutProgress: {
            /**
             * 外呼次数。
             * @example `10`
             */
            CallOutCount: number;
            /**
             * 外呼接通次数。
             * > 自动外呼特有参数。
             * @example `5`
             */
            CallOutConnectCount: number;
            /**
             * 外呼接通次率。
             * > 自动外呼特有参数。
             * @example `0.5`
             */
            CallOutConnectRate: number;
            /**
             * 呼损量。
             * > 预测式外呼特有参数。
             * @example `1`
             */
            CallLossCount: number;
            /**
             * 呼损率。
             * > 预测式外呼特有参数。
             * @example `0.01`
             */
            CallLossRate: number;
            /**
             * 坐席接通量。
             * > 预测式外呼特有参数。
             * @example `4`
             */
            CallOutServicerPickupCount: number;
            /**
             * 客户接起量。
             * > 预测式外呼特有参数。
             * @example `5`
             */
            CallOutUserPickupCount: number;
            /**
             * 坐席接通率。
             * > 预测式外呼特有参数。
             * @example `0.4`
             */
            CallOutServicerPickupRate: number;
            /**
             * 客户接起率。
             * > 预测式外呼特有参数。
             * @example `0.5`
             */
            CallOutUserPickupRate: number;
        };
    };
}
