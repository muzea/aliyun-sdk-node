export interface DescribeSQAConfigResponse {
    /**
     * 请求ID。
     * @example `CBE843D8-964D-5EA3-9D31-822125611B6E`
     */
    RequestId: string;
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查询目标地域下AnalyticDB MySQL数仓版（3.0）集群ID。
     * @example `am-8vbyw9awuj141haf9`
     */
    DBClusterId: string;
    /**
     * 资源组名称。
     * @example `test_group`
     */
    GroupName: string;
    /**
     * 是否启用小查询加速。
     * @example `off`
     */
    SQAStatus: string;
}
