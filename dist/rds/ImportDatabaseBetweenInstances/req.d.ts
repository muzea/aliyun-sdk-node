interface ImportDatabaseBetweenInstancesRequest {
    "RegionId"?: string;
    /**
    * 目标实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 源实例ID，不能与目标实例相同。
    * @example `rm-g4a1jk8xxxxxxx`
    */ "SourceDBInstanceId": string;
    /**
    * 待迁移实例的数据库信息，格式为JSON串：
    * * 对于MySQL实例，值为数组，MySQL类型要求源数据库和目的数据库名称必须一致。例如：```{“DBNames”:[“mydb”,”mydb2”]}```
    * 表示将两个数据库mydb和mydb2进行数据迁入，源实例和目的实例都要有这两个数据库。
    * * 对于SQL Server实例，值为key-value对，key为原数据库，目标为迁移目标数据库，SQL Server允许源数据库和目标数据库名称可以不一致。例如：```{“DBNames”:{“srcdb”:”destdb”,”srcdb2”:”destmydb2”}}```表示将srcdb迁入至destdb，将srcdb2迁入至destmydb2，但是多个源数据库名称不允许一样，多个目标数据库名称也不允许一样。
    * @example `{“DBNames”:[“mydb”,”mydb2”]}`
    */ "DBInfo": string;
    "OwnerId"?: number;
}
export { ImportDatabaseBetweenInstancesRequest };