export interface GetDownloadFileResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `no authorization.`
     */
    ErrorMessage: string;
    /**
     * 请求ID，阿里云为该请求生成的唯一标识符。
     * @example `BB71E443-4447-4024-A000-EDE09934****`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据。
     */
    Data: {
        /**
         * 下载任务的执行状态。
         * - **-1**：初始化中。
         * - **0**：运行中。
         * - **1**：执行成功。
         * - **2**：执行失败。
         * - **3**：已提交，等待中。
         * - **4**：已取消。
         * @example `1`
         */
        Status: number;
        /**
         * 下载任务的ID。
         * @example `62d949808bc742187xxxxxx`
         */
        LongJobId: string;
        /**
         * 下载任务的开始时间。
         * @example `1658406464534`
         */
        BeginTime: number;
        /**
         * 是否是异步查询。
         * - **true**：是异步查询。
         * - **false**：不是异步查询，是同步查询。
         * @example `true`
         */
        AsyncExecute: boolean;
        /**
         * 总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 下载任务的结束时间。
         * @example `1658406465000`
         */
        EndTime: number;
        /**
         * 预览大小。
         * @example `100`
         */
        PreviewSize: number;
        /**
         * 分页页码。
         * @example `1`
         */
        PageNo: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * OSS文件的下载地址。（有效期5分钟）
         * @example `https://xxxxx-data-download-sh.oss-cn-shanghai.aliyuncs.com/data/download/6B761BxxxxxxxxAAA0BF03D32C80E/62da39b9xxxxxx5a7b953376/download_file_name.csv?Expires=1658469132&amp;OSSAccessKeyId=xxxxxxxxx&amp;Signature=rRL%xxxxxxx%3D`
         */
        CsvUrl: string;
        /**
         * CSV文件名称。
         * @example `test_download_flie`
         */
        CsvFileName: string;
        /**
         * 下载对象ID。
         * @example `xxxxxx`
         */
        DatasetId: string;
        /**
         * 查询执行结果。
         * @example `{"a":123}`
         */
        ResultDataInString: string;
        /**
         * 字段信息。
         */
        Header: {
            /**
             * 类型。
             * @example `date`
             */
            TypeClass: string;
            /**
             * 字段名。
             * @example `user_name`
             */
            FieldName: string;
            /**
             * 地理信息。
             * @example `{xxx:xxxx}`
             */
            GeoClass: string;
            /**
             * 字段数据类型。
             * @example `INTEGER`
             */
            FieldType: string;
            /**
             * 时间维度。
             * @example `HOUR/DAY/MONTH`
             */
            TimeClass: string;
            /**
             * 调度类型。
             * @example `DAY`
             */
            DimDateClass: string;
            /**
             * 字段别名。
             * @example `user_name_alias`
             */
            Alias: string;
        }[];
        /**
         * 执行结果。
         */
        Result: any[];
        /**
         * 查询请求信息。
         */
        QuerySetting: {
            /**
             * 查询字段列表。
             */
            SelectedHeaders: {
                /**
                 * 字段名。
                 * @example `user_name`
                 */
                FieldName: string;
                /**
                 * 地理信息。
                 * @example `{xxx:xxx}`
                 */
                GeoClass: string;
                /**
                 * 字段数据类型。
                 * @example `INTEGER`
                 */
                FieldType: string;
                /**
                 * 日期维度。
                 * @example `HOUR/DAY/MONTH`
                 */
                TimeClass: string;
                /**
                 * 字段别名。
                 * @example `user_name_alias`
                 */
                Alias: string;
                /**
                 * 调度类型。
                 * @example `DAY`
                 */
                DimDateClass: string;
            }[];
            /**
             * 查询条件。
             */
            AstExpr: {
                /**
                 * 表达式类型。
                 * @example `binaryOp`
                 */
                ExprType: string;
                /**
                 * 表达式内容。
                 * @example `{"header":{"fieldName":"xxx"},"operator":"GreaterThanOrEqual","value":12345}`
                 */
                Expr: string;
            }[];
        };
    };
}
