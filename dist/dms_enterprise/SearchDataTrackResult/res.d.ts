export interface SearchDataTrackResultResponse {
    /**
     * 请求ID。
     * @example `0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 追踪日志解析结果。
     */
    TrackResult: {
        /**
         * 追踪总数。
         * @example `109`
         */
        TotalCount: number;
        /**
         * 追踪日志事件详情列表。
         */
        EventList: {
            /**
             * 变更后的数据列表。
             */
            DataAfter: string[];
            /**
             * 变更前的数据列表。
             */
            DataBefore: string[];
            /**
             * 日志文件事件Byte字节长度。
             * @example `4324`
             */
            EventLength: number;
            /**
             * 日志文件事件时间。
             * @example `2023-04-23 10:25:47`
             */
            EventTimestamp: string;
            /**
             * 事件类型。取值如下：
             * - **WRITE_ROWS**：代表INSERT操作。
             * - **UPDATE_ROWS**：代表UPDATE操作。
             * - **DELETE_ROWS**：代表DELETE操作。
             * - **EXT_WRITE_ROWS**：同WRITE_ROWS，代表INSERT操作。
             * - **EXT_UPDATE_ROWS**：同UPDATE_ROWS，代表UPDATE操作。
             * - **EXT_DELETE_ROWS**：同DELETE_ROWS，代表DELETE操作。
             * @example `UPDATE_ROWS`
             */
            EventType: string;
            /**
             * 事件ID。
             * @example `1`
             */
            EventId: number;
            /**
             * 回滚SQL。
             * @example `-- Timestamp:2023-04-23 10:25:47 #1\r\nUPDATE `dc_test`.`tb_chunk_dml` SET `id`=1 , `gmt_create`='2021-09-30T00:00:00' , `content`='2023-03-30 14:51:50' , `c1`='2023-04-17 13:42:03' , `c_id`=1 , `c13425`='b\\'' , `c432532535`= null , `c1432`= null , `c143243253`= null , `c1432535`= null , `c43125325`= null , `c3425325`= null WHERE  (`id`=1)"`
             */
            RollSQL: string;
        }[];
        /**
         * 追踪的表元数据信息列表。
         */
        TableInfoList: {
            /**
             * 数据库名。
             * @example `prod_eb_vas`
             */
            SchemaName: string;
            /**
             * 表名。
             * @example `import_table_test1`
             */
            TableName: string;
            /**
             * 字段信息列表。
             */
            Columns: {
                /**
                 * 字段名。
                 * @example `basic_platform`
                 */
                ColumnName: string;
                /**
                 * 字段的位置。
                 * @example `1`
                 */
                ColumnPosition: number;
                /**
                 * 字段的数据类型。例如：BIGINT、INT、VARCHAR。
                 * @example `BIGINT`
                 */
                ColumnType: string;
                /**
                 * 字段是否为虚拟列。取值为：
                 * - **true**
                 * - **false**
                 * @example `true`
                 */
                Fictive: boolean;
            }[];
            /**
             * 字段描述。
             * @example `auto-description`
             */
            Description: string;
        }[];
    };
}
