export interface ListLogicTablesResponse {
    /**
     * 满足条件记录数。
     * @example `1`
     */
    TotalCount: number;
    LogicTableList: {
        /**
         * 逻辑表详情列表。
         */
        LogicTable: {
            /**
             * 逻辑库ID。
             * @example `1`
             */
            DatabaseId: string;
            /**
             * 逻辑表表名。
             * @example `test`
             */
            TableName: string;
            /**
             * 分表个数。
             * @example `4`
             */
            TableCount: string;
            OwnerIdList: {
                /**
                 * 逻辑表Owner ID列表。
                 */
                OwnerIds: string[];
            };
            OwnerNameList: {
                /**
                 * 逻辑表Owner昵称列表。
                 */
                OwnerNames: string[];
            };
            /**
             * 逻辑表对应逻辑库名。
             * @example `yuyang_test`
             */
            SchemaName: string;
            /**
             * 是否逻辑表，恒为true。
             * @example `true`
             */
            Logic: boolean;
            /**
             * 逻辑表表达式。
             * @example `test[1-4]`
             */
            TableExpr: string;
            /**
             * 逻辑表GUID。
             * @example `IDB_L_308302.yuyang_test.test_ch`
             */
            TableGuid: string;
            /**
             * 逻辑表ID。
             * @example `1`
             */
            TableId: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `F1E6484F-9DF1-4406-9BDE-0861C4629B69`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
