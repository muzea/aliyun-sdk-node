export interface SuspendCallRequest {
    /**
     * 实例id
     * @example `a5fc6490-ef1e-4666-870a-07a4e586c414`
     */
    "InstanceId": string;
    /**
     * 任务组id
     * @example `f745881b-343d-43e4-9c51-31b7b063031c`
     */
    "GroupId"?: string;
    /**
     * 被叫号码列表
     * @example `[]`
     */
    "CalledNumbers"?: string[];
}
