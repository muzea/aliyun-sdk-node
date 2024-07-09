export interface CreateBatchRepeatJobRequest {
    /**
     * 实例id
     * @example `2bfa5ae4-7185-4227-a3b8-328f26f11be1`
     */
    "InstanceId": string;
    /**
     * 作业名称
     * @example `24`
     */
    "Name": string;
    /**
     * 作业组描述
     * @example `测试3`
     */
    "Description"?: string;
    /**
     * 话术id
     * @example `0fe7f71c-8771-42ef-9bb1-19aa16ae7120`
     */
    "ScriptId"?: string;
    /**
     * 作业组id
     * @example `c4f8a3d3-2e94-4bd4-aef8-e35f663d4847`
     */
    "SourceGroupId": string;
    /**
     * 作业组状态
     * @example `Succeeded,NoInteraction,Failed,Cancelled`
     */
    "FilterStatus"?: string;
    /**
     * 作业执行策略
     * @example `{\"maxAttemptsPerDay\":1,\"minAttemptInterval\":1,\"routingStrategy\":\"LocalFirst\"}`
     */
    "StrategyJson"?: string;
    /**
     * 重拨策略json
     * @example `{\"emptyNumberIgnore\":false,\"inArrearsIgnore\":false,\"outOfServiceIgnore\":false}`
     */
    "RecallStrategyJson"?: string;
    /**
     * 主叫号码
     * @example `[]`
     */
    "CallingNumber"?: string[];
    /**
     * 振铃时长
     * @example `25`
     */
    "RingingDuration"?: number;
    /**
     * 作业优先级
     * @example `10`
     */
    "Priority"?: string;
    /**
     * 最小并发数
     * @example `2`
     */
    "MinConcurrency"?: number;
    "FlashSmsExtras"?: string;
    "RecallCallingNumber"?: string[];
}
