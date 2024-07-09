export interface DescribeDBInstanceDiagnosisSummaryRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 每页记录数，取值说明：
     * - **30**
     * - **50**
     * - **100**
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于0且不超过Integer的最大值，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 节点运行状态，取值如下：
     * - **UP**：节点运行中。
     * - **DOWN**：节点故障。
     * 如果不填，则返回所有运行状态的信息。
     * @example `UP`
     */
    "StartStatus"?: string;
    /**
     * 节点同步状态，取值如下：
     * - **synced**：已同步。
     * - **notSyncing**：未同步。
     * 如果不填，则返回所有同步状态的信息。
     * @example `synced`
     */
    "SyncMode"?: string;
    /**
     * 节点的角色状态，即是否发生主备切换，取值如下：
     * - **normal**：角色状态正常，即未发生主备切换。
     * - **reverse**：角色反转，即发生了主备切换。
     * @example `normal`
     */
    "RolePreferd"?: string;
}
