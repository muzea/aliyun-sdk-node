export interface ModifyDatabaseDescriptionRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `pxc-hzjasd****`
     */
    "DBInstanceName": string;
    /**
     * 数据库名。
     * @example `testDB`
     */
    "DbName": string;
    /**
     * 数据库备注描述。
     * @example `测试数据库`
     */
    "DbDescription": string;
}
