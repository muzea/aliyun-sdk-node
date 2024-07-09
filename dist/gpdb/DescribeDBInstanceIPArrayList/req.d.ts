export interface DescribeDBInstanceIPArrayListRequest {
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp***************`
     */
    "DBInstanceId": string;
    /**
     * 需要查询的IP白名单分组的名称。
     * > 如果不传入该参数，默认返回所有IP白名单分组。
     * @example `Default`
     */
    "DBInstanceIPArrayName"?: string;
}
