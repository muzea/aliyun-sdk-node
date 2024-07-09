export interface ListUserSolutionsRequest {
    /**
     * 需求ID
     * @example `I20210924151843000001`
     */
    "IntentionBizId"?: string;
    /**
     * 每页显示条数
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页序号
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 状态列表
     */
    "ExistStatus"?: number[];
    "BizType"?: string;
}
