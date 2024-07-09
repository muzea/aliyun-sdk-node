export interface ModifyJobGroupRequest {
    /**
     * 实例ID。
     * @example `174952ab-9825-4cc9-a5e2-de82d7fa4cdd`
     */
    "InstanceId": string;
    /**
     * 任务ID。
     * @example `3edc0260-6f7c-4de4-8535-09372240618b`
     */
    "JobGroupId": string;
    /**
     * 任务名字。
     * @example `修改后的作业组`
     */
    "Name": string;
    /**
     * 场景ID。(历史参数，后续使用ScriptId)
     * @example `c6a668d1-3145-4048-9101-cb3678bb8884`
     */
    "ScenarioId"?: string;
    /**
     * 任务描述。
     * @example `修改后的作业组`
     */
    "Description"?: string;
    /**
     * 作业组执行策略
     * name：策略名称
     * maxAttemptsPerDay：号码每天最大呼叫次数
     * minAttemptInterval：未接通情况下的重试时间间隔，单位为分钟
     * startTime：开始时间戳
     * endTime：结束时间戳
     * workingTime：可呼出的时间窗口，24小时制
     * id：策略id，对于该接口为必填
     * @example `{\"maxAttemptsPerDay\":\"0\",\"minAttemptInterval\":\"5\",\"Id\":\"689fc584-7f9f-4dc2-933d-8711beef7b15\"}`
     */
    "StrategyJson"?: string;
    /**
     * 重拨策略json
     * @example `{\"emptyNumberIgnore\":false,\"inArrearsIgnore\":false,\"outOfServiceIgnore\":false}`
     */
    "RecallStrategyJson"?: string;
    /**
     * 场景话术ID。
     * @example `5a3940ce-a12f-4222-9f0f-605a9b89ea7c`
     */
    "ScriptId"?: string;
    /**
     * 主叫号码。
     */
    "CallingNumber"?: string[];
    /**
     * 任务状态，取值范围：
     * - **Draft**：草稿。
     * - **Scheduling**：调度中。
     * - **Executing**：执行中。
     * - **Completed**：已完成。
     * - **Paused**：挂起。
     * - **Failed**：失败。
     * - **Cancelled**：已取消。
     * - **Initializing**：初始化。
     * @example `Draft`
     */
    "JobGroupStatus"?: string;
    /**
     * 最优振铃时长。
     * @example `25`
     */
    "RingingDuration"?: number;
    /**
     * 并发保障值
     * 任务启动时，最低保障N个并发；
     * 同一优先级的任务并发保障值加和不能大于实例并发；
     * 若配置并发保障值为0，则依赖系统内空闲并发进行智能分配。
     * @example `1`
     */
    "MinConcurrency"?: number;
    /**
     * 作业组优先级，取值范围
     * - **Urgent**：紧急任务。
     * - **Daily**：日常任务。
     * @example `Daily`
     */
    "Priority"?: string;
    /**
     * 闪信推送的配置参数，JSON格式，包含第三方闪信的配置信息。
     * templateId: 闪信模板ID。
     * configId: 闪信配置ID。
     * @example `{"templateId":"10471","configId":"8037f524-6ff2-4dbe-bb28-f59234ea7a64"}
    `
     */
    "FlashSmsExtras"?: string;
    "RecallCallingNumber"?: string[];
}
