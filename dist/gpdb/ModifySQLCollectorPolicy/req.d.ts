export interface ModifySQLCollectorPolicyRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * SQL采集状态。
     * - Enable：SQL采集开启。
     * - Disabled：SQL采集关闭。
     * @example `Enable`
     */
    "SQLCollectorStatus": string;
}
