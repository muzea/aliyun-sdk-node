export interface DialogueRequest {
    /**
     * 实例id
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 呼叫id
     * @example `1528189846043`
     */
    "CallId": string;
    /**
     * 呼叫类型，一般Outbound
     * @example `Outbound`
     */
    "CallType": string;
    /**
     * 场景id
     * @example `6cea9bed-63e6-439e-ae4c-b3333efff53d`
     */
    "ScenarioId"?: string;
    /**
     * 任务id
     * @example `ff44709e-39a6-43ba-959b-20fcabe3e496`
     */
    "TaskId"?: string;
    /**
     * 用户表述
     * @example `是的`
     */
    "Utterance": string;
    /**
     * 外呼需要执行的动作，Hangup 挂机
     * @example `broadcast`
     */
    "ActionKey"?: string;
    /**
     * 执行动作需要的参数（已废弃）
     * @example `""`
     */
    "ActionParams"?: string;
    /**
     * 主叫号码
     * @example `1***6`
     */
    "CallingNumber": string;
    /**
     * 被叫号码
     * @example `135****4353`
     */
    "CalledNumber": string;
    /**
     * 场景id
     * @example `c5c5d8c0-c0f1-48a7-be2b-dc46006d888a`
     */
    "ScriptId"?: string;
}
