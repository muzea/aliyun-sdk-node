export interface UpgradeKernelVersionRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~612241~~)接口查询目标地域中所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-uf6g8w25jacm7****`
     */
    "DBClusterId": string;
    /**
     * 需要升级到的目标内核版本。
     * > 您可以调用**DescribeKernelVersion**接口查询集群支持的内核版本列表。
     * @example `3.1.9`
     */
    "DBVersion"?: string;
    /**
     * 执行时间，取值：
     * * **0**：立即执行，默认值。
     * * **1**：在可维护时间段执行。
     * > 您可以调用[ModifyDBClusterMaintainTime](~~612236~~)修改集群的可维护时间段。
     * @example `0`
     */
    "SwitchMode"?: number;
}
