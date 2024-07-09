export interface GetDataExportOrderDetailResponse {
    /**
     * 请求ID。
     * @example `427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D`
     */
    RequestId: string;
    /**
     * SQL结果集导出工单详情信息。
     */
    DataExportOrderDetail: {
        /**
         * 状态信息。
         */
        KeyInfo: {
            /**
             * 预校验ID。
             * @example `6393****`
             */
            PreCheckId: number;
            /**
             * 导出工单状态，取值如下：
             * - **PRE_CHECKING**：执行预校验。
             * - **PRE_CHECK_SUCCESS**：预校验成功。
             * - **PRE_CHECK_FAIL**：预校验失败。
             * - **WAITING_APPLY_AUDIT**：等待提交审批。
             * - **APPLY_AUDIT_SUCCESS**：提交审批成功。
             * - **ENABLE_EXPORT**：审批通过，允许导出。
             * - **WAITING_EXPORT**：等待调度进行导出。
             * - **DOING_EXPORT**：执行导出。
             * - **EXPORT_FAIL**：导出失败。
             * - **EXPORT_SUCCESS**：导出成功。
             * @example `EXPORT_SUCCESS`
             */
            JobStatus: string;
        };
        /**
         * 工单详情信息。
         */
        OrderDetail: {
            /**
             * 数据库ID。
             * @example `3733****`
             */
            DbId: number;
            /**
             * 导出的数据库名称。
             * @example `xxx@xxx:3306`
             */
            Database: string;
            /**
             * 导出工单的原因类别。
             * @example `text`
             */
            Classify: string;
            /**
             * 执行的导出SQL语句。
             * @example `SELECT * FROM DMS_test
             LIMIT 20;`
             */
            ExeSQL: string;
            /**
             * 是否为逻辑库。
             * @example `false`
             */
            Logic: boolean;
            /**
             * 系统校验影响的SQL行数。
             * @example `1`
             */
            ActualAffectRows: number;
            /**
             * 是否忽略影响行数。
             * @example `false`
             */
            IgnoreAffectRows: boolean;
            /**
             * 忽略校验原因。
             * @example `empty`
             */
            IgnoreAffectRowsReason: string;
            /**
             * 导出数据库环境信息。
             * @example `test`
             */
            EnvType: string;
        };
    };
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
     * 请求是否成功。返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
