export interface MigrateDBInstanceResponse {
    /**
     * 请求ID。
     * @example `498AE8CA-8C81-4A01-AF37-2B902014ED30`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `108246861`
     */
    TaskId: number;
    /**
     * 迁移排队序号。当序号为0时，就会进行迁移切换。
     * @example `2245016`
     */
    MigrationId: number;
}
