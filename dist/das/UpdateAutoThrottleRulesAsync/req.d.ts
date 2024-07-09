export interface UpdateAutoThrottleRulesAsyncRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "ConsoleContext"?: string;
    /**
     * 数据库实例ID。
     * > 数据格式为JSONArray，例如`['实例ID1','实例ID2']`，实例ID间用英文逗号（,）分隔。
     * @example `['rm-2ze8g2am97624****','rm-2ze9xrhze0709****']`
     */
    "InstanceIds": string;
    /**
     * CPU利用率阈值，取值范围：70%~100%。
     * @example `70`
     */
    "CpuUsage": number;
    /**
     * CPU利用率阈值和活跃会话数阈值的逻辑关系。
     * - **AND**：且。
     * - **OR**：或。
     * @example `OR`
     */
    "CpuSessionRelation": string;
    /**
     * 活跃会话数阈值。
     * - 与CPU利用率阈值关系为**OR**（或）时，大于等于16。
     * - 与CPU利用率阈值关系为**AND**（且）时，大于等于2。
     * @example `16`
     */
    "ActiveSessions": number;
    /**
     * 触发自动SQL限流的异常的持续时间阈值，取值范围：大于等于2的正整数，单位：分钟。
     * @example `2`
     */
    "AbnormalDuration": number;
    /**
     * 最大限流时长，取值为正整数，单位：分钟。
     * @example `10`
     */
    "MaxThrottleTime": number;
    /**
     * 可限流时间段的开始时间（UTC时间）。
     * @example `00:00Z`
     */
    "AllowThrottleStartTime": string;
    /**
     * 可限流时间段的结束时间（UTC时间）。
     * @example `23:59Z`
     */
    "AllowThrottleEndTime": string;
    /**
     * 是否同时KILL执行中的异常SQL：
     * > 异常SQL：与需要限流的SQL模板相同。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "AutoKillSession": boolean;
    /**
     * 异步请求的ID。
     * > 异步调用后不会立即返回完整结果，首先需要调用该接口获取**ResultId**，然后使用返回数据的**ResultId**，重新发起调用，直到**isFinish**取值为**true**时，返回完整结果。即获取一次完整数据，至少需要调用该接口两次。
     * @example `async__507044db6c4eadfa2dab9b084e80****`
     */
    "ResultId"?: string;
}
