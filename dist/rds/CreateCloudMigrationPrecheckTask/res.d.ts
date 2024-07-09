export interface CreateCloudMigrationPrecheckTaskResponse {
    /**
     * 目标实例名称。
     * @example `pgm-bp102g323jd4****`
     */
    DBInstanceName: string;
    /**
     * 请求ID
     * @example `60F9A12A-16B8-4728-B099-4CA38D32C31C`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `439946016`
     */
    TaskId: number;
    /**
     * 任务名称。
     * @example `slf7w7wj3g`
     */
    TaskName: string;
}
