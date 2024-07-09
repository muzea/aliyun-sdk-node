export interface ModifyDBDescriptionRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 数据库名称。
     * @example `testdb`
     */
    "DBName": string;
    /**
     * 数据库描述。
     * @example `testdb01`
     */
    "DBDescription": string;
}
