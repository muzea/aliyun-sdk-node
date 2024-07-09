export interface UpdateAiOutboundTaskRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `agent_***`
     */
    "InstanceId": string;
    /**
     * 任务ID。
     * 可调用[CreateAiOutboundTask](~~312260~~)接口，查看返回参数中的**Data**，或者调用[GetAiOutboundTaskList](~~2718026~~)接口，查看返回参数中的**TaskId**。
     * @example `123`
     */
    "TaskId": number;
    /**
     * 任务名称。1～15字符。
     * @example `xxxx外呼`
     */
    "Name": string;
    /**
     * 任务描述。0～100字符。
     * @example `房产销售`
     */
    "Description"?: string;
    /**
     * 外呼主叫号码。
     */
    "OutboundNums": string[];
    /**
     * 被叫号码重复策略。
     * - **0**：任务内去重。
     * - **1**：任务内不去重。
     * @example `1`
     */
    "NumRepeated": number;
    /**
     * 技能组ID（预测式外呼）或者IVR ID（自动外呼）。
     * @example `123`
     */
    "HandlerId": number;
    /**
     * 任务执行时间。
     * > 结束时间（end）需晚于开始时间（start）。
     * @example `{"TUESDAY":[{"start":"06:00","end":"06:05"}],"MONDAY":[{"start":"09:00","end":"18:00"},{"start":"20:30","end":"21:45"},{"start":"22:30","end":"22:50"}],"WEDNESDAY":[{"start":"09:00","end":"18:00"}],"THURSDAY":[{"start":"09:00","end":"18:00"}],"FRIDAY":[{"start":"09:00","end":"18:00"}],"SATURDAY":[{"start":"09:00","end":"18:00"}],"SUNDAY":[{"start":"17:00","end":"23:45"}]}`
     */
    "ExecutionTime": string;
    /**
     * 自动外呼的并发。
     * @example `10`
     */
    "ConcurrentRate"?: number;
    /**
     * 失败重呼策略。
     * > 为空则外呼失败时不重呼。
     */
    "RecallRule"?: {
        /**
         * 失败重呼次数。取值范围：**1～3**次。
         * @example `2`
         */
        Count: number;
        /**
         * 失败重呼间隔时间。取值范围：**1～60**，单位：分钟。
         * @example `5`
         */
        Interval: number;
    };
    /**
     * 预测式外呼固定外呼比例。取值范围：**≥1**。
     * @example `1.2`
     */
    "ForecastCallRate"?: number;
}
