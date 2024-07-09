export interface CreateStructSyncOrderRequest {
    /**
     * 工单备注。
     * @example `test`
     */
    "Comment": string;
    /**
     * 相关人ID列表。
     */
    "RelatedUserList"?: number[];
    /**
     * 工单参数。
     */
    "Param": {
        /**
         * 基准库信息。
         */
        Source: {
            /**
             * 库ID，可调用[SearchDatabases](~~141876~~)接口获取。
             * @example `432****`
             */
            DbId: number;
            /**
             * 库搜索名，可调用[SearchDatabases](~~141876~~)接口获取。
             * @example `test`
             */
            DbSearchName: string;
            /**
             * 是否为逻辑库，取值：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            Logic: boolean;
            /**
             * 版本号，默认为最新的表结构版本，更多信息，请参见[管理表结构版本](~~202275~~)。
             * @example `e179bbb8163dcdcfacda24858bedb4d8006ae2b8`
             */
            VersionId: string;
        };
        /**
         * 目标库信息。
         */
        Target: {
            /**
             * 库ID，可调用[SearchDatabases](~~141876~~)接口获取。
             * @example `432***`
             */
            DbId: number;
            /**
             * 库搜索名，可调用[SearchDatabases](~~141876~~)接口获取。
             * @example `test`
             */
            DbSearchName: string;
            /**
             * 是否为逻辑库，取值：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            Logic: boolean;
            /**
             * 版本号。
             * > 当您输入目标库的表结构版本号时，该工单仅会对比两个库之间的表结构。
             * @example `e179bbb8163dcdcfacda24858bedb4d8006ae2b8`
             */
            VersionId: string;
        };
        /**
         * 是否忽略报错，取值：
         * - **true**：忽略，遇到错误会跳过当前失败SQL脚本，继续执行。
         * - **false**：不忽略，遇到出错则中断后面的SQL脚本，不再执行。
         * @example `false`
         */
        IgnoreError: boolean;
        /**
         * 同步的表信息列表。
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
    };
    /**
     * 上传附件成功后返回的附件Key，您可以调用[GetUserUploadFileJob](~~206069~~)接口获取。
     * @example `upload_3c7edea3-e4c3-4403-857d-737043036f69_test.sql`
     */
    "AttachmentKey"?: string;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
}
