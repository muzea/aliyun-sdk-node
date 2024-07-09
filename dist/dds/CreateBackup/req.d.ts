export interface CreateBackupRequest {
    /**
     * 实例ID。
     * @example `d-bp2235****`
     */
    "DBInstanceId": string;
    /**
     * 实例的备份方式，取值：
     * - **Snapshot**：快照备份。
     * - **Logical**：逻辑备份。
     * - **Physical**（默认值）：物理备份。
     * > - 云盘版实例仅支持快照备份。
     * > - 仅副本集和分片集群实例支持选择备份方式。单节点实例无需传入本参数，固定为快照备份。
     * @example `Logical`
     */
    "BackupMethod"?: string;
}
