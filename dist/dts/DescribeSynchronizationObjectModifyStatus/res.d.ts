export interface DescribeSynchronizationObjectModifyStatusResponse {
    /**
     * 同步对象变更状态，取值：
     * - **NotStarted**：未启动。
     * - **Prechecking**：预检查中。
     * - **PrecheckFailed**：预检查失败。
     * - **Migrating**：同步中。
     * - **Failed**：同步失败。
     * - **Finished**：同步完成。
     * @example `Finished`
     */
    Status: string;
    /**
     * 修改同步对象任务失败的错误提示。
     * @example `DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\n\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `B38C644B-4395-4F6F-86E3-592F26BE****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 全量数据初始化状态。
     */
    DataInitializationStatus: {
        /**
         * 全量数据初始化状态，取值包括：
         * - **NotStarted**：未启动。
         * - **Migrating **：初始化中。
         * - **Failed**：初始化失败。
         * - **Finished**：初始化完成。
         * @example `Finished`
         */
        Status: string;
        /**
         * 全量数据初始化进度，单位为百分比。
         * @example `100`
         */
        Percent: string;
        /**
         * 全量数据初始化失败的错误提示。
         * @example `java.lang.NumberFormatException: For input string: ""`
         */
        ErrorMessage: string;
        /**
         * 已完成全量数据初始化的记录数。
         * @example `39754`
         */
        Progress: string;
    };
    /**
     * 增量数据同步状态。
     * > 该参数合集及包含的返回参数即将下线。
     */
    DataSynchronizationStatus: {
        /**
         * 增量数据同步状态，取值包括：
         * - **NotStarted**：未启动。
         * - **Migrating**：同步中。
         * - **Failed**：同步失败。
         * - **Finished**：同步完成。
         * @example `Migrating`
         */
        Status: string;
        /**
         * 增量数据同步延迟，单位为秒。
         * @example `0`
         */
        Delay: string;
        /**
         * 增量数据同步进度，单位为百分比。
         * @example `100`
         */
        Percent: string;
        /**
         * 增量数据同步失败的错误提示。
         * @example `任务失败太久无法恢复`
         */
        ErrorMessage: string;
    };
    /**
     * 预检查状态。
     */
    PrecheckStatus: {
        /**
         * 预检查状态。
         * @example `Finished`
         */
        Status: string;
        /**
         * 预检查进度，单位为百分比。
         * @example `100`
         */
        Percent: string;
        /**
         * 各预检查项的执行情况。
         */
        Detail: {
            /**
             * 检查结果，返回值：
             * - Success：通过该项检查。
             * - Failed：未通过该项检查。
             * @example `Success`
             */
            CheckStatus: string;
            /**
             * 预检查未通过的错误提示。
             * > 当**CheckStatus**参数返回值为**Failed**时，才会返回本参数。
             * @example `Original error: Access denied for user 'dtstest'@'100.104.xxx.xx' (using password: YES)`
             */
            ErrorMessage: string;
            /**
             * 预检查项目。
             * @example `CHECK_CONN_SRC`
             */
            ItemName: string;
            /**
             * 预检查未通过时对应的修复方法。
             * > 当**CheckStatus**参数返回值为Failed时，才会返回本参数。
             * @example `CHECK_ERROR_DEST_CONN_REPAIR2`
             */
            RepairMethod: string;
        }[];
    };
    /**
     * 结构初始化状态。
     */
    StructureInitializationStatus: {
        /**
         * 结构初始化状态，取值包括：
         * - **NotStarted**：未启动。
         * - **Migrating **：初始化中。
         * - **Failed**：初始化失败。
         * - **Finished**：初始化完成。
         * @example `Finished`
         */
        Status: string;
        /**
         * 结构初始化进度，单位为百分比。
         * @example `100`
         */
        Percent: string;
        /**
         * 结构初始化失败的错误提示。
         * @example `DTS-1020042 Execute sql error sql: Table 'customer' already exists`
         */
        ErrorMessage: string;
        /**
         * 已完成结构初始化的表的数量。
         * @example `1`
         */
        Progress: string;
    };
}
