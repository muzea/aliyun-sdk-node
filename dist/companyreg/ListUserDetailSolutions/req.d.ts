export interface ListUserDetailSolutionsRequest {
    /**
     * 需求单号
     * @example `I20211222161651000001`
     */
    "IntentionBizId"?: string;
    /**
     * 分页大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页序号
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 业务类型
     * @example `esp.wangwen`
     */
    "BizType"?: string;
}
