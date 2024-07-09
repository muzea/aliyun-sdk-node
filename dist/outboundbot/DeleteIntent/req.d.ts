export interface DeleteIntentRequest {
    /**
     * 实例id
     * @example `361c8a53-0e29-42f3-8aa7-c7752d010399`
     */
    "InstanceId": string;
    /**
     * 意图所在的话术id
     * @example `aa279896-64a6-4182-864c-4f2b04ec8d17`
     */
    "ScriptId": string;
    /**
     *  被删除的意图id
     * @example `c21fb0ec-fb5e-476f-a6bf-81a892739c8d`
     */
    "IntentId": string;
}
