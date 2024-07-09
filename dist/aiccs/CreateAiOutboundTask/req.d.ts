export interface CreateAiOutboundTaskRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的**实例管理**中获取。
     * @example `cc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 任务类型。取值：
     * - **2**：预测式外呼。
     * - **3**：自动外呼。
     * @example `2`
     */
    "Type": number;
    /**
     * 任务名。1～15字符。
     * @example `测试任务`
     */
    "Name": string;
    /**
     * 任务描述。0～100字符。
     * @example `房产销售`
     */
    "Description"?: string;
    /**
     * 外呼主叫号码。
     * > 必须是已购买的号码，多个号码用半角逗号（,）隔开。
     */
    "OutboundNums": string[];
    /**
     * 被叫号码重复策略。取值：
     * - **0**：任务内去重。
     * - **1**：不去重。
     * @example `1`
     */
    "NumRepeated": number;
    /**
     * 对应的技能组ID（预测式外呼）或者IVR ID（自动外呼）。请您在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)获取信息。
     * @example `123456`
     */
    "HandlerId": number;
    /**
     * 任务执行时间。JSON格式。
     * > 结束时间（end）需晚于开始时间（start）。
     * @example `{"TUESDAY":[{"start":"06:00","end":"06:05"}],"MONDAY":[{"start":"09:00","end":"18:00"},{"start":"20:30","end":"21:45"},{"start":"22:30","end":"22:50"}],"WEDNESDAY":[{"start":"09:00","end":"18:00"}],"THURSDAY":[{"start":"09:00","end":"18:00"}],"FRIDAY":[{"start":"09:00","end":"18:00"}],"SATURDAY":[{"start":"09:00","end":"18:00"}],"SUNDAY":[{"start":"17:00","end":"23:45"}]}`
     */
    "ExecutionTime": string;
    /**
     * 自动外呼的呼叫并发。
     * @example `10`
     */
    "ConcurrentRate"?: number;
    /**
     * 失败重呼策略。
     * > 取值为空则不重呼。
     */
    "RecallRule"?: {
        /**
         * 重呼次数。取值范围：**1～3**。
         * @example `1`
         */
        Count: number;
        /**
         * 重呼间隔时间。取值范围：**1～60**，单位：分钟。
         * @example `1`
         */
        Interval: number;
    };
    /**
     * 预测式外呼固定外呼比例。取值范围：**≥1**。
     * @example `1.5`
     */
    "ForecastCallRate"?: number;
}
