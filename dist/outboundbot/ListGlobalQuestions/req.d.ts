export interface ListGlobalQuestionsRequest {
    /**
     * 实例id
     * @example `361c8a53-0e29-42f3-8aa7-c7752d010399`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `aa279896-64a6-4182-864c-4f2b04ec8d17`
     */
    "ScriptId": string;
    /**
     * 页号
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 个数
     * @example `10`
     */
    "PageSize": number;
}
