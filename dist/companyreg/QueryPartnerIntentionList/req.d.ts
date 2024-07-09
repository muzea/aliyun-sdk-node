export interface QueryPartnerIntentionListRequest {
    /**
     * 业务id
     * @example `I20211117092704000001`
     */
    "BizId"?: string;
    /**
     * 页码
     * @example `10`
     */
    "PageNum"?: number;
    /**
     * 每页显示条数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 业务类型
     * @example `esp.wangwen`
     */
    "BizType"?: string;
}
