export interface ListTablesResponse {
    /**
     * 满足条件的表总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `B16FB618-5E96-4FFD-BB0D-490C890A4030`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    TableList: {
        /**
         * 表详情列表。
         */
        Table: {
            /**
             * 物理库ID。
             * @example `1860****`
             */
            DatabaseId: string;
            /**
             * 表名。
             * @example `consumption_records`
             */
            TableName: string;
            /**
             * 表占用存储空间容量（统计值，非精确容量），单位为MB。
             * @example `1024`
             */
            StoreCapacity: number;
            OwnerIdList: {
                /**
                 * 表Owner的用户ID列表。
                 */
                OwnerIds: string[];
            };
            /**
             * 表描述信息。
             * @example `test`
             */
            Description: string;
            /**
             * 表编码。
             * @example `utf8`
             */
            Encoding: string;
            OwnerNameList: {
                /**
                 * 表Owner的用户昵称列表。
                 */
                OwnerNames: string[];
            };
            /**
             * 表所在的数据库。
             * @example `qntest`
             */
            TableSchemaName: string;
            /**
             * 表类型，默认为NORMAL。
             * @example `NORMAL`
             */
            TableType: string;
            /**
             * 表在DMS中的唯一识别码GUID（Globally Unique Identifier）。
             * @example `IDB_44743****.qntest.consumption_records`
             */
            TableGuid: string;
            /**
             * 表引擎。
             * @example `InnoDB`
             */
            Engine: string;
            /**
             * 表行数（统计值，非精确行数）。
             * @example `10085`
             */
            NumRows: number;
            /**
             * 表ID。
             * @example `44743****`
             */
            TableId: string;
        }[];
    };
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
