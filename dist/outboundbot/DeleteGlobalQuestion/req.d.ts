export interface DeleteGlobalQuestionRequest {
    /**
     * 实例id
     * @example `361c8a53-0e29-42f3-8aa7-c7752d010399`
     */
    "InstanceId": string;
    /**
     * 全局话术所在的话术id
     * @example `aa279896-64a6-4182-864c-4f2b04ec8d17`
     */
    "ScriptId": string;
    /**
     * 全局话术uuid
     * @example `35f1361e-4377-494c-9f10-4274bda0317f`
     */
    "GlobalQuestionId": string;
}
