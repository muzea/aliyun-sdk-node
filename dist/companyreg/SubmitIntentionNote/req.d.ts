export interface SubmitIntentionNoteRequest {
    /**
     * 需求单号
     * @example `I20210927144823000001`
     */
    "IntentionBizId": string;
    /**
     * 小记内容
     * @example `电话未接通，3天后再次尝试进行沟通`
     */
    "Note": string;
    "BizType"?: string;
}
