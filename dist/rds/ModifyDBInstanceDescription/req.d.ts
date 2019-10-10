interface ModifyDBInstanceDescriptionRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * RDS实例描述。
    * >长度为2-64个字符。
    * @example `阿里云测试环境实例`
    */ "DBInstanceDescription": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
}
export { ModifyDBInstanceDescriptionRequest };