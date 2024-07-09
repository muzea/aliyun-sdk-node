export interface ModifyIntentRequest {
    /**
     * 实例id
     * @example `8fa1953f-4a84-46d8-b80c-8ce9cf684fb3`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `9b70486f-b1c2-429c-8a24-62798015ab1b`
     */
    "ScriptId": string;
    /**
     * 意图id
     * @example `3b9a2b33-50d4-4576-8c68-22498f4bf731`
     */
    "IntentId": string;
    /**
     * 意图名字
     * @example `车险如何办理`
     */
    "IntentName": string;
    /**
     * 意图描述
     * @example `询问车险意图`
     */
    "IntentDescription"?: string;
    /**
     * 用户表述列表
     * @example `["车险如何办理"]`
     */
    "Utterances": string;
    /**
     * 关键字
     * @example `[]`
     */
    "Keywords"?: string;
}
