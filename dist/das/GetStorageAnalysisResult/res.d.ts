export interface GetStorageAnalysisResultResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回的数据。
     */
    Data: {
        /**
         * 任务ID。
         * @example `910f83f4b96df0524ddc5749f615****`
         */
        TaskId: string;
        /**
         * 任务是否结束：
         * - **true**：任务结束。
         * - **false**：任务未结束。
         * @example `true`
         */
        TaskFinish: boolean;
        /**
         * 任务是否成功：
         * - **true**：执行成功。
         * - **false**：执行失败。
         * > 当任务结束时才返回该字段。
         * @example `true`
         */
        TaskSuccess: boolean;
        /**
         * 空间分析任务的状态：
         * - **INIT**：初始化。
         * - **PENDING**：等待执行。
         * - **RECEIVED**：任务已选择。
         * - **RUNNING**：任务执行中。
         * - **RETRY**：重试任务。
         * - **SUCCESS**：任务成功。
         * - **FAILURE**：任务失败。
         * @example `SUCCESS`
         */
        TaskState: string;
        /**
         * 任务进度，取值为0~100的整数。
         * > 例如取值为100时，表示任务进度100%。
         * @example `100`
         */
        TaskProgress: number;
        /**
         * 空间分析任务需要分析的数据库数量。
         * @example `32`
         */
        TotalDbCount: number;
        /**
         * 已分析结束的数据库数量。
         * @example `2`
         */
        AnalyzedDbCount: number;
        /**
         * 空间分析详情。
         */
        StorageAnalysisResult: {
            /**
             * 实例总空间大小，单位为Byte。
             * > 当前仅支持RDS MySQL。
             * @example `214748364800`
             */
            TotalStorageSize: number;
            /**
             * 已使用的空间，单位为Byte。
             * @example `68345135104`
             */
            TotalUsedStorageSize: number;
            /**
             * 剩余可用空间，单位为Byte。
             * > 当前仅支持RDS MySQL。
             * @example `146403229696`
             */
            TotalFreeStorageSize: number;
            /**
             * 近一周空间日均增长量估算值，单位为Byte。
             * @example `0`
             */
            DailyIncrement: number;
            /**
             * 剩余空间可使用天数估算值。
             * @example `99`
             */
            EstimateAvailableDays: number;
            /**
             * 数据库和表空间分析是否成功。
             * - **true**：成功。
             * - **false**：失败。
             * @example `true`
             */
            AnalysisSuccess: boolean;
            /**
             * 数据库和表空间分析任务失败类型：
             * - **DB_OR_TABLE_NOT_EXIST**：指定的数据库或表不存在。
             * - **DB_NOT_EXIST**：指定的数据库不存在。
             * @example `DB_NOT_EXIST`
             */
            AnalysisErrorType: string;
            /**
             * 根据DAS默认规则生成的待优化项列表。用户也可根据自身业务情况忽略该列表中的内容，然后根据接口返回的其他基础数据自定义规则生成待优化项列表。
             */
            NeedOptimizeItemList: {
                /**
                 * 数据库名。
                 * @example `testdb01`
                 */
                DbName: string;
                /**
                 * 表名。
                 * @example `test_table`
                 */
                TableName: string;
                /**
                 * 待优化项：
                 * - **NEED_ANALYZE_TABLE**：`information_schema.tables`中该表空间统计数据和物理文件大小差值超过50 GB。仅适用于RDS MySQL和PolarDB MySQL版。
                 * - **NEED_OPTIMIZE_TABLE**：表的碎片空间大于6 GB，并且碎片率大于30%。表的碎片率计算方式：
                 *   - RDS MySQL和PolarDB MySQL版为：`DataFree/(DataSize+IndexSize+DataFree)`，本接口中即`DataFree/PhyTotalSize`。
                 *   -  MongoDB为：`FragmentSize/PhyTotalSize`。
                 * - **TABLE_ENGINE**：表使用的存储引擎不是InnoDB或者XEngine。仅适用于RDS MySQL和PolarDB MySQL版。
                 * - **AUTO_INCREMENT_ID_BE_TO_RUN_OUT**：表自增ID使用率超过80%。仅适用于RDS MySQL和PolarDB MySQL版。
                 * - **DUPLICATE_INDEX**：索引冗余或者重复。仅适用于RDS MySQL和PolarDB MySQL版。
                 * - **TABLE_SIZE**：单表空间大于50 GB。仅适用于RDS MySQL和PolarDB MySQL版。
                 * - **TABLE_ROWS_AND_AVG_ROW_LENGTH**：单表行数大于500万，且平均行长大于10 KB。仅适用于RDS MySQL和PolarDB MySQL版。
                 * - **TOTAL_DATA_FREE**：实例可回收空间大于60 GB，且总碎片率大于5%。
                 * - **STORAGE_USED_PERCENT**：实例空间使用率大于90%。
                 * @example `NEED_OPTIMIZE_TABLE`
                 */
                OptimizeItemName: string;
                /**
                 * 优化建议：
                 * - **NEED_ANALYZE_TABLE**：如有需要可在业务低峰时期对相关的表执行`ANALYZE TABLE`。仅适用于RDS MySQL和PolarDB MySQL版。
                 * - **NEED_OPTIMIZE_TABLE**：如有需要可在业务低峰时期进行表空间碎片回收。
                 * - **CHANGE_TABLE_ENGINE_IF_NECESSARY**：如果有需要可以在评估风险后更改表的存储引擎类型。仅适用于RDS MySQL和PolarDB MySQL版。
                 * - **AUTO_INCREMENT_ID_BE_TO_RUN_OUT**：注意自增ID使用情况。仅适用于RDS MySQL和PolarDB MySQL版。
                 * - **DUPLICATE_INDEX**：建议优化精简表上的索引。仅适用于RDS MySQL和PolarDB MySQL版。
                 * - **TABLE_SIZE**：注意表大小。仅适用于RDS MySQL和PolarDB MySQL版。
                 * - **TABLE_ROWS_AND_AVG_ROW_LENGTH**：注意表行数以及平均行长。仅适用于RDS MySQL和PolarDB MySQL版。
                 * - **STORAGE_USED_PERCENT**：注意空间使用情况，避免实例写满后锁定。
                 * @example `NEED_OPTIMIZE_TABLE`
                 */
                OptimizeAdvice: string;
                /**
                 * 待优化项关联数据，以JSON格式返回。
                 * @example `{
                    "autoIncrementCurrentValue": 2147483647,
                    "autoIncrementRatio": 1,
                    "dbName": "testdb01",
                    "maximumValue": 2147483647,
                    "columnName": "id",
                    "tableName": "test_table"
                }`
                 */
                AssociatedData: string;
            }[];
            /**
             * 表空间数据列表。
             */
            TableStats: {
                /**
                 * 数据库名。
                 * @example `testdb01`
                 */
                DbName: string;
                /**
                 * 表名。
                 * @example `test_table`
                 */
                TableName: string;
                /**
                 * 表类型。
                 * > 该参数适用于RDS MySQL和PolarDB MySQL版。
                 * @example `BASE TABLE`
                 */
                TableType: string;
                /**
                 * 表使用的存储引擎类型。
                 * > 该参数适用于RDS MySQL和PolarDB MySQL版。
                 * @example `InnoDB`
                 */
                Engine: string;
                /**
                 * 表物理文件大小，单位为Byte。
                 * > 该参数适用于RDS MySQL和PolarDB MySQL版。部分实例因部署形态的原因不支持获取该数据。
                 * @example `3057655808`
                 */
                PhysicalFileSize: number;
                /**
                 * 表空间大小，单位为Byte。
                 * > 对于RDS MySQL和PolarDB MySQL版，取值为**DataSize**、**IndexSize**、**DataFree**之和；对于MongoDB，取值为**DataSize**、**IndexSize**之和。
                 * @example `3012493312`
                 */
                PhyTotalSize: number;
                /**
                 * - 对于RDS MySQL和PolarDB MySQL版，该参数是表数据和索引占用空间大小，单位为Byte。取值为**DataSize**、**IndexSize**之和。
                 * - 对于MongoDB，该参数是Block Manager实际分配的空间大小，单位为Byte。MongoDB实例压缩率计算方式为：`TotalSize/DataSize`。
                 * @example `3005153280`
                 */
                TotalSize: number;
                /**
                 * 索引占用的空间大小，单位为Byte。
                 * @example `1022296064`
                 */
                IndexSize: number;
                /**
                 * - 对于RDS MySQL和PolarDB MySQL版，该参数是数据占用的空间大小，单位为Byte。
                 * - 对于MongoDB，该参数是未压缩数据的大小，即数据量，单位为Byte。
                 * @example `1982857216`
                 */
                DataSize: number;
                /**
                 * 碎片空间大小，单位为Byte。
                 * > 该参数适用于RDS MySQL和PolarDB MySQL版。表碎片率计算方式一般为：`DataFree/(DataSize+IndexSize+DataFree)`，本接口中即`DataFree/PhyTotalSize`。
                 * @example `7340032`
                 */
                DataFree: number;
                /**
                 * 表行数。
                 * @example `12794732`
                 */
                TableRows: number;
                /**
                 * 平均行长，单位为Byte。
                 * @example `154`
                 */
                AvgRowLength: number;
                /**
                 * 可回收空间大小（碎片空间大小），单位为Byte。
                 * > 该参数仅适用于MongoDB实例。表碎片率计算方式为：`FragmentSize/PhyTotalSize`。
                 * @example `362221568`
                 */
                FragmentSize: number;
            }[];
        };
    };
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
