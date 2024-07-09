export interface ModifyDBInstanceDescriptionRequest {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * RDS实例名称。
     * >长度为2-64个字符。
     * @example `testInstance`
     */
    "DBInstanceDescription": string;
}
