export interface QueryPreCheckDatabaseRequest {
    /**
     * 数据库预检任务ID。
     * > 您可以调用[StartPreCheckDatabase](~~StartPreCheckDatabase~~)接口获取该参数。
     * @example `t-000bc9nqwxsbyvod****`
     */
    "TaskId"?: string;
    /**
     * 服务器数据库备份客户端唯一标识。
     * >调用[DescribeUniBackupDatabase](~~DescribeUniBackupDatabase~~)接口可以获取该参数。
     * @example `ebc895506c6911ed800000163e0e****`
     */
    "InstanceUuid"?: string;
    /**
     * 数据库服务器所在的地域ID。
     * @example `cn-hangzhou`
     */
    "UniRegionId": string;
}
