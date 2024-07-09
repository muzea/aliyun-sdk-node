export interface ModifyDBClusterRequest {
    /**
     * 集群ID。
     * >您可以调用DescribeDBClusters接口查看目标地域下所有的集群信息，包括集群ID。
     * @example `pc-*************`
     */
    "DBClusterId": string;
    /**
     * 集群的跨可用区自动切换模式，取值范围如下：
     * - **ON**：开启跨可用区自动切换。
     * - **OFF**：关闭跨可用区自动切换。
     * - **0**：开启客户演练。
     * @example `ON`
     */
    "StandbyHAMode"?: string;
    /**
     * 集群的跨可用区数据复制方式，取值范围如下：
     * - **AsyncSync**：异步。
     * - **SemiSync**：半同步。
     * @example `AsynSync`
     */
    "DataSyncMode"?: string;
    /**
     * 集群的故障演练模拟场景。取值为0，表示模拟主可用区故障。
     * > - 当`StandbyHAMode`设置为0时，该参数才生效。
     * > - **模拟主可用区故障**场景中，主可用区所有的计算节点均不可用，该场景的容灾切换是有损的。
     * @example `0`
     */
    "FaultSimulateMode"?: string;
    /**
     * 标准版集群是否开启存储自动扩容。取值范围如下：
     * - Enable：开启存储自动扩容。
     * - Disable：关闭存储自动扩容。
     * @example `Enable`
     */
    "StorageAutoScale"?: string;
    /**
     * 开启存储压缩。取值为**ON**。
     * @example `ON`
     */
    "CompressStorage"?: string;
    /**
     * 标准版集群存储自动扩容上限，单位：GB。
     * > 取值最大为32000。
     * @example `800`
     */
    "StorageUpperBound"?: number;
    "DBNodeCrashList"?: string;
    "FaultInjectionType"?: string;
}
