export interface GetDatabaseExportOrderDetailResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `CFD8FE00-36D9-4C1B-940D-65A7B73D9066`
     */
    RequestId: string;
    /**
     * 数据库导出工单详情。
     */
    DatabaseExportOrderDetail: {
        /**
         * 工单ID。
         * @example `821****`
         */
        Id: number;
        /**
         * 工单提交者。
         * @example `dmsuser`
         */
        Committer: string;
        /**
         * 工单提交者的用户ID，非阿里云UID。
         * @example `12***`
         */
        CommitterId: string;
        /**
         * 提交数据导出工单的业务背景。
         * @example `测试`
         */
        Comment: string;
        /**
         * 数据库搜索名称。
         * @example `test@xxx.xxx.xxx.xxx:3306`
         */
        SearchName: string;
        /**
         * 工单状态描述。
         * @example `工单审批中。`
         */
        StatusDesc: string;
        /**
         * 工作流状态描述。
         * @example `工单审批中。`
         */
        WorkflowStatusDesc: string;
        /**
         * 关键信息。
         */
        KeyInfo: {
            /**
             * 数据库ID。
             * @example `2583****`
             */
            DbId: number;
            /**
             * 导出结果的下载地址。
             * @example `https://oss.xxx.com`
             */
            DownloadURL: string;
            /**
             * 提交工单时间。
             * @example `2023-04-13 13:44:59`
             */
            AuditDate: string;
            /**
             * 配置信息。
             */
            Config: {
                /**
                 * 数据库名称。
                 * @example `dmstest`
                 */
                DbName: string;
                /**
                 * 导出内容。取值如下：
                 * - **DATA**：数据。
                 * - **STRUCT**：结构。
                 * - **DATA_STRUCT**：数据和结构。
                 * @example `DATA`
                 */
                ExportContent: string;
                /**
                 * 导出格式。取值如下：
                 * - **SQL**
                 * - **CSV**
                 * - **XLSX**
                 * @example `SQL`
                 */
                TargetOption: string;
                ExportTypes: {
                    /**
                     * 导出结构类型。
                     */
                    ExportTypes: string[];
                };
                SelectedTables: {
                    /**
                     * 选中导出哪些表。
                     */
                    SelectedTables: string[];
                };
                SQLExtOption: {
                    /**
                     * SQL脚本拓展选项。
                     */
                    SQLExtOption: string[];
                };
            };
        };
        /**
         * 执行日志。
         * @example `2023-04-12 14:58:32:015 Database Dump Start.
        2023-04-12 14:58:32:096 set server side query timeout, sql : set max_execution_time = 0`
         */
        Log: string;
    };
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
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
