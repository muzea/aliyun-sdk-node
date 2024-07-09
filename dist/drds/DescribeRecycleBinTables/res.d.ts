export interface DescribeRecycleBinTablesResponse {
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `5D64DE5944A1E541E0CB908A`
     */
    RequestId: string;
    /**
     * 返回数据对象。
     */
    Data: {
        /**
         * 原始表名。
         * @example `BIN_T4AG3CY5WWXPKHITCHJY`
         */
        OriginalTableName: string;
        /**
         * 表名。
         * @example `test`
         */
        TableName: string;
        /**
         * 创建时间。
         * @example `2019-09-16 14:42:06`
         */
        CreateTime: string;
    }[];
}
