export interface GetStructSyncOrderDetailResponse {
    /**
     * 请求ID。
     * @example `4E1D2B4D-3E53-4ABC-999D-1D2520B3471A`
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
     * 结构同步工单详情。
     */
    StructSyncOrderDetail: {
        /**
         * 源库信息。
         */
        SourceDatabaseInfo: {
            /**
             * 库ID。
             * @example `432532`
             */
            DbId: number;
            /**
             * 库搜索名。
             * @example `test`
             */
            SearchName: string;
            /**
             * 数据库类型。
             * @example `MySQL`
             */
            DbType: string;
            /**
             * 实例的环境类型，更多信息，请参见[实例环境说明](~~163309~~)。
             * @example `dev`
             */
            EnvType: string;
            /**
             * 是否为逻辑库，取值：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            Logic: boolean;
        };
        /**
         * 目标库信息。
         */
        TargetDatabaseInfo: {
            /**
             * 库ID。
             * @example `432543`
             */
            DbId: number;
            /**
             * 库搜索名。
             * @example `test`
             */
            SearchName: string;
            /**
             * 数据库类型。
             * @example `MySQL`
             */
            DbType: string;
            /**
             * 实例的环境类型，更多信息，请参见[实例环境说明](~~163309~~)。
             * @example `dev`
             */
            EnvType: string;
            /**
             * 是否为逻辑库，取值：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            Logic: boolean;
        };
        /**
         * 表结构类型，取值和说明如下：
         * - **DATASOURCE**：系统默认的最新版。
         * - **VERSION**：手动输入的历史版本。
         * @example `VERSION`
         */
        SourceType: string;
        /**
         * 源版本信息。
         * > 仅当**SourceType**为**VERSION**时显示。
         */
        SourceVersionInfo: {
            /**
             * 版本号。
             * @example `e179bbb8163dcdcfacda24858bedb4d8006ae2b8`
             */
            VersionId: string;
        };
        /**
         * 表结构类型，取值和说明如下：
         * - **DATASOURCE**：系统默认的最新版。
         * - **VERSION**：手动输入的历史版本。
         * @example `DATASOURCE`
         */
        TargetType: string;
        /**
         * 目标版本信息。
         * > 仅当**SourceType**为**VERSION**时显示。
         */
        TargetVersionInfo: {
            /**
             * 版本号。
             * @example `e179bbb8163dcdcfacda24858bedb4d8006ae2b8`
             */
            VersionId: string;
        };
        /**
         * 同步的表信息。
         */
        TableInfoList: {
            /**
             * 源表表名。
             * @example `test_tbl`
             */
            SourceTableName: string;
            /**
             * 目标表表名。
             * @example `test_tbl`
             */
            TargetTableName: string;
        }[];
        /**
         * 是否忽略报错，取值：
         * - **true**：忽略，遇到错误会跳过当前失败SQL脚本，继续执行。
         * - **false**：不忽略，遇到出错则中断后面的SQL脚本，不再执行。
         * @example `false`
         */
        IgnoreError: boolean;
    };
}
