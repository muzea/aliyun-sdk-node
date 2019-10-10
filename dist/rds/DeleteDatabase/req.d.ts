interface DeleteDatabaseRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 数据库名称。
    * @example `testdb01`
    */ "DBName": string;
    "OwnerId"?: number;
}
export { DeleteDatabaseRequest };