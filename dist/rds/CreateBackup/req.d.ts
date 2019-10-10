interface CreateBackupRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 数据库列表，多个数据库之间用英文逗号（,）隔开。
    * >MySQL进行单库逻辑备份或SQL Server进行单库全量物理备份时可传入该参数。
    * @example `rds_mysql`
    */ "DBName"?: string;
    /**
    * 备份策略，取值：
    * * **db**：单库备份；
    * * **instance**：实例备份。
    * >MySQL进行逻辑备份或SQL Server进行全量物理备份时可传入该参数。
    * @example `db`
    */ "BackupStrategy"?: string;
    /**
    * 备份类型，取值：
    * * **Logical**：逻辑备份；
    * * **Physical**：物理备份；
    * * **Snapshot**：快照备份。
    * 默认值：**Physical**。
    * >* 实例必须存在数据库才能进行逻辑备份。
    * * MariaDB进行快照备份时请填写**Physical**。
    * @example `Physical`
    */ "BackupMethod"?: string;
    /**
    * 备份方式，取值：
    * * **Auto**：自动选择全量备份或增量备份；
    * * **FullBackup**：全量备份。
    * 默认值：**Auto**。
    * >仅SQL Server需要填写此参数，其他引擎不用填写。
    * @example `Auto`
    */ "BackupType"?: string;
}
export { CreateBackupRequest };