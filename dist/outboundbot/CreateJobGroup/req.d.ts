export interface CreateJobGroupRequest {
    /**
     * 实例ID
     * @example `174952ab-9825-4cc9-a5e2-de82d7fa4cdd`
     */
    "InstanceId": string;
    /**
     * 任务名字。
     * @example `第一个任务`
     */
    "JobGroupName": string;
    /**
     * 任务描述。
     * @example `任务描述`
     */
    "JobGroupDescription"?: string;
    /**
     * 业务场景。旧版画布参数，公共云客户场景使用ScriptId即可。
     * @example `b9ff4e88-65f9-4eb3-987c-11ba51f3f24d
    `
     */
    "ScenarioId"?: string;
    /**
     * 话术场景ID。该参数不能和ScenarioId同时为空。
     * @example `b9ff4e88-65f9-4eb3-987c-11ba51f3f24d`
     */
    "ScriptId"?: string;
    /**
     * 任务执行策略。
     * - RepeatBy 重复类型。Once(不重复),Day(按天重复),Week(按周重复),Month(按月重复);
     * - StartTime 策略开始时间。
     * - EndTime 策略结束时间。
     * - WorkingTime 可外呼时间段。
     * - MaxAttemptsPerDay 每天该任务下号码最大可尝试呼叫次数。
     * - MinAttemptInterval 号码重试呼叫时间间隔，单位分钟。
     * - RoutingStrategy 号码策略，None(不指定)，LocalFirst(本市号码优先), LocalProvinceFirst(本省号码优先)。
     * - RepeatDays 对应重复类型下的执行日期。若重复类型RepeatBy为周，0表示周日，1-6分别表示周一至周六；若重复周期RepeatBy为月，1-31分别表示1至31日，没有该指定日期的月份不执行，如：若选定30日，二月份不执行。
     * @example `{"maxAttemptsPerDay":"3","minAttemptInterval":"10","routingStrategy":"LocalProvinceFirst","repeatDays":["1","2","3"],"workingTime":[{"beginTime":"10:00:00","endTime":"11:00:00"},{"beginTime":"14:00:00","endTime":"15:00:00"}],"repeatable":true,"endTime":1707494400000,"startTime":1706976000000,"repeatBy":"Week"}`
     */
    "StrategyJson"?: string;
    /**
     * 重拨策略，json格式。
     * - **emptyNumberIgnore**：空号不外呼。
     * - **inArrearsIgnore**：欠费不外呼。
     * - **outOfServiceIgnore**：停机不外呼。
     * @example `{"emptyNumberIgnore":true,"inArrearsIgnore":true,"outOfServiceIgnore":true}`
     */
    "RecallStrategyJson"?: string;
    /**
     * 主叫号码列表
     */
    "CallingNumber"?: string[];
    /**
     * 最优振铃时长
     * @example `25`
     */
    "RingingDuration"?: number;
    /**
     * 作业组优先级，取值范围如下
     * - **Urgent**：紧急任务。
     * - **Daily**：日常任务。
     * @example `Daily`
     */
    "Priority"?: string;
    /**
     * 并发保障值。
     * - 任务启动时，最低保障N个并发。
     * - 同一优先级的任务并发保障值加和不能大于实例并发。
     * - 若配置并发保障值为0，则依赖系统内空闲并发进行智能分配。
     * @example `1`
     */
    "MinConcurrency"?: number;
    /**
     * 闪信推送的配置参数，JSON格式，包含第三方闪信的配置信息。
     * - templateId: 闪信模板ID。
     * - configId: 闪信配置ID。
     * @example `{"templateId":"10471","configId":"8037f524-6ff2-4dbe-bb28-f59234ea7a64"}`
     */
    "FlashSmsExtras"?: string;
    "RecallCallingNumber"?: string[];
}
