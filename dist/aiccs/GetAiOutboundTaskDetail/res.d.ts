export interface GetAiOutboundTaskDetailResponse {
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 状态码。
     * @example `OK`
     */
    Code: string;
    /**
     * 接口是否调用成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 外呼任务详情。
     */
    Data: {
        /**
         * 任务ID。
         * @example `123`
         */
        TaskId: number;
        /**
         * 任务状态。取值：
         * - **0**：未开始。
         * - **1**：进行中。
         * - **2**：系统暂停。
         * - **3**：手动暂停。
         * - **4**：已完成。
         * - **5**：已终止。
         * @example `1`
         */
        Status: number;
        /**
         * 任务状态描述。
         * @example `未开始`
         */
        StatusDesc: string;
        /**
         * 任务类型。取值：
         * - **2**：预测式外呼。
         * - **3**：自动外呼。
         * @example `2`
         */
        Type: number;
        /**
         * 任务名称。
         * @example `xxxxx外呼`
         */
        Name: string;
        /**
         * 任务描述。
         * @example `房产销售`
         */
        Description: string;
        /**
         * 外呼主叫号码。
         */
        OutboundNums: string[];
        /**
         * 被叫号码重复策略。
         * - **0**：去重。
         * - **1**：不去重。
         * @example `0`
         */
        NumRepeated: number;
        /**
         * 技能组ID（预测式外呼）或IVR ID（自动外呼）。
         * @example `123456`
         */
        HandlerId: number;
        /**
         * 技能组名称或IVR名称。
         * @example `热线技能组`
         */
        HandlerName: string;
        /**
         * 任务执行时间。
         * @example `{"TUESDAY":[{"start":"06:00","end":"06:05"}],"MONDAY":[{"start":"09:00","end":"18:00"},{"start":"20:30","end":"21:45"},{"start":"22:30","end":"22:50"}],"WEDNESDAY":[{"start":"09:00","end":"18:00"}],"THURSDAY":[{"start":"09:00","end":"18:00"}],"FRIDAY":[{"start":"09:00","end":"18:00"}],"SATURDAY":[{"start":"09:00","end":"18:00"}],"SUNDAY":[{"start":"17:00","end":"23:45"}]}`
         */
        ExecutionTime: string;
        /**
         * 自动外呼的并发。
         * @example `10`
         */
        ConcurrentRate: number;
        /**
         * 失败重呼策略。
         */
        RecallRule: {
            /**
             * 重呼次数。
             * @example `2`
             */
            Count: number;
            /**
             * 重呼间隔时间。单位：分钟。
             * @example `2`
             */
            Interval: number;
        };
        /**
         * 预测式外呼固定外呼比例。
         * @example `1.2`
         */
        ForecastCallRate: number;
    };
}
