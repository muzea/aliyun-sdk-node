export interface DescribeBackupPlanConfigResponse {
    /**
     * 请求Id。
     * @example `33A23201-6038-4A6A-B76A-61047EA04E6A`
     */
    RequestId: string;
    /**
     * 全量备份保留个数。
     * @example `3`
     */
    MinHFileBackupCount: number;
    /**
     * 下一次全量备份日期。
     * @example `2020-11-09T18:00:00Z`
     */
    NextFullBackupDate: string;
    /**
     * 全量备份周期。
     * @example `7`
     */
    FullBackupCycle: number;
    Tables: {
        Table: string[];
    };
}
