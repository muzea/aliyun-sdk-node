export interface ListIntentionNoteRequest {
    /**
     * 查询的起始时间
     * @example `1640456765459`
     */
    "BeginTime"?: number;
    /**
     * 结束时间
     * @example `1631635199999`
     */
    "EndTime"?: number;
    /**
     * 每页显示条数
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 需求ID
     * @example `I20210420142416000001`
     */
    "IntentionBizId": string;
    "BizType"?: string;
}
