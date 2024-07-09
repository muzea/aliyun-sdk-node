export interface DescibeImportsFromDatabaseResponse {
    /**
     * 请求ID。
     * @example `B000AA91-393D-46F9-8D9B-098E28931A3A`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页记录数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 记录总数。
     * @example `1`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 迁移状态列表。
         */
        ImportResultFromDB: {
            /**
             * 增量同步时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2023-06-11T15:00Z`
             */
            IncrementalImportingTime: string;
            /**
             * 迁移任务的ID。
             * @example `123`
             */
            ImportId: number;
            /**
             * 迁移任务状态。取值：
             * * **NotStart**：未开始
             * * **FullExporting**：全量导出中
             * * **FullImporting**：全量导入中
             * * **Success**：成功
             * * **Failed**：失败
             * * **Canceled**：已取消
             * * **Canceling**：正在取消
             * * **IncrementalWaiting**：增量同步等待
             * * **IncrementalImporting**：增量同步中
             * * **StopSyncing**：停止同步
             * @example `NotStart`
             */
            ImportDataStatus: string;
            /**
             * 迁移任务类型。取值：
             * * **Full**：全量迁移
             * * **Incremental**：增量迁移
             * @example `Full`
             */
            ImportDataType: string;
            /**
             * 迁移任务描述。
             * @example `描述信息。`
             */
            ImportDataStatusDescription: string;
        }[];
    };
}
