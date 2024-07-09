export interface RebalanceDBInstanceRequest {
    /**
     * 幂等性校验。更多信息，请参见[如何保证幂等性](~~327176~~)。
     * @example `0c593ea1-3bea-11e9-b96b-88**********`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp***************`
     */
    "DBInstanceId": string;
}
