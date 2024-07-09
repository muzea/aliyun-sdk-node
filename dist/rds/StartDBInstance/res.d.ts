export interface StartDBInstanceResponse {
    /**
     * 请求ID。
     * @example `A417FB41-A3D9-464E-AD0A-C7FE05C72E98`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `238028563`
     */
    TaskId: number;
    /**
     * 该参数仅支持专属集群实例，迁移任务ID。
     * @example `740`
     */
    MigrationId: number;
}
