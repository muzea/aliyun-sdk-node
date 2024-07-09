export interface ModifySQAConfigRequest {
    /**
     * 资源组ID。
     * @example `rg-4690g37929****`
     */
    "ResourceGroupId"?: string;
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查询目标地域中所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-8vb369k7zxdt10tz0`
     */
    "DBClusterId": string;
    /**
     * 资源组名称。
     * > 您可以调用[DescribeDBResourceGroup](~~459446~~)接口查看指定集群的资源组名称。
     * @example `test`
     */
    "GroupName": string;
    /**
     * 是否启用小查询加速。
     * @example `off`
     */
    "SQAStatus": string;
}
