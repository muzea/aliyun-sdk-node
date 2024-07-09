export interface DescribeActiveOperationTaskTypeResponse {
    /**
     * 请求ID。
     * @example `C7EE83BF-7BA8-5087-BAC9-ED85ED54****`
     */
    RequestId: string;
    /**
     * 任务列表。
     */
    TypeList: {
        /**
         * 任务的类型。返回值：
         * - **rds_apsaradb_transfer**：实例迁移。
         * - **rds_apsaradb_upgrade**：小版本升级。
         * @example `rds_apsaradb_upgrade`
         */
        TaskType: string;
        /**
         * 任务类型（英文）。
         * @example `rds_apsaradb_upgrade`
         */
        TaskTypeInfoEn: string;
        /**
         * 任务类型（中文）。
         * @example `小版本升级`
         */
        TaskTypeInfoZh: string;
        /**
         * 待处理的任务数量。
         * @example `1`
         */
        Count: number;
    }[];
}
