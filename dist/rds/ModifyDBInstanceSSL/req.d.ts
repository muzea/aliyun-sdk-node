interface ModifyDBInstanceSSLRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 需要创建或更新SSL证书的连接地址。
    * >每个实例只能有一个连接地址受SSL保护。
    * @example `rm-uf6wjk5xxxxx.mysql.rds.aliyuncs.com`
    */ "ConnectionString": string;
    "OwnerId"?: number;
    "SSLEnabled"?: number;
}
export { ModifyDBInstanceSSLRequest };