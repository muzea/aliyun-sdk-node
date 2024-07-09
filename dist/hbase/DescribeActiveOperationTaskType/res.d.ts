export interface DescribeActiveOperationTaskTypeResponse {
    /**
     * 请求ID。
     * @example `EC7E27FC-58F8-4722-89CF-D1B6B0971956`
     */
    RequestId: string;
    /**
     * 任务列表。
     */
    TypeList: {
        /**
         * 任务类型，返回值：**rds_apsaradb_upgrade**表示小版本升级。
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
