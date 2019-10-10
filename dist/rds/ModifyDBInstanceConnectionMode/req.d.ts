interface ModifyDBInstanceConnectionModeRequest {
    "RegionId"?: string;
    /**
    * 实例名。
    * @example `rm-uf6wjk5xxxxxx`
    */ "DBInstanceId": string;
    /**
    * Performance为标准访问模式；Safe为高安全访问模式。
    * @example `Performance`
    */ "ConnectionMode": string;
    "OwnerId"?: number;
}
export { ModifyDBInstanceConnectionModeRequest };