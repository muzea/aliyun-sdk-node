export interface ListUserIntentionsRequest {
    /**
     * 业务类型
     * @example `esp.companyreg_cloud`
     */
    "BizType"?: string;
    /**
     * 状态
     * @example `37`
     */
    "Status"?: number;
    /**
     * 分页属性，每页显示条数
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页序号
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 排序字段
     * @example `UpdateTime`
     */
    "SortFiled"?: string;
    /**
     * 排序方向：-asc：升序-desc：降序
     * @example `desc`
     */
    "SortOrder"?: string;
    /**
     * 需求BizId
     * @example `I20210917170147000001`
     */
    "IntentionBizId"?: string;
    /**
     * 区域
     * @example `长沙市`
     */
    "Area"?: string;
    /**
     * 业务类型
     * @example `esp.bookkeeping,esp.bookkeeping_cloud`
     */
    "BizTypes"?: string;
    "WithExtInfo"?: boolean;
}
