interface CreateBackupRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `d-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 实例的备份方式，取值：
    * - **Logical**：逻辑备份。
    * - **Physical**：物理备份，默认为物理备份。
    * >仅副本集和分片集群实例支持选择备份方式。单节点实例无需传入本参数，固定为快照备份。
    * @example `Logical`
    */ "BackupMethod"?: string;
}
export { CreateBackupRequest };