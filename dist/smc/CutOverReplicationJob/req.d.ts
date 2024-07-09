export interface CutOverReplicationJobRequest {
    /**
     * 自动增量迁移任务ID。
     * @example `j-bp1fnx5y3djc4cop****`
     */
    "JobId": string;
    /**
     * 是否需要进行最后一次全量数据迁移。取值范围：
     * - true：需要进行最后一次全量数据迁移。
     * - false：不需要进行最后一次全量数据迁移。
     * 默认值：false。
     * @example `false`
     */
    "SyncData"?: boolean;
}
