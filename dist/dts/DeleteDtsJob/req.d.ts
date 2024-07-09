export interface DeleteDtsJobRequest {
    /**
     * 迁移、同步或订阅任务ID。
     * @example `l3m1213ye7l****`
     */
    "DtsJobId"?: string;
    /**
     * 迁移、同步或订阅实例ID。
     * @example `dtsl3m1213ye7l****`
     */
    "DtsInstanceId"?: string;
    /**
     * 同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > - 默认取值为**Forward**。
     * - 当数据同步实例的拓扑为双向时，才可以传入**Reverse**以释放反向同步链路。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * 数据迁移或同步实例所在地域的id，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * DTS实例的任务类型，取值：
     * - **MIGRATION**：迁移。
     * - **SYNC**：同步。
     * - **SUBSCRIBE**：订阅。
     * @example `MIGRATION`
     */
    "JobType"?: string;
    "ZeroEtlJob"?: boolean;
    "ResourceGroupId"?: string;
}
