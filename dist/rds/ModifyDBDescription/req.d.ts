interface ModifyDBDescriptionRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 数据库名称。
    * @example `testDB01`
    */ "DBName": string;
    /**
    * 数据库描述。
    * @example `测试数据库A`
    */ "DBDescription": string;
    "OwnerId"?: number;
}
export { ModifyDBDescriptionRequest };