export interface ListPipelineTriggersRequest {
    /**
     * 利用实体的labels字段进行筛选。精确匹配labelSelector数组中的所有条件，不同条件之间是“且”的关系
     */
    "labelSelector"?: string[];
    /**
     * 当前页码，默认为1。页码从1开始
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 每页大小，默认为100。取值范围1~100
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 模糊搜索关键词。仅支持实体的name字段，且大小写不敏感
     * @example `demo`
     */
    "keyword"?: string;
}
