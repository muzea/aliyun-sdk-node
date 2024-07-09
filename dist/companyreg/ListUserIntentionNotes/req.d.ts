export interface ListUserIntentionNotesRequest {
    /**
     * 业务类型
     * @example `esp.beian_assist`
     */
    "BizType": string;
    /**
     * 需求ID
     * @example `I20210912102942000001`
     */
    "IntentionBizId": string;
    /**
     * 分页页码。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 分页大小
     * @example `20`
     */
    "PageSize": number;
}
