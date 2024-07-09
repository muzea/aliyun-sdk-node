export interface DescribeResubmitConfigRequest {
    /**
     * 资源组ID。
     * @example `rg-4690g37929XXXX`
     */
    "ResourceGroupId"?: string;
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-8vbyw9awuj141haf9`
     */
    "DBClusterId": string;
    /**
     * 资源组名称。
     * > 您可以调用[DescribeDBResourceGroup](~~459446~~)接口查看指定集群的资源组名称。
     * @example `test_group`
     */
    "GroupName": string;
}
