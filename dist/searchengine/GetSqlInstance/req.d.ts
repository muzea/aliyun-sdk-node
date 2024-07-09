export interface GetSqlInstanceRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 数据库名称
     * @example `general`
     */
    "database": string;
    /**
     * sql实例id
     * @example `5978`
     */
    "sqlInstanceId": number;
    /**
     * 实例版本
     * @example `1`
     */
    "version"?: number;
}
