export interface ExecuteScriptResponse {
    /**
     * 请求ID。
     * @example `FE8EE2F1-4880-46BC-A704-5CF63EAF9A04`
     */
    RequestId: string;
    /**
     * 脚本执行返回结果列表，列表中每一项对应一个脚本执行结果。
     */
    Results: {
        /**
         * 执行查询脚本时，返回的结果集字段列表。
         */
        ColumnNames: string[];
        /**
         * 执行查询脚本时，返回的结果数据行。
         */
        Rows: any[];
        /**
         * 单个脚本执行是否成功。
         * @example `true`
         */
        Success: boolean;
        /**
         * 执行失败时，返回的错误信息。
         * @example `UnknownError`
         */
        Message: string;
        /**
         * 返回的结果记录数。
         * @example `1`
         */
        RowCount: number;
    }[];
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
