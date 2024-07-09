export interface GetDataExportPreCheckDetailResponse {
    /**
     * 请求ID。
     * @example `C1D39814-9808-47F8-AFE0-AF167239AC9B`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 预检查结果。
     */
    PreCheckResult: {
        /**
         * 是否忽略预校验，返回值如下：
         * - **true**：忽略预校验。
         * - **false**：不忽略预校验。
         * @example `true`
         */
        IgnoreAffectRows: boolean;
        PreCheckDetailList: {
            /**
             * 预检查详情列表。
             */
            PreCheckDetailList: {
                /**
                 * 预估影响SQL行数。
                 * @example `1`
                 */
                AffectRows: number;
                /**
                 * 实际SQL。
                 * @example `SELECT * FROM tmp_table LIMIT 1`
                 */
                SQL: string;
            }[];
        };
    };
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
