export interface DescribeRestoreSummaryResponse {
    /**
     * 页面大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求Id。
     * @example `AE639ED7-F0F3-4A71-911E-CF8EC088816E`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `1`
     */
    Total: number;
    /**
     * 是否有下一页，该参数现未使用。
     * @example `0`
     */
    HasMoreRestoreRecord: number;
    Rescords: {
        /**
         * 恢复列表详情。
         */
        Rescord: {
            /**
             * 状态。
             * @example `SUCCEEDED`
             */
            Status: string;
            /**
             * 完成时间。
             * @example `2020-11-05T06:45:51Z`
             */
            FinishTime: string;
            /**
             * schema恢复进度。
             * @example `1/1`
             */
            SchemaProcess: string;
            /**
             * BulkLoad进度。
             * @example `1/1`
             */
            BulkLoadProcess: string;
            /**
             * 记录Id。
             * @example `20201105144514`
             */
            RecordId: string;
            /**
             * 创建时间。
             * @example `2020-11-05T06:45:14Z`
             */
            CreateTime: string;
            /**
             * 增量数据恢复进度。
             * @example `0/0`
             */
            LogProcess: string;
            /**
             * 全量数据恢复进度。
             * @example `1/1`
             */
            HfileRestoreProcess: string;
        }[];
    };
}
