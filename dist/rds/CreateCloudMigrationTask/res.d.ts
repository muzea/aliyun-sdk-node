export interface CreateCloudMigrationTaskResponse {
    /**
     * 目标实例名称。
     * @example `pgm-bp102g323jd4****`
     */
    DBInstanceName: string;
    /**
     * 请求ID。
     * @example `8B993DA9-5272-5414-94E3-4CA8BA0146C2`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `440437220`
     */
    TaskId: number;
    /**
     * 任务名称。
     * @example `362c6c7a-4d20-4eac-898c-1495ceab374c`
     */
    TaskName: string;
}
