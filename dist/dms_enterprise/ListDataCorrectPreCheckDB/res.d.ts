export interface ListDataCorrectPreCheckDBResponse {
    /**
     * 请求ID。
     * @example `95A972AF-FAED-4768-9360-7C0DF5D594D0`
     */
    RequestId: string;
    /**
     * 请求是否成功。
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
     * 预检查环节的数据库信息列表。
     */
    PreCheckDBList: {
        /**
         * 数据库ID。
         * @example `43***`
         */
        DbId: number;
        /**
         * 数据库名称。
         * @example `test@localhost:3306`
         */
        SearchName: string;
        /**
         * SQL条数。
         * @example `1`
         */
        SqlNum: number;
    }[];
}
