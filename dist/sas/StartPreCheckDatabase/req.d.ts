export interface StartPreCheckDatabaseRequest {
    /**
     * 数据库类型，取值如下：
     * - **MYSQL**
     * - **MSSQL**
     * - **Oracle**
     * @example `MYSQL`
     */
    "DatabaseType": string;
    /**
     * 数据库服务器所在的地域ID。
     * @example `cn-hongkong`
     */
    "UniRegionId": string;
    /**
     * 服务器数据库备份客户端唯一标识。
     * >调用[DescribeUniBackupDatabase](~~DescribeUniBackupDatabase~~)接口可以获取该参数。
     * @example `ec1c0ba21d2911ed800000163e0e****`
     */
    "InstanceUuid": string;
}
