export interface DescribeCacheAnalysisReportRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 需要查询的日期，每次可查询一天的离线全量Key分析结果，格式为<i>yyyy-MM-dd</i>Z（UTC时间）。
     * @example `2019-08-05Z`
     */
    "Date": string;
    /**
     * 分析类型，取值固定为**BigKey**。
     * @example `BigKey`
     */
    "AnalysisType": string;
    /**
     * 每页返回的记录数，取值：**30**、**50**或**100**。
     * > 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 需要返回的页码。
     * > 如果该值大于返回结果的最大页数，则返回的大key结果为空。
     * @example `1`
     */
    "PageNumbers"?: number;
    /**
     * 集群版Redis实例的子节点ID。
     * > 如果不设置将返回所有子节点的分析结果。
     * @example `r-bp1zxszhcgatnx****-db-0`
     */
    "NodeId"?: string;
}
