export interface DeleteDBInstancePlanRequest {
    /**
     * 计划ID。
     * > 您可以调用[DescribeDBInstancePlans](~~449398~~)接口查看计划的详细信息，包括计划ID。
     * @example `1234`
     */
    "PlanId": string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
}
