interface UpgradeDBInstanceEngineVersionRequest {
    "RegionId"?: string;
    /**
    * 升级的目标数据库版本，取值：**3.4**、**4.0**。
    * > 升级的目标数据库版本必须大于实例当前的数据库版本。
    * @example `4.0`
    */ "EngineVersion": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
}
export { UpgradeDBInstanceEngineVersionRequest };