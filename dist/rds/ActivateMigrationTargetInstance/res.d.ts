export interface ActivateMigrationTargetInstanceResponse {
    /**
     * 目标实例名称。
     * @example `pgm-bp102g323jd4****`
     */
    DBInstanceName: string;
    /**
     * 请求ID。
     * @example `76364A52-E0AB-5CC8-9818-CF1DC482C092`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `440913675`
     */
    TaskId: number;
    /**
     * 自建PostgreSQL数据库的内网IP。
     * @example `172.16.XX.XX`
     */
    SourceIpAddress: string;
    /**
     * 自建PostgreSQL数据库的端口。
     * @example `5432`
     */
    SourcePort: number;
}
