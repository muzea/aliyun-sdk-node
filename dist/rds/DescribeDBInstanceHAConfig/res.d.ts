export interface DescribeDBInstanceHAConfigResponse {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 高可用模式，取值：
     * * **RPO**：数据一致性优先，实例会尽可能保障数据的可靠性，即数据丢失量最少。对于数据一致性要求比较高的用户应该使用RPO模式。
     * * **RTO**：实例可用性优先，实例会尽快恢复服务，即可用时间最长。对于数据库在线时间要求比较高的用户应该使用RTO模式。
     * >仅MySQL实例返回此参数。
     * @example `RPO`
     */
    HAMode: string;
    /**
     * 数据复制方式，取值：
     * * **Sync**：强同步
     * * **Semi-sync**：半同步
     * * **Async**：异步
     * >仅MySQL实例返回此参数。
     * @example `Sync`
     */
    SyncMode: string;
    HostInstanceInfos: {
        /**
         * 主备实例信息列表。
         */
        NodeInfo: {
            /**
             * 备实例收到主实例日志的时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-05-05T15:15:00Z`
             */
            LogSyncTime: string;
            /**
             * 节点类型，取值：
             * * **Master**：主节点
             * * **Slave**：备节点
             * @example `Master`
             */
            NodeType: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-b`
             */
            ZoneId: string;
            /**
             * 同步状态，取值：
             * * **NotAvailable**：不可用，即发生故障。
             * * **Syncing**：同步中，切换可能会发生数据丢失。
             * * **Synchronized**：完成同步。
             * * **NotSupport**：引擎类型或者版本不涉及主备同步。
             * @example `NotAvailable`
             */
            SyncStatus: string;
            /**
             * 备实例执行日志完成数据同步的时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-05-05T15:15:00Z`
             */
            DataSyncTime: string;
            /**
             * 实例的唯一标识。
             * @example `3397027`
             */
            NodeId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
