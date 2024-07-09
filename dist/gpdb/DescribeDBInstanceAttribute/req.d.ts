export interface DescribeDBInstanceAttributeRequest {
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-bp13ue79qk8y1****`
     */
    "DBInstanceId": string;
}
